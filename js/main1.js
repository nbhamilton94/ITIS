window.LoginView = Backbone.View.extend({

    template:_.template($('#loginpage').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.SignupView = Backbone.View.extend({

    template:_.template($('#signup').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.SearchView = Backbone.View.extend({

    template:_.template($('#search').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.MatchesView = Backbone.View.extend({

    template:_.template($('#matches').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.ScheduleView = Backbone.View.extend({

    template:_.template($('#schedule').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.RequestsView = Backbone.View.extend({

    template:_.template($('#requests').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

var AppRouter = Backbone.Router.extend({

    routes:{
        "":"loginpage",
        "loginpage":"loginpage",
        "signup":"signup",
        "search":"search",
        "matches":"matches",
        "schedule":"schedule",
        "requests":"requests"
    },

    initialize:function () {
        // Handle back button throughout the application
        $('div').on('click','.glyphicon-arrow-left' ,function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    loginpage:function () {
        console.log('#loginpage');
        this.changePage(new LoginView());
    },

    signup:function () {
        console.log('#signup');
        this.changePage(new SignupView());
    },

    search:function () {
        console.log('#search');
        this.changePage(new SearchView());
    },

    matches:function () {
        console.log('#matches');
        this.changePage(new MatchesView());
    },

    requests:function () {
        console.log('#requests');
        this.changePage(new RequestsView());
    },

    schedule:function () {
        console.log('#schedule');
        this.changePage(new ScheduleView());
    },

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }
});

$(document).ready(function () {
    console.log('document ready');
    app = new AppRouter();
    Backbone.history.start();
});
