// Boot
// ----
(function(models, views, routers, templates) {
    $(function() {
        loadApplication(function(err, data) {
            // Start the engines.
            window.app.instance = new views.Application({
                el: '#container',
                model: data
            }).render();

            // TODO
            // if (err) return;

            // Initialize router.
            window.router = new routers.Application({});

            // Start responding to routes.
            Backbone.history && Backbone.history.start();
        });
    });
}).apply(this, window.args);
