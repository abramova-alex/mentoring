window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Router = (function (w, d, exports) {
    var routes = {};

    function getFragment() {
        return clearSlashes(location.hash.replace('#', ''));
    }

    function clearSlashes(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    function add(controller, route) {
        if(typeof route === 'function') {
            controller = route;
            route = '';
        }
        routes[route] = { route: route, controller: controller};
    }

    function getRouteObj() {
        var routeName = getFragment();

        return routes[routeName];
    }

    function startRoute() {
        var routeObj = getRouteObj();

        routeObj.controller.view.render(routeObj);
    }

    return {
        add: add,
        startRoute: startRoute
    };

})(window, document, window.sashaFramework);