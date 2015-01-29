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
  }
}

module.exports = Actions;
