window.sashaFramework.View = (function (exports) {
    function View(url) {
        this.url = url;
        this.rendered = false;
        this.placeHolder = document.querySelector('[sf-view]');
        this.data = '';
        this.template = '';
    }

    View.prototype.render = function (newData) {
        this.data = newData;

        if (!this.template) {
            this.loadTemplate();
        } else {
            this.loadView();
        }
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
            self.loadView();
        }
    };

    function onError(error) {
        console.error("Failed!", error);
    }

    View.prototype.loadView = function () {
        this.placeHolder.innerHTML = this.viewModelBinding(this.template, this.data);
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