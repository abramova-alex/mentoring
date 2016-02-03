window.sashaFramework.View = (function (w, d, exports) {
    var _rendered = false,
        placeHolder = null;

    function loadPlaceHolder() {
        placeHolder = d.querySelector('[sf-view]');
    }

    function render(routeObject) {
        loadPlaceHolder();
        loadTemplate(routeObject);
    }

    function loadTemplate(routeObject) {
        var request = new exports.http({
            method: 'GET',
            url: routeObject.controller.template,
            async: true
        });

        request.then(function(data){
            loadView(data, routeObject.controller);
        }, function(){
            console.log("error");
        })
    }

    function loadView( viewHtml, controller) {
        var data = controller.model.data,
            renderViewDelegate = renderView.bind(null, viewHtml, data),
            view = new viewContainer(renderViewDelegate);

        viewHtml = viewModelBinding(viewHtml, data);
        placeHolder.innerHTML = viewHtml;

        if (!view.isAsync && !_rendered) {
            renderView(placeHolder, viewHtml, data);
        }
    }

    function renderView(viewHtml, model) {
        viewHtml = viewModelBinding(viewHtml, model);
        placeHolder.innerHTML = viewHtml;
        _rendered = true;
    }

    function viewModelBinding(viewHtml, model) {
        var modelProps = Object.getOwnPropertyNames(model);

        modelProps.forEach(function (element) {
            viewHtml = viewHtml.replace('{{' + element + '}}', model[element]);
        });

        return viewHtml;
    }

    var viewContainer = function (renderDelegate) {
        this.render = renderDelegate;
        this.isAsync = false;
    };

    return {
        render: render
    }

})(window, document, window.sashaFramework);