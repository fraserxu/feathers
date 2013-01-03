(function(routers, views, collections) {
  
    // Router
    var Router = Backbone.Router.extend({
        
        routes:{
            ''          : 'gists',
            'gists'     : 'gists',
            'gists/:id' : 'gist',
            'public'     : 'publicgists',
            'public/:id' : 'publicgist',
            'user'      : 'usergists',
            'user/:id'  : 'usergist',
            '*actions'  : 'defaultAction'
        },

        initialize: function() {
            this.headerView = new views.Header();
            this.footerView = new views.Footer();
            this.appView = new views.AppView();
            
            // render header and footer
            this.headerView.render();
            this.footerView.render();
        },

        gists: function () {
            this.appView.loading();
            this.footerView.select('gists');

            if (!this.gistListView) {
                this.gistListView = new views.GistListView();
            }

            var that = this;
            this.gistListView.render(function(elem) {
                that.appView.render('#main', elem);
            });
        },

        gist: function (id) {
            this.appView.loading();
            this.footerView.select('gists');
            
            if (!this.GistView) {
                this.GistView = new views.GistView({id : id});
            }

            var that = this;
            this.GistView.render(function(elem) {
                that.appView.render('#main', elem);
            });
            
        },

        publicgists: function () {
            this.appView.loading();
            this.footerView.select('public');

            if (!this.PublicListView) {
                this.PublicListView = new views.PublicListView();
            }

            var that = this;
            this.PublicListView.render(function(elem) {
                that.appView.render('#main', elem);
            });

        },

        publicgist: function (id) {
            this.appView.loading();
            this.footerView.select('public');
            
            if (!this.PublicView) {
                this.PublicView = new views.PublicView({id : id});
            }

            var that = this;
            this.PublicView.render(function(elem) {
                that.appView.render('#main', elem);
            });

        },

        defaultAction: function(actions) {
            // No matching route
        }
    });

    routers = new Router();
    Backbone.history.start();

}).call(this, app.routers, app.views, app.collections);
