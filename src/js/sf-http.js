window.sashaFramework.Http = (function (exports) {
    function Http(conf) {
        this.request = new XMLHttpRequest();
        this.method = conf.method;
        this.url = conf.url;
    }

    Http.prototype.get = function () {
        var self = this;

        return new Promise(function(resolve, reject) {
            self.request.open(self.method, self.url);

            self.request.onload = function() {
                if (self.request.status == 200) {
                    resolve(self.request.response);
                } else {
                    reject(Error(self.request.statusText));
                }
            };

            self.request.onerror = function() {
                reject(Error("Network Error"));
            };

            self.request.send();
        });
    };


    exports.http = Http;
})( window.sashaFramework || {});