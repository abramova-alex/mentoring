(function () {
    var exports = this;

    function Router() {
        this.routes = {};
    }

    Router.prototype.getFragment = function () {
        return this.clearSlashes(location.hash.replace('#', ''));
    };

    Router.prototype.clearSlashes = function (path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    };

    Router.prototype.add = function (module, route) {
        if (typeof route === 'function') {
            module = route;
            route = '';
        }

        this.routes[route] = { route: route, module: module};
    };

    Router.prototype.getRouteObj = function () {
        var routeName = this.getFragment();

        return this.routes[routeName];
    };

    Router.prototype.startRoute = function () {
        var self = this;
        console.log("", self);
        var routeObj = self.getRouteObj();

        routeObj.module.onPageLoad();
    };

    var instance;

    function getInstance() {
        if( ! instance ) {
            instance = new Router();
        }

        return instance;
    }

    exports.router = getInstance;

}).call(window.sashaFramework || {});