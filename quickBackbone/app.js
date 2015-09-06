/**
 * Created by shay on 16/02/2015.
 */


var Shark = Backbone.Model.extend({
    initialize: function () {
        console.log("create model");

        this.on("change:name", function (model) {
            alert("Shark is now called " + model.get("name"));
        });
    }
});


//pass in JSON object
var shark = new Shark({
    latitude: 45,
    longitude:38,
    name: 'Theophilus T. Shark'
});






var SharkTankView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        console.log("create view",shark);

        this.$el.append('sharks!');
    },
    events: {
        "click button": "dunk"
    },
    dunk: function () {
        alert('Oh dear, my legs have been bitten off.');
    }
});

var sharkTankView = new SharkTankView({
    el: $('#tank')
});

(function(){
    console.log("hello");
    shark.set({'name': 'shay'});
})();