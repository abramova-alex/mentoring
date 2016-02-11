(function () {
    var exports = this;

    function Cntr(fn, view, model) {
        this.fn = fn;
        this.view = view;
        this.model = model;
    }

    Cntr.prototype.renderView = function () {
        var bindView = this.viewModelBinding(this.view.getTemplate(), this.model.getData());
        this.view.render(bindView);
    };

    Cntr.prototype.onModelChange = function () {
        var self = this;

        exports.pubSub().subscribe(self.model.name, self.renderView);
    };

    Cntr.prototype.viewModelBinding = function (viewHtml, newData) {
        var modelProps = Object.getOwnPropertyNames(newData);

        modelProps.forEach(function (element) {
            viewHtml = viewHtml.replace('{{' + element + '}}', newData[element]);
        });

        return viewHtml;
    };

    exports.cntr = Cntr;

}).call(window.sashaFramework || {});
