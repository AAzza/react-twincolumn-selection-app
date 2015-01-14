var React = require('react');

var StatusBar = React.createClass({
  render: function() {
    return (
      <nav className="ink-navigation">
        <ul className="menu horizontal grey">
          <li><a href="#">Instructions</a></li>
          <li><a href="#">Select another topic</a></li>
          <li><a href="#">Show hidden messages</a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = StatusBar;
