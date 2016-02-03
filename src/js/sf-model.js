window.sashaFramework.Model = (function (exports) {
    function Model(data) {
        this.data = data;
    }

    Model.prototype.update = function(data) {
        this.data = data;
    };

    Model.prototype.getData = function() {
        return this.data;
    };

    exports.model = Model;
})( window.sashaFramework || {});
