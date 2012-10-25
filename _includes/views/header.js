(function(models, views, routers, templates) {

    views.Header = Backbone.View.extend({
        id: 'header',

        events: {},

        initialize: function(options) {},

        render: function() {
            this.$el.html(templates.header(_.extend(this.model, {})));
            return this;
        }
    });

}).apply(this, window.args);
