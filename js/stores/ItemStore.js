var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher');
var Constants = require('../constants');

var CHANGE_EVENT = 'change';

var state = {
  session_info: {
    session: null,
    topics: []
  },
  items: {
    selected: [],
    notselected: []
  },
  current: {
    topic: "",
    topic_id: null,
    loaded: false,
    show_hidden: false,
  },
};

function init(info) {
  state.session_info.session = info.session_id;
  state.session_info.topics = info.topics;
  state.items = {selected: [], notselected: []};
}

function load_topic(topic_id, topic_name, desc, items) {
  state.items.notselected = items;
  state.items.selected = [];
  state.current.topic = topic_name;
  state.current.topic_id = topic_id;
  state.current.loaded = true;
  state.current.desc = desc;
}

function submit_current_topic() {
  state.session_info.topics.splice(0, 1);
  state.items = {selected: [], notselected: []};
  state.current = {
    topic: "",
    topic_id: null,
    loaded: false,
  }
}

function _move_between_lists(id, from, to) {
  var i, item;
  for (i = 0; i < from.length; i++) {
    item = from[i];
    if (item.id === id) {
      to.push(item);
      from.splice(i, 1);
      return;
    }
  }
}

function select(id) {
  _move_between_lists(id, state.items.notselected, state.items.selected);
}

function unselect(id) {
  _move_between_lists(id, state.items.selected, state.items.notselected);
}

function move_up_down(id, list, direction) {
  var direction_step =  (direction === Constants.DIRECTION_DOWN) ? 1 : -1;
  var i, item;
  for (i = 0; i < list.length; i++) {
    item = list[i];
    if (item.id === id) {
      if ((direction === Constants.DIRECTION_DOWN && i === list.length) ||
           (direction === Constants.DIRECTION_UP && i === 0)) {
        return;
      }
      list.splice(i, 1); // remove from old position
      list.splice(i + direction_step, 0, item); // insert into new position
      return;
    }
  }
}

function set_hide(id, hide_status) {
  var i, item;
  for (i = 0; i < state.items.notselected.length; i++) {
    item = state.items.notselected[i];
    if (item.id === id) {
      item.hidden = hide_status;
      return;
    }
  }
}

function toggle_show_hidden() {
  state.current.show_hidden = !state.current.show_hidden;
}

var ItemStore = assign({}, EventEmitter.prototype, {
  getItems: function() {
    return state.items;
  },
  getTopic: function() {
    return state.current.topic;
  },
  getDescription: function() {
    return state.current.desc;
  },
  isLoaded: function() {
    return state.current.loaded;
  },
  getAllTopics: function() {
    return state.session_info.topics;
  },
  getSessionId: function() {
    return state.session_info.session;
  },
  getTopicId: function() {
    return state.current.topic_id;
  },
  showHidden: function() {
    return state.current.show_hidden;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.APP_INIT:
      init(action.session_info);
      break;

    case Constants.TOPIC_LOAD:
      load_topic(action.topic_id, action.topic, action.desc, action.items);
      ItemStore.emitChange();
      break;

    case Constants.TOPIC_SUBMIT:
      submit_current_topic();

    case Constants.ITEM_SELECT:
      select(action.id);
      ItemStore.emitChange();
      break;

    case Constants.ITEM_UNSELECT:
      unselect(action.id);
      ItemStore.emitChange();
      break;

    case Constants.ITEM_MOVE:
      move_up_down(action.id, state.items.selected, action.direction);
      move_up_down(action.id, state.items.notselected, action.direction);
      ItemStore.emitChange();
      break;

    case Constants.ITEM_HIDE:
      set_hide(action.id, true);
      ItemStore.emitChange();
      break;

    case Constants.ITEM_UNHIDE:
      set_hide(action.id, false);
      ItemStore.emitChange();
      break;

    case Constants.TOGGLE_SHOW_HIDDEN:
      toggle_show_hidden();
      ItemStore.emitChange();
      break;

    default:
      console.log(action);
  }
});

module.exports = ItemStore;
