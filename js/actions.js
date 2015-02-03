var Dispatcher = require('./dispatcher');
var Constants = require('./constants');
var $ = require('jquery-browserify');

var Actions = {
  loadFromServer: function(id) {
    $.ajax({
      url: 'http://localhost/api/topic/' + id,
      dataType: 'json',
      success: function(data) {
        Dispatcher.dispatch({
          actionType: Constants.TOPIC_LOAD,
          items: data.tweets
        });
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  },

  init: function(session) {
    $.ajax({
      url: 'http://localhost/api/' + session,
        dataType: 'json',
        success: function(data) {
          Dispatcher.dispatch({
            actionType: Constants.APP_INIT,
            session_info: data,
          });
        },
        error: function(xhr, status, err) {
          console.error(status, err.toString());
        }
      });
  },

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
