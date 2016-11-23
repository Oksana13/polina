$('#send').click(function (e){
    var name = $('#name').val(),
        email = $('#email').val(),
        appLayout = $('#application').html();

    if( name.length >= 2 && email.length >= 5 ) {
        $('form.info').submit(function (e) {
            var app,
                description;

            $('.remove').text('');
            $('.personal-data').text('Personal Data');


            app = $('#editable').html();
            description = app + '\n\n' + 'Имя: ' + name + '\n Email: ' + email;

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

            $('#application').html(appLayout);

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

