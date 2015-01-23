var React = require('react');

var StatusBar = React.createClass({
  render: function() {
    return (
      <nav className="ink-navigation">
        <ul className="menu horizontal grey">
          <li className="heading"><a href="#">Instructions</a></li>
          <li>
            <a href="#">Select another topic</a>
              <ul className="submenu">
                <li className="active"><a href="#">Very important topic</a></li>
                <li><a href="#">Another topic</a></li>
                <li><a href="#">Yet another topic</a></li>
              </ul>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = StatusBar;
