window.sashaFramework = window.sashaFramework || {};

window.sashaFramework.Router = (function (w, d, exports) {
    var routes = {};

    function getFragment() {
        return clearSlashes(location.hash.replace('#', ''));
    }

    function clearSlashes(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    function add(model, route) {
        //if(typeof route === 'function') {
        //    model = route;
        //    route = '';
        //}
        routes[route] = { route: route, model: model};
    }

    function getRouteObj() {
        var routeName = getFragment();

        return routes[routeName];
    }

    function startRoute() {
        var routeObj = getRouteObj();

        routeObj.model.controller.renderView();
    }

    return {
        add: add,
        startRoute: startRoute
    };

})(window, document, window.sashaFramework);