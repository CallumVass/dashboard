"use strict";

var Reflux = require("reflux"),
    Actions = require("./../actions/DashboardActions"),
    initializing = true
    ;

module.exports = Reflux.createStore({
    init: function () {
        this.listenToMany(Actions);
        this.update();
    },
    onChangeTime: function () {
        this.update();
    },
    update: function () {
        initializing = !initializing;
        this.trigger(initializing);
    },
    getStatus:function()
    {
        return initializing;
    }
});
