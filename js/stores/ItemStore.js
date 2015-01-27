var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var ItemStore = assign({}, EventEmitter.prototype, {
  getItems: function() {
    return {
      'selected': {'1': {'text': 'tweet-tweet1'}, 2: {'text': 'tweet tweet 2'}},
      'notselected': {'3': {'text': 'tweet-tweet1'}, 4: {'text': 'tweet tweet 2'}}
    };
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


module.exports = ItemStore;
