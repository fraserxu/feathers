(function(routers, views, collections) {
  
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            '': 'gists',
            'discover': 'gists',
            'gists/:id': 'gist',
            'user': 'usergists',
            'user/:id': 'usergist'
            // '/forked': 'forked',
            // '/starred': 'starred',
        },

        initialize: function() {
            // ui part
            this.headerView = new views.Header();
            this.footerView = new views.Footer();
        },

        gists: function () {
            console.log('[r] gists');
            if (collections.Gists.length) {
                // the exsit collection 
                new views.Gists({collection: collections.Gists}).render();
            } else {
                // just opened this url need get the collection
                new views.AppView({
                    collection: collections.Gists,
                    view: views.Gists
                });
            }
        },

        gist: function (param) {
            var model = collections.Gists.completed(param);
            if (model) {
                // the exsit model in collection
                new views.Gist({model: model}).render();
            } else {
                // get the latest collection to find the model or just opened this url need get the collection
                new views.AppView({
                    collection: collections.Gists,
                    view: views.Gist,
                    param: param
                });
            }
        },
        
        usergists: function() {
            console.log('[r] usergists');
            new views.AppView({
                collection: collections.Usergists,
                view: views.UserGists
            });

        },
        
        usergist: function(param) {
            console.log('router usergist');
            var model = collections.Usergists.completed(param);
            if (model) {
                // the exsit model in collection
                new views.UserGist({model: model}).render();
            } else {
                // get the latest collection to find the model or just opened this url need get the collection
                new views.AppView({
                    collection: collections.Usergists,
                    view: views.UserGist,
                    param: param
                });
            }
        }
    });

    routers = new Router();
    Backbone.history.start();

}).call(this, app.routers, app.views, app.collections);
