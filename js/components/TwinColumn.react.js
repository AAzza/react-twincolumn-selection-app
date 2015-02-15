var React = require('react');
var ItemList = require('./ItemList.react.js');
var ItemStore = require('../stores/ItemStore.js');
var Header = require('./Header.react');


var TwinColumn = React.createClass({
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
        <Header page='topic'/>
        <hr />
        <div className="column-group gutters">
          <div className="all-50">
            <h3> Not selected items</h3>
            <ItemList key={false} selected={false} show_hidden={ItemStore.showHidden()} items={this.state.notselected}/>
          </div>
          <div className="all-50">
            <h3> Selected items</h3>
            <ItemList key={true} selected={true} show_hidden={false} items={this.state.selected}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TwinColumn;
