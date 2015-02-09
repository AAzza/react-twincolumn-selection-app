var React = require('react');
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;
var ItemStore = require('../stores/ItemStore');
var Actions = require('../actions');

var StatusBar = React.createClass({
  mixins: [Navigation],

  render: function() {
    var links = [];
    var header;
    var page = this.props.page;
    if(page == 'instructions') {
      links.push(<button className="ink-button push-right green"
                         onClick={this._to_the_topic}>
                   To the topic </button>);
      header = <h1>Instructions</h1>;
    } else if (page == 'topic') {
      links.push(<Link className="ink-button" to="instructions"
                       params={{session: ItemStore.getSessionId()}}>
                  Read instructions</Link>);
      links.push(<button className="ink-button push-right green"
                         onClick={this._submit}>Submit and continue</button>);
      header = <h1>TOPIC: {ItemStore.getTopic()}</h1>;
    } else {
      header = <h1>Thank you!</h1>
    }
    return (
      <header className="vertical-space">
        {header}
        <nav className="ink-navigation">
          {links}
        </nav>
      </header>
    );
  },

  _to_the_topic: function() {
    if (!ItemStore.isLoaded() && ItemStore.getAllTopics().length > 0) {
        Actions.loadNextTopic();
        this.transitionTo('topic', {'session': ItemStore.getSessionId()});
    } else {
        this.transitionTo('final_page', {'session': ItemStore.getSessionId()});
    }
  },

  _submit: function() {
    Actions.submit();
    this._to_the_topic();
  }
});

module.exports = StatusBar;
