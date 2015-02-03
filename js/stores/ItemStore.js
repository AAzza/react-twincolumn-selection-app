var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher');
var Constants = require('../constants');

var CHANGE_EVENT = 'change';

var state = {
  session_info: null,
  items: {
    selected: [],
    notselected: []
  },
  current: {
    topic: "",
    topic_id: null,
  }
};

function init(info) {
  state.session_info = info;
  state.items = {selected: [], notselected: []};
}

function move_between_lists(id, from, to) {
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

function move(id, list, direction) {
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

function select(id) {
  move_between_lists(id, state.items.notselected, state.items.selected);
}

function unselect(id) {
  move_between_lists(id, state.items.selected, state.items.notselected);
}

function load_data(items, topic_id, topic_name) {
  state.items.notselected = items;
  state.items.selected = [];
  state.current.topic = topic_name;
  state.current.topic_id = topic_id;
}

var ItemStore = assign({}, EventEmitter.prototype, {
  getItems: function() {
    return state.items;
  },
  getTopic: function() {
    return state.current.topic;
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
    case Constants.ITEM_SELECT:
      select(action.id);
      ItemStore.emitChange();
      break;

    case Constants.ITEM_UNSELECT:
      unselect(action.id);
      ItemStore.emitChange();
      break;

    case Constants.ITEM_MOVE:
      move(action.id, state.items.selected, action.direction);
      move(action.id, state.items.notselected, action.direction);
      ItemStore.emitChange();
      break;

    case Constants.TOPIC_LOAD:
      load_data(action.items);
      ItemStore.emitChange();
      break;

    case Constants.APP_INIT:
      init(action.session_info);
      break;

    default:
      console.log(action);
  }
});

module.exports = ItemStore;
