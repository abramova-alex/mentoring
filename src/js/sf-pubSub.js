window.sashaFramework.PubSub = (function (exports) {
    function PubSub() {
        this.topics = {};
        this.lastUid = -1;
    }

    PubSub.prototype.publish = function (topic, data) {
        var self = this;

        var notify = function () {
            var subscribers = self.topics[topic];

            for ( var i = 0, j = subscribers.length; i < j; i++ ){
                subscribers[i].func( topic, data );
            }
        };

        setTimeout(notify , 0);

        return true;
    };

    PubSub.prototype.subscribe = function (topic, func) {
        if ( !this.topics.hasOwnProperty( topic ) ){

            this.topics[topic] = [];

        }

        var token = (++this.lastUid).toString();

        this.topics[topic].push( { token : token, func : func } );

        return token;
    };

    exports.pubSub = new PubSub();
})( window.sashaFramework || {});
