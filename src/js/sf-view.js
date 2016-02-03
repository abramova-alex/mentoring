window.sashaFramework.View = (function (exports) {
    function view(template) {
        this.template = template;
        this.rendered = false;
        this.placeHolder = document.querySelector('[sf-view]');
    }

    view.prototype.render = function (modelData){
        this.loadTemplate(modelData);
    };

    view.prototype.loadTemplate = function(modelData) {
        var request = new exports.http({
            method: 'GET',
            url: this.template,
            async: true
        });

        var self = this;

        request.then(function(data){
            self.loadView(data, modelData);
        }, function(){
            console.log("error");
        });
    };

    view.prototype.loadView = function (viewHtml, modelData) {
        var data = modelData,
            renderViewDelegate = this.renderView.bind(null, viewHtml, data),
            view = new viewContainer(renderViewDelegate);

        viewHtml = this.viewModelBinding(viewHtml, data);
        this.placeHolder.innerHTML = viewHtml;

        if (!view.isAsync && !this.rendered) {
            this.renderView(this.placeHolder, viewHtml, data);
        }
    };

    view.prototype.renderView = function(viewHtml, model) {
        viewHtml = this.viewModelBinding(viewHtml, model);
        this.placeHolder.innerHTML = viewHtml;
        this.rendered = true;
    };

    view.prototype.viewModelBinding = function (viewHtml, model) {
        var modelProps = Object.getOwnPropertyNames(model);

        modelProps.forEach(function (element) {
            viewHtml = viewHtml.replace('{{' + element + '}}', model[element]);
        });

        return viewHtml;
    };

    var viewContainer = function (renderDelegate) {
        this.render = renderDelegate;
        this.isAsync = false;
    };

    exports.view = view;
})( window.sashaFramework || {});