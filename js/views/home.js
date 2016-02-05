app.HomeView = Backbone.View.extend({

    events:{
        "click #showMeBtn":"showMeBtnClick",
        "click #getBtn": "getBtn"
    },

    render:function () {
        this.$el.html(this.template());
        return this;
    },

    showMeBtnClick:function () {
        console.log("showme");
        app.shellView.search();
    },

    getBtn: function() {
        app.shellView.getFortune();
    }

});