var React = require('react');
var Item = require('./Item.react');


var ItemList = React.createClass({
  render: function(){
    var items = {'1': {'text': 'tweet-tweet1'}, 2: {'text': 'tweet tweet 2'}},
      rendered = [],
      key;

    for (key in items) {
      rendered.push(<Item key={key} item={items[key]} selected={this.props.selected} />);
      rendered.push(<hr />);
    }
    return (
      <div>{rendered}</div>
    )
  }});

module.exports = ItemList;
