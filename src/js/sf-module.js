window.sashaFramework.Module = (function (exports) {
    function module(model, view, contoller) {
        this.model = model;
        this.view = view;
        this.controller = contoller;
    }

    module.prototype.viewCreate = function(template){
        this.view = new exports.view(template);

        return this;
    };

    module.prototype.modelCreate = function(data){
        this.model = new exports.model(data);

        return this;
    };

    module.prototype.controllerCreate = function(){
        this.controller = new exports.controller();

        return this;
    };

    exports.module = module;
})( window.sashaFramework || {});
