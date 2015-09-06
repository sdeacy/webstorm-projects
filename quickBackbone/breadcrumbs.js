/**
 * Created by shay on 23/08/2015.
 */

$(function(){

    var BreadcrumbItemView = Marionette.ItemView.extend({
        template  : '#link_template',
        className : 'breadcrumb'
    });

    // The collection view, will render when initialized and when its collection changes
    var BreadcrumbListView = Marionette.CollectionView.extend({
        el         : '#breadcrumbs',
        childView  : BreadcrumbItemView,
        initialize : function(){
            this.listenTo(this.collection, 'change', this.render );
            this.render();
        }
    });

    // Create a new collection with 1 item to start with
    var breadcrumbCollection = new Backbone.Collection([{ name : 'foo', url : 'foo' }]);

    var breadcrumbView = new BreadcrumbListView({
        collection : breadcrumbCollection
    });

    // just wiring up the form to add a new item to the collection when submitted
    $('#add_breadcrumb').on('submit', function(e){
        e.preventDefault();
        breadcrumbCollection.add({
            name : $(this).find('[name=name]').val() || 'foo',
            url  : $(this).find('[name=url]').val() || 'bar'
        });
    });

});
