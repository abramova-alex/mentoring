(function () {
    var exports = this;
    function Constant(name, value) {
        this.const = {};

        this.const[name] = value;
    }

    exports.constant = Constant;
}).call(window.sashaFramework || {});
