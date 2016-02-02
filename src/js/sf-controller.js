window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Controller = (function (w, d, undefined) {
    function Cntr(fn, template, model) {
        this.fn = fn;
        this.template = template;
        this.model = model;
    }


    return {
        cntr: Cntr
    }

})(window, document);