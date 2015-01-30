var React = require('react');
var Router = require('react-router');

var AppRoutes = require('./components/SelectorApp.react');

Router.run(AppRoutes, function (Handler) {
  React.render(<Handler />, document.getElementById('items'));
});
