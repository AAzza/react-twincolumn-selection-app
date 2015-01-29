var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher');
var Constants = require('../constants');

var CHANGE_EVENT = 'change';

var items = {
  'selected': [{id: 1, text: 'tweet-tweet1'}, {id: 2, text: 'tweet tweet 2'}],
  'notselected':  [{id: 3, text: 'tweet-tweet1'}, {id: 4, text: 'tweet tweet 2'}]
};

function move(id, from, to) {
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
  move(id, items.notselected, items.selected);
}

function unselect(id) {
  move(id, items.selected, items.notselected);
}

var ItemStore = assign({}, EventEmitter.prototype, {
  getItems: function() {
    return items;
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

    default:
      console.log(action);
  }
});

module.exports = ItemStore;
