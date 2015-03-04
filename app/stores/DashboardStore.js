"use strict";

var Reflux = require("reflux"),
    Actions = require("./../actions/DashboardActions"),
    initializing = true
    ;

module.exports = Reflux.createStore({
    init: function () {
        this.listenToMany(Actions);
        initializing = !initializing;
        this.update();
    },
    onChangeTime: function () {
        initializing = !initializing;
        this.update();
    },
    update: function () {
        this.trigger(initializing);
    },
    getStatus:function()
    {
        return initializing;
    }
});
