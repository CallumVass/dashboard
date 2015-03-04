"use strict";

var React = require("react"),
    Reflux = require("reflux"),
    Actions = require("./../actions/DashboardActions"),
    DashboardStore = require("./../stores/DashboardStore")
    ;

module.exports = React.createClass({
    displayName: "Dashboard",
    mixins: [Reflux.connect(DashboardStore, "initializing")],
    getInitialState: function () {
        return {
            initializing: DashboardStore.getStatus()
        };
    },
    handleClick: function () {
        Actions.changeTime();
    },
    render: function () {

        var initializingText = null;

        if (this.state.initializing) {
            initializingText = (
                <div>Initializing</div>
            );
        }

        return (
            <div>
                <h1>Dashboard {initializingText}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
});