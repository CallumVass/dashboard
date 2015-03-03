"use strict";

var Reflux = require("reflux"),
    Actions = require("./../actions/DashboardActions"),
    _ = require("lodash")
    ;

module.exports = Reflux.createStore({
    init: function () {
        this.listenToMany(Actions);
    }
});
