var React = require('react');

var Item = React.createClass({
  render: function(){
    return (
      <div className="vertical-space grey">
        <div>{this.props.item.text}</div>
          <div className="button-group">
            <button className="ink-button">move</button>
            <button className="ink-button">hide</button>
          </div>
      </div>
    )
  }});

module.exports = Item;
