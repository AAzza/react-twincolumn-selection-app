var React = require('react');
var StatusBar = require('./StatusBar.react');
var TwinColumn = require('./TwinColumn.react');
var Instructions = require('./Instructions.react');

var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler;


var SelectorApp = React.createClass({
  render: function() {
    return (
    <div className="ink-grid">
      <header className="vertical-space">
        <h1>TOPIC: some very important topic</h1>
        <StatusBar />
      </header>
      <RouteHandler />
    </div>
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
