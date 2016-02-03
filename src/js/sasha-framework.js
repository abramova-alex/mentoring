window.sashaFramework = window.sashaFramework || {};

//= sf-http.js
//= sf-model.js
//= sf-view.js
//= sf-router.js
//= sf-controller.js


window.sashaFramework = (function (w, d, exports) {
    var sfMvc = function () {};

    sfMvc.prototype.AddRoute = function (controller, route) {
        exports.Router.add(controller, route);
    };


    sfMvc.prototype.createCntr = function (fn, model, view) {
        return new exports.cntr(fn, model, view);
    };

    sfMvc.prototype.createModel = function (data) {
        return new exports.model(data);
    };

    sfMvc.prototype.createView = function (template) {
        return new exports.view(template);
    };


    w['sfMvc'] = new sfMvc();//attach the mvc object to the wi

    sfMvc.prototype.init  = function() {
        w.onhashchange = exports.Router.startRoute;
        exports.Router.startRoute();
    };

})(window, document, window.sashaFramework);