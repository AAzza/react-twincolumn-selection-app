var React = require('react');
var Item = require('./Item.react');


var ItemList = React.createClass({
  render: function(){
    var items = this.props.items,
      rendered = [],
      key;
    for (key in items) {
      rendered.push(<Item key={items[key].id} item={items[key]} selected={this.props.selected} />);
      rendered.push(<hr />);
    }
    return (
      <div>{rendered}</div>
    )
  }});

module.exports = ItemList;
