(function(views) {

    // Header View
    views.Header = Backbone.View.extend({
        
        el: '#header',
        
        events: {
            'click #search' : '_search'
        },

        template: _.template($('script[name=header]').html()),

        initialize: function() {
            this.render();
        },
        
        _search: function() {
            var temp = $('#search_username').attr('value');
            console.log('search user:', temp);
            
            // // GET /users/:user/gists
            // $.ajax({
            //     url : 'https://api.github.com/users/'+temp+'/gists',
            //     type: 'GET',
            //     dataType: 'json',
            //     success : function(result) {
            //         console.log('GET success', result);
            //         _.each(result, function(i,index){
            //             console.log('result: ' ,result[index].id); 
            //             $('#main #result').append('<li><a href="' + result[index].html_url + '"><p>' + result[index].id + '</p></a></li>');
            //             
            //         });
            // 
            //     },
            //     error : function() {
            //         console.log('GET error', arguments);
            //     }
            // });
        },
        
        render: function() {
            $(this.el).html(this.template());
            return this;
        }

    });

}).call(this, window.app.views);
