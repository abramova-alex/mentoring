window.sashaFramework = window.sashaFramework || {};

//= sf-http.js
//= sf-pubSub.js
//= sf-module.js
//= sf-model.js
//= sf-view.js
//= sf-router.js
//= sf-controller.js
//= sf-constant.js


window.sashaFramework = (function (w, exports) {
    var sfMvc = function () {};

    sfMvc.prototype.AddRoute = function (controller, route) {
        exports.Router.add(controller, route);
    };


    sfMvc.prototype.createModule = function (model, view, controller) {
        return new exports.module(model, view, controller);
    };

    w['sfMvc'] = new sfMvc();

    sfMvc.prototype.init  = function () {
        w.onhashchange = exports.Router.startRoute;
        exports.Router.startRoute();
    };

})(window, window.sashaFramework);