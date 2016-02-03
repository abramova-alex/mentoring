window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Router = (function (w, d, exports) {
    var routes = {};

    function getFragment() {
        return clearSlashes(location.hash.replace('#', ''));
    }

    function clearSlashes(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    function add(module, route) {
        if(typeof route === 'function') {
            module = route;
            route = '';
        }
        routes[route] = { route: route, module: module};
    }

    function getRouteObj() {
        var routeName = getFragment();

        return routes[routeName];
    }

    function startRoute() {
        var routeObj = getRouteObj();

        routeObj.module.onPageLoad();
    }

    return {
        add: add,
        startRoute: startRoute
    };

})(window, document, window.sashaFramework);