$('#send').click(function (e){
    var name = $('#name').val(),
        email = $('#email').val(),
        type = $('#type').text();
        appLayout = $('#application').html();

    if( name.length >= 2 && email.length >= 5 ) {
        $('form.info').submit(function (e) {
            var app,
                description;

            $('.remove').text('');
            $('.personal-data').text('{ Персональные данные удалены }');


            app = $('#editable').html();
            description = app + '\n<br>\n<br>\n' + 'Имя: ' + name + '\n Email: ' + email;
            name = $('#name').val();

            $.post(
                'http://polina.crisiscenter.ru/wp-admin/admin-ajax.php',
                {
                    action: 'external_add_task',
                    status: 'publish',
                    title: 'Новое дело (' + type + ' ) - ' + name,
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

