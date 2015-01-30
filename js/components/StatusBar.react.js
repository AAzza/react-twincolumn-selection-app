var React = require('react');
var Router = require('react-router');
var Link=Router.Link;

var StatusBar = React.createClass({
  render: function() {
    return (
      <nav className="ink-navigation">
        <ul className="menu horizontal grey">
          <li className="heading"><Link to="instructions">Instructions</Link></li>
          <li>
            <a>Select another topic</a>
              <ul className="submenu">
                <li><Link to="topic">Very important topic</Link></li>
                <li><Link to="topic">Another topic</Link></li>
                <li><Link to="topic">Yet another topic</Link></li>
              </ul>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = StatusBar;
