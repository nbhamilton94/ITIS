

window.HomeView = Backbone.View.extend({

    template:_.template($('#home').html()),

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
    initialize: function(options){
      $('body').addClass('schedule-bkg');
      this.schedulePageFlag = true;
    },

    template:_.template($('#schedule').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.RequestsView = Backbone.View.extend({

    initialize: function(options){
        $('body').addClass('requests');
        this.requestPageFlag = true;
    },

    template:_.template($('#requests').html()),

    render:function (eventName) {

        $(this.el).html(this.template());
        return this;
    }


});

var AppRouter = Backbone.Router.extend({

    routes:{
        "home":"home",
        "signup":"signup",
        "search":"search",
        "matches":"matches",
        "schedule":"schedule",
        "requests":"requests"
    },

    initialize:function () {
        // Handle back button throughout the application
        $('.backbutton').live('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home:function () {
        console.log('#home');
        this.changePage(new HomeView());
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

    changePage:function (view) {
        $(view.el).attr('data-role','page');
        view.render();
        $('body').append($(view.el));

        var transition = "none";
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        if (this.requestPageFlag) { //if I'm on the request page
          $('body').removeClass('requests');
          this.requestPageFlag = false;
        } else if (this.schedulePageFlag) {
          $('body').removeClass('schedule-bkg'); //if I'm on the schedule page
          this.schedulePageFlag = false;
        }
        $.mobile.changePage($(view.el), {changeHash:false, transition: transition});
        

    }
});




$(document).ready(function () {
    console.log('document ready');
    app = new AppRouter();
    Backbone.history.start();
});
