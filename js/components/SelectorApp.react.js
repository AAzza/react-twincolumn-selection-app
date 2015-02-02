var React = require('react');
var TwinColumn = require('./TwinColumn.react');
var Instructions = require('./Instructions.react');

var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler;


var SelectorApp = React.createClass({
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
