var React = require('react');
var StatusBar = require('./StatusBar.react');
var ItemList = require('./ItemList.react.js');
var ItemStore = require('../stores/ItemStore.js');


var SelectorApp = React.createClass({
  getInitialState: function() {
    return ItemStore.getItems();
  },
  componentDidMount: function() {
    ItemStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(ItemStore.getItems());
  },
  render: function() {
    return (
    <div className="ink-grid">
      <header className="vertical-space">
        <h1>TOPIC: some very important topic</h1>
        <StatusBar />
      </header>
      <div className="column-group gutters">
        <div className="all-50">
          <h3> Not selected items</h3>
          <ItemList key={false} selected={false} items={this.state.notselected}/>
        </div>
        <div className="all-50">
          <h3> Selected items</h3>
          <ItemList key={true} selected={true} items={this.state.selected}/>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = SelectorApp;
