window.sashaFramework.Constant = (function (exports) {
    function Constant(name, value) {
        this.const = {};

        this.const[name] = value;
    }

    exports.constant = Constant;
})( window.sashaFramework || {});