(function () {
    var exports = this;

    function Model(name, data) {
        this.name = name;
        this.data = data;
    }

    Model.prototype.update = function(data) {
        this.data = data;

        exports.pubSub().publish(this.name, data);
    };

    Model.prototype.getData = function() {
        return this.data;
    };

    exports.model = Model;
}).call(window.sashaFramework || {});
