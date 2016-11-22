$('#send').click(function (e){
    var name = $('#name').val(),
        email = $('#email').val(),
        app = $('#editable').text(),
        description = app + '<br><br>' + name + '<br>' + email;


    if( name.length >= 1 && email.length >= 1 ) {
        $('form.info').submit(function (e) {
            $.post(
                'http://polina.crisiscenter.ru/wp-admin/admin-ajax.php',
                {
                    action: 'external_add_task',
                    status: 'publish',
                    title: 'Новое дело',
                    descr: description
                })
                .success(onAjaxSuccess)
                .error(onAjaxError);

            e.preventDefault();

            function onAjaxSuccess() {
                $('#success').fadeIn().delay(3000).fadeOut();
                $('#fields').hide();
            }

            function onAjaxError() {
                $('#error').fadeIn().delay(3000).fadeOut();
                $('#fields').hide();
            }
        });

        } else {
            $('#fields').fadeIn().delay(3000).fadeOut();
            e.preventDefault();

    }

});

$('.close').click(function () {
    $('.alert').hide();
});

