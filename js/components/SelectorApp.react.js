var React = require('react');
var TwinColumn = require('./TwinColumn.react');
var Instructions = require('./Instructions.react');
var FinalPage = require('./FinalPage.react');
var Actions = require('../actions');

var Router = require('react-router');
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler;


var SelectorApp = React.createClass({
  mixins: [Router.State],
  componentDidMount: function () {
    Actions.init(this.getParams().session);
  },
  render: function() {
    return (
      <RouteHandler />
    );
  }
});

var Routes = (
  <Route name="app" path="/summary_generation/:session" handler={SelectorApp}>
    <Route name="instructions" handler={Instructions}/>
    <Route name="topic" handler={TwinColumn}/>
    <Route name="final_page" handler={FinalPage}/>
    <DefaultRoute handler={Instructions}/>
  </Route>
)

module.exports = Routes;
