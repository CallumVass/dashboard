"use strict";

var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute,
    Dashboard = require("./components/Dashboard")
    ;

var App = React.createClass({
    displayName: "App",
    render: function () {
        return (
            <div>
                <RouteHandler />
            </div>
        )
    }
});

var routes = (
    <Route name="app" path = "/" handler={App}>
        <DefaultRoute handler={Dashboard} />
    </Route>
);
Router.run(routes, function (Handler) {
    React.render(
        <Handler />, document.getElementById("app"));
});