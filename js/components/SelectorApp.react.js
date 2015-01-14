var React = require('react');
var StatusBar = require('./StatusBar.react');
var ItemList = require('./ItemList.react.js');

var SelectorApp = React.createClass({
  render: function() {
    return (
    <div className="ink-grid">
      <header className="vertical-space">
        <h1>Item selector <small>select tweets you consider the most informative</small></h1>
        <StatusBar />
      </header>
      <div className="column-group gutters">
        <div className="all-50">
          <h2> Not selected items</h2>
          <ItemList selected={false}/>
        </div>
        <div className="all-50">
          <h2> Selected items</h2>
          <ItemList selected={true}/>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = SelectorApp;
