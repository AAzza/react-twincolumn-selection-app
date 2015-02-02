var React = require('react');
var Router = require('react-router');
var Link=Router.Link;

var StatusBar = React.createClass({
  render: function() {
    var links = [];
    if(this.props.page == 'instructions') {
      links.push( <Link className="ink-button push-right green" to="topic">To the topic</Link>);
    } else {
      links.push(<Link className="ink-button" to="instructions">Read instructions</Link>);
      links.push(<Link className="ink-button push-right green" to="topic">Submit and continue</Link>);
    }
    return (
      <header className="vertical-space">
        <h1>TOPIC: some very important topic</h1>
        <nav className="ink-navigation">
          {links}
        </nav>
      </header>
    );
  }
});

module.exports = StatusBar;
