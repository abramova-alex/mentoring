window.sashaFramework.PubSub = (function (exports) {
    function pubSub() {
        this.topics = {};
        this.lastUid = -1;
    }

    pubSub.prototype.publish = function( topic , data){
        var self = this;

        var notify = function() {
            var subscribers = self.topics[topic];

            for ( var i = 0, j = subscribers.length; i < j; i++ ){
                subscribers[i].func( topic, data );
            }
        };

        setTimeout( notify , 0 );

        return true;
    };

    pubSub.prototype.subscribe = function( topic, func ){
        var token = (++this.lastUid).toString();

        this.topics[topic].push( { token : token, func : func } );

        return token;
    };

    exports.pubSub = pubSub;
})( window.sashaFramework || {});
