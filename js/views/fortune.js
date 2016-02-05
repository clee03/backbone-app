app.FortuneView = Backbone.View.extend({

    render:function () {
        this.$el.html(this.template());
        return this;
    }

});

// app.FortuneView = Backbone.View.extend({

//     tagName:'p',

//     className:'fortune',

//     initialize:function () {
//         var self = this;
//             $('#fortuneParagraph').append('appended render');

//         // this.model.on("reset", this.render, this);
//         // this.model.on("add", function () {
//         //     self.$el.append('Appended');
//         // });
//     },

//     render:function () {
//         this.$el.empty();
//         _.each(this.model.models, function () {
//             this.$el.append('appended render');
//         }, this);
//         return this;
//     }
// });
