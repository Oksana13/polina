$('.text-input').click(function(){
    $('.text-input').removeClass('active');
    $(this).addClass('active');
});

function valueChanged() {
    if($('.info-check').is(":checked"))
        $(".info").show();
    else
        $(".info").hide();
}

rangy.init();
rangy.createMissingNativeApi(); // to polyfill window.getSelection() in IE8

(function () {
    var article = Backbone.Model.extend({
        defaults: {
            title: 'Default Title',
            body: 'Default body text'
        }
    });

    var articleView = Backbone.View.extend({

        events: {
            'mousedown .editable': 'editableClick'
        },

        editableClick: etch.editableInit
    });

    $article = $('.article');
    var model = new article();
    var view = new articleView({model: model, el: $article[0], tagName: $article[0].tagName});
})();