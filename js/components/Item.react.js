var React = require('react');
var Actions = require('../actions');
var Constants = require('../constants');

var Item = React.createClass({
  render: function(){
    var actionButton, hideButton;

    if(this.props.selected) {
      actionButton = <button className="ink-button" onClick={this._onUnselectClick}>unselect</button>;
    } else {
      actionButton = <button className="ink-button" onClick={this._onSelectClick}>select</button>;
      hideButton = <button className="ink-button">hide</button>;
    }
    return (
      <div className="vertical-space grey">
        <div className="large">{this.props.item.text}</div>
          <div className="button-group">
            <button className="ink-button" onClick={this._onClickUp}>up</button>
            <button className="ink-button" onClick={this._onClickDown}>down</button>
            {actionButton}
            {hideButton}
          </div>
      </div>
    )
  },

  _onSelectClick: function() {
    Actions.select(this.props.item.id);
  },

  _onUnselectClick: function() {
    Actions.unselect(this.props.item.id);
  },

  _onClickUp: function() {
    Actions.move(this.props.item.id, Constants.DIRECTION_UP);
  },

  _onClickDown: function() {
    Actions.move(this.props.item.id, Constants.DIRECTION_DOWN);
  }
});

module.exports = Item;
