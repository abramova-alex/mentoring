window.sashaFramework = window.sashaFramework || {};

//= sf-http.js
//= sf-pubSub.js
//= sf-module.js
//= sf-model.js
//= sf-view.js
//= sf-router.js
//= sf-controller.js
//= sf-constant.js

(function (w) {
    var exports = this;
    var Sf = function () {};

    Sf.prototype.AddRoute = function (controller, route) {
        exports.Router.add(controller, route);
    };


    Sf.prototype.createModule = function (model, view, controller) {
        return new exports.module(model, view, controller);
    };

    Sf.prototype.init  = function () {
        w.onhashchange = exports.Router.startRoute;
        exports.Router.startRoute();
    };

    w['sf'] = new Sf();

}).call(window.sashaFramework || {}, window);