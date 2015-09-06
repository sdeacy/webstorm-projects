/**
 * Created by shay on 16/02/2015.

var ToDO = new Backbone.Model.extend({});

var todo = new ToDO({
    "desc" : "buy milk",
    "status" : "incomplete"
});
 */

(function($){
var AppointView = new Backbone.View.extend({
    el : $('body'),
    render  : function(){
        var html = 'h2' + this.model.get('status') + '</h2>';
        $(this.el).html(html);
    }
});

var appointview = new AppointView();

appointview.render();

})(jQuery);

