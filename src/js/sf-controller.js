window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Controller = (function (exports) {
    function cntr(fn, view, model) {
        this.fn = fn;
        this.view = view;
        this.model = model;
    }

    exports.cntr = cntr;

})(window.sashaFramework || {});
