var Dispatcher = require('./dispatcher');
var Constants = require('./constants');

var Actions = {
  select: function(id) {
    Dispatcher.dispatch({
      actionType: Constants.ITEM_SELECT,
      id: id
    });
  },

  unselect: function(id) {
    Dispatcher.dispatch({
      actionType: Constants.ITEM_UNSELECT,
      id: id
    });
  },

  move: function(id, direction) {
    Dispatcher.dispatch({
      actionType: Constants.ITEM_MOVE,
      id: id,
      direction: direction
    });
  }
};

module.exports = Actions;
