window.sashaFramework.View = (function (w, d, exports) {
    var _rendered = false,
        placeHolder = null,
        template = '';

    function loadPlaceHolder() {
        placeHolder = d.querySelector('[sf-view]');
    }

    function render(routeObject) {
        loadPlaceHolder();
        loadTemplate(routeObject);
    }

    function setTemplate(data) {
        template = data;
    }

    function loadTemplate(routeObject) {
        var http;

        http = new XMLHttpRequest();

        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                loadView(routeObject.controller, placeHolder, http.responseText);
            }
        };
        http.open('GET', routeObject.controller.template, true);
        http.send();
    }

    function loadView(controller, viewElement, viewHtml) {
        var renderViewDelegate = renderView.bind(null, viewElement, viewHtml, controller.model),
            view = new viewContainer(renderViewDelegate);

        viewHtml = viewModelBinding(viewHtml, controller.model);
        viewElement.innerHTML = viewHtml;

        if (!view.isAsync && !_rendered) {
            renderView(viewElement, viewHtml, controller.model);
        }
    }

    function renderView(viewElement, viewHtml, model) {
        viewHtml = viewModelBinding(viewHtml, model);
        viewElement.innerHTML = viewHtml;
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