var Dispatcher = require('./dispatcher');
var Constants = require('./constants');
var ItemStore = require('./stores/ItemStore');
var $ = require('jquery-browserify');

var Actions = {
  loadFromServer: function(id) {
    $.ajax({
      url: '/api/topic/' + id,
      dataType: 'json',
      success: function(data) {
        Dispatcher.dispatch({
          actionType: Constants.TOPIC_LOAD,
          items: data.tweets,
          desc: data.desc,
          topic: data.topic,
          topic_id: data.topic_id
        });
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  },

  loadNextTopic: function() {
    this.loadFromServer(ItemStore.getAllTopics()[0]);
  },

  submit: function() {
    var data = {
      session_id: ItemStore.getSessionId(),
      topic: ItemStore.getTopic(),
      tweets: ItemStore.getItems()['selected'],
      topic_id: ItemStore.getTopicId()
    };
    Dispatcher.dispatch({
      actionType: Constants.TOPIC_SUBMIT
    });
    $.ajax({
      type: 'POST',
      url: '/api/summary',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  },

  init: function(session) {
    $.ajax({
      url: '/api/' + session,
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
  },

  hide: function(id) {
    Dispatcher.dispatch({
      actionType: Constants.ITEM_HIDE,
      id: id
    });
  },

  unhide: function(id) {
    Dispatcher.dispatch({
      actionType: Constants.ITEM_UNHIDE,
      id: id
    });
  },

  toggleShowHidden: function() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SHOW_HIDDEN
    });
  }
};

module.exports = Actions;
