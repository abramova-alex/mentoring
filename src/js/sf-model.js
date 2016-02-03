window.sashaFramework.Model = (function (exports) {
    function Model(data) {
        this.data = data;
    }

    Model.prototype.update = function(data) {
        this.data = data;
    };

    exports.model = Model;
})( window.sashaFramework || {});
