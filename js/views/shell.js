app.ShellView = Backbone.View.extend({

    initialize: function () {
        this.searchResults = new app.EmployeeCollection();
        this.searchresultsView = new app.EmployeeListView({model: this.searchResults, className: 'dropdown-menu'});
        this.fortuneModel = new app.Employee();
        this.fortuneView = new app.FortuneView({model: this.fortuneModel});
    },

    render: function () {
        this.$el.html(this.template());
        // $('.navbar-search', this.el).append(this.searchresultsView.render().el);
        $('#fortuneParagraph', this.el).append(this.fortuneView.render().el);
        return this;
    },

    events: {
        "keyup .search-query": "search",
        "keypress .search-query": "onkeypress"
    },

    search: function (event) {
        var key = $('#searchText').val();
        this.searchResults.fetch({reset: true, data: {name: key}});
        var self = this;
        setTimeout(function () {
            $('.dropdown').addClass('open');
        });
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    },

    selectMenuItem: function(menuItem) {
        $('.navbar .nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    },

    getFortune: function() {
        // this.fortuneModel.fetch({reset: true, data: {name: key}});
        var random = Math.floor(Math.random() * 4) + 1;
        var id = random;
        // var id = 2;
        var employee = new app.Employee({id: id});
        var self = this;
        employee.fetch({
            success: function (data) {
                // console.log(data);
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                // app.$content.html(new app.EmployeeView({model: data}).render().el);
                // var someString = JSON.stringify(data.attributes);
                // var someString = data.get('firstName') + " " + 'is a jackass at ' + data.get('email') + '.';
                var someString = data.get('fortune_desc');
                // someString = $.parseJSON(someString);
                $('#fortuneParagraph').empty();
                $('#fortuneParagraph').append(someString);

            }
        });
        // app.Router.fortune;
        
    }

});