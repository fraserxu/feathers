(function(views) {
    
    // This is the top of Collection UI.
    views.Collection = Backbone.View.extend({

        renderCollection: function (callback) {
            var that = this;
            this.collection.fetch({
                success: function(collection) {
                    if (collection.length) {
                        $(that.el).html( that.template({ collection: collection.toJSON() }) );
                    } else {
                        $(that.el).html( 'Can\'t find the data you want.' );
                    }
                    callback($(that.el));
                },
                error: function(coll, res) {
                    if (res.status === 404) {
                        // TODO: handle 404 Not Found
                    } else if (res.status === 500) {
                        // TODO: handle 500 Internal Server Error
                    }
                }
            });
        }

    });

}).call(this, app.views);
