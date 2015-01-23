var React = require('react');
var StatusBar = require('./StatusBar.react');
var ItemList = require('./ItemList.react.js');

var SelectorApp = React.createClass({
  render: function() {
    var items = {'1': {'text': 'tweet-tweet1'}, 2: {'text': 'tweet tweet 2'}};
    return (
    <div className="ink-grid">
      <header className="vertical-space">
        <h1>TOPIC: some very important topic</h1>
        <StatusBar />
      </header>
      <div className="column-group gutters">
        <div className="all-50">
          <h3> Not selected items</h3>
          <ItemList key={false} selected={false} items={items}/>
        </div>
        <div className="all-50">
          <h3> Selected items</h3>
          <ItemList key={true} selected={true} items={items}/>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = SelectorApp;
