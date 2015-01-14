var React = require('react');
var Item = require('./Item.react');


var ItemList = React.createClass({
  render: function(){
    return (
      <div>
        <Item selected={this.props.selected}/>
        <hr />
        <Item />
      </div>
    )
  }});

module.exports = ItemList;
