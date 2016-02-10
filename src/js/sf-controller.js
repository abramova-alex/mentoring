window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Controller = (function (exports) {
    function Cntr(fn, view, model) {
        this.fn = fn;
        this.view = view;
        this.model = model;
    }

    Cntr.prototype.renderView = function () {
        this.view.render(this.model.getData());
    };

    Cntr.prototype.onModelChange = function () {
        var self = this;

        exports.pubSub().subscribe(self.model.name, self.renderView);
    };

    exports.cntr = Cntr;

})(window.sashaFramework || {});
