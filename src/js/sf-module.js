window.sashaFramework.Module = (function (exports) {
    function Module(model, view, controller) {
        this.model = model;
        this.view = view;
        this.controller = controller;
    }

    Module.prototype.viewCreate = function (url) {
        this.view = new exports.view(url);

        return this;
    };

    Module.prototype.modelCreate = function (data) {
        this.model = new exports.model(data);

        return this;
    };

    Module.prototype.controllerCreate = function (fn) {
        this.controller = new exports.cntr(fn, this.view, this.model);

        return this;
    };

    Module.prototype.constantCreate = function (name, value) {
        this.constant = new exports.constant(name, value);

        return this;
    };

    Module.prototype.onPageLoad = function () {
        this.controller.fn();
        this.controller.renderView();
    };

    exports.module = Module;
})( window.sashaFramework || {});
