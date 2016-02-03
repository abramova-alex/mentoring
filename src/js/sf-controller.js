window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Controller = (function (exports) {
    function cntr(fn, view, model) {
        this.fn = fn;
        this.view = view;
        this.model = model;
    }

    cntr.prototype.renderView = function() {
        this.view.render(this.model.data);
    };

    exports.cntr = cntr;

})(window.sashaFramework || {});
