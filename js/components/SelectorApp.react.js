var React = require('react');
var TwinColumn = require('./TwinColumn.react');
var Instructions = require('./Instructions.react');
var Actions = require('../actions');

var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler;


var SelectorApp = React.createClass({
  componentDidMount: function () {
    // hard-code session_id for now
    Actions.init("e07ccdfa-d523-467b-8ecb-d9f4afd6b056");
  },
  render: function() {
    return (
      <RouteHandler />
    );
  }
});

var Routes = (
  <Route name="app" path="/" handler={SelectorApp}>
    <Route name="instructions" handler={Instructions}/>
    <Route name="topic" handler={TwinColumn}/>
    <DefaultRoute handler={Instructions}/>
  </Route>
)

module.exports = Routes;
