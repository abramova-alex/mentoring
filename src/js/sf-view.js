window.sashaFramework.View = (function (exports) {
    function view(template) {
        this.template = template;
        this.rendered = false;
        this.placeHolder = document.querySelector('[sf-view]');
    }

    view.prototype.render = function (newData){
        this.loadTemplate(newData);
    };

    view.prototype.loadTemplate = function(newData) {
        var request = new exports.http({
            method: 'GET',
            url: this.template,
            async: true
        });

        var self = this;

        request.then(function(data){
            self.loadView(data, newData);
        }, function(){
            console.log("error");
        });
    };

    view.prototype.loadView = function (viewHtml, newData) {
        var data = newData,
            renderViewDelegate = this.renderView.bind(null, viewHtml, data),
            view = new viewContainer(renderViewDelegate);

        viewHtml = this.viewModelBinding(viewHtml, data);
        this.placeHolder.innerHTML = viewHtml;

        if (!view.isAsync && !this.rendered) {
            this.renderView(this.placeHolder, viewHtml, data);
        }
    };

    view.prototype.renderView = function(viewHtml, newData) {
        viewHtml = this.viewModelBinding(viewHtml, newData);
        this.placeHolder.innerHTML = viewHtml;
        this.rendered = true;
    };

    view.prototype.viewModelBinding = function (viewHtml, newData) {
        var modelProps = Object.getOwnPropertyNames(newData);

        modelProps.forEach(function (element) {
            viewHtml = viewHtml.replace('{{' + element + '}}', newData[element]);
        });

        return viewHtml;
    };

    var viewContainer = function (renderDelegate) {
        this.render = renderDelegate;
        this.isAsync = false;
    };

    exports.view = view;
})( window.sashaFramework || {});