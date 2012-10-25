(function(models, views, routers, templates) {

    // This is the top-level piece of UI.
    views.Application = Backbone.View.extend({

        // Events
        // ------

        events: {},

        // Initialize
        // ----------

        initialize: function() {
            _.bindAll(this);
            this.header = new views.Header({
                model: this.model
            });
        },

        render: function() {
            $(this.header.render().el).prependTo(this.el);
            return this;
        }

        // Helpers
        // -------

        // Main Views
        // ----------

    });

}).apply(this, window.args);
