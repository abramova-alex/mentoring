window.sashaFramework.Http = (function (exports) {
    function http(conf) {
        this.request = new XMLHttpRequest();
        this.method = conf.method;
        this.url = conf.url;
        this.async = conf.async;
    }

    http.prototype.then = function (onSuccess, onError) {
        this.request.open(this.method, this.url + '', this.async);
        this.request.send();
        var self = this;

        if (!this.async) {
            if (this.request.status !== 404) {
                onSuccess(this.request.response);
            } else {
                onError(this.request.response);
            }
        } else {
            this.request.onreadystatechange = function () {
                if (self.request.readyState !== 4) {
                    return;
                }

                if (self.request.status !== 400) {
                    onSuccess(self.request.responseText);
                } else {
                    onError(self.request.response);
                }
            };
        }
    };

    exports.http = http;
})( window.sashaFramework || {});