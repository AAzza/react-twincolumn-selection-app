var React = require('react');

var Item = React.createClass({
  render: function(){
    var actionButton, hideButton;

    if(this.props.selected) {
      actionButton = <button className="ink-button">unselect</button>;
    } else {
      actionButton = <button className="ink-button">select</button>;
      hideButton = <button className="ink-button">hide</button>;
    }
    return (
      <div className="vertical-space grey">
        <div>{this.props.item.text}</div>
          <div className="button-group">
            <button className="ink-button">up</button>
            <button className="ink-button">down</button>
            {actionButton}
            {hideButton}
          </div>
      </div>
    )
  }});

module.exports = Item;
