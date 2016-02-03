window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Controller = (function (exports) {
    function cntr(fn, template, model) {
        this.fn = fn;
        this.template = template;
        this.model = model;
    }

    exports.cntr = cntr;

})(window.sashaFramework || {});
