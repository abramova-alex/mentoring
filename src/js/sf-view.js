window.sashaFramework.View = (function (exports) {
    function View(name, url) {
        this.url = url;
        this.placeHolder = document.querySelector(name);
        this.template = '';
    }

    View.prototype.render = function (newData) {
        this.loadView(newData);
    };

    View.prototype.getTemplate = function () {
        if (!this.template) {
            this.loadTemplate();
        }

        return this.template;
    };

    View.prototype.loadTemplate = function () {
        var request = new exports.http({
            method: 'GET',
            url: this.url
        });

        var self = this;

        request.get()
            .then(onSucces, onError);

        function onSucces(data) {
            self.template = data;
        }
    };

    function onError(error) {
        console.error("Failed!", error);
    }

    View.prototype.loadView = function (data) {
        this.placeHolder.innerHTML = data;
        // add async later
    };

    View.prototype.viewModelBinding = function (viewHtml, newData) {
        var modelProps = Object.getOwnPropertyNames(newData);

        modelProps.forEach(function (element) {
            viewHtml = viewHtml.replace('{{' + element + '}}', newData[element]);
        });

        return viewHtml;
    };

    exports.view = View;
})( window.sashaFramework || {});