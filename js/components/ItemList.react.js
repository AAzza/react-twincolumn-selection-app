var React = require('react');
var Item = require('./Item.react');


var ItemList = React.createClass({
  render: function(){
    var items = this.props.items,
      show_hidden = this.props.show_hidden,
      rendered = [],
      key, item;
    for (key in items) {
      item = items[key];
      if (!show_hidden && item.hidden) {
        continue;
      }
      rendered.push(<Item key={item.id}
        item={item}
        selected={this.props.selected}
        hidden={item.hidden}/>);
      rendered.push(<hr />);
    }
    return (
      <div>{rendered}</div>
    );
  }});

module.exports = ItemList;
