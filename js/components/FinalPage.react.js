var React = require('react');
var Header = require('./Header.react');

var FinalPage = React.createClass({
  render: function() {
    return (
      <div className="ink-grid">
        <Header page='final'/>
        <hr />
        <div className="column-group gutters">
          <div className="all-100 center">
            <p>Thank you for participation!</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FinalPage;
