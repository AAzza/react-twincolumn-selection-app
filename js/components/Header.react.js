var React = require('react');
var Router = require('react-router');
var Link=Router.Link;
var ItemStore = require('../stores/ItemStore');

var StatusBar = React.createClass({
  render: function() {
    var links = [];
    var header;
    if(this.props.page == 'instructions') {
      links.push( <Link className="ink-button push-right green" to="topic">To the topic</Link>);
      header = <h1>Instructions</h1>;
    } else {
      links.push(<Link className="ink-button" to="instructions">Read instructions</Link>);
      links.push(<Link className="ink-button push-right green" to="topic">Submit and continue</Link>);
      header = <h1>TOPIC: {ItemStore.getTopic()}</h1>;
    }
    return (
      <header className="vertical-space">
        {header}
        <nav className="ink-navigation">
          {links}
        </nav>
      </header>
    );
  }
});

module.exports = StatusBar;
