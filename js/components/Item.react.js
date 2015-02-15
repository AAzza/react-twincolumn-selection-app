var React = require('react');
var Actions = require('../actions');
var Constants = require('../constants');

var Item = React.createClass({
  render: function(){
    var buttons = [];

    if(this.props.selected) {
      buttons.push(<button className="ink-button" onClick={this._onUnselectClick}>unselect</button>);
      buttons.push(<button className="ink-button" onClick={this._onClickUp}>up</button>);
      buttons.push(<button className="ink-button" onClick={this._onClickDown}>down</button>);
    } else if (this.props.hidden) {
      buttons.push(<button className="ink-button" onClick={this._onClickUnHide}>unhide</button>);
    } else {
      buttons.push(<button className="ink-button" onClick={this._onSelectClick}>select</button>);
      buttons.push(<button className="ink-button" onClick={this._onClickHide}>hide</button>);
    }
    return (
      <div className="vertical-space grey">
        <div className="large">{this.props.item.text}</div>
          <div className="button-group">
            {buttons}
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
  },

  _onClickHide: function() {
    Actions.hide(this.props.item.id);
  },

  _onClickUnHide: function() {
    Actions.unhide(this.props.item.id);
  }
});

module.exports = Item;
