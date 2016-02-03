window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Controller = (function (exports) {
    function Cntr(fn, view, model) {
        this.fn = fn;
        this.view = view;
        this.model = model;
    }

    Cntr.prototype.renderView = function() {
        this.view.render(this.model.data);
    };

    exports.cntr = Cntr;

})(window.sashaFramework || {});
