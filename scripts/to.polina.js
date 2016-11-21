$('#send').click(function (){
    var name = $('#name').val(),
        email = $('#email').val(),
        app = $('#editable').text(),
        description = app + '<br><br>' + name + '<br>' + email;

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
            $('#success').fadeIn().delay(5000).fadeOut();
        }

        function onAjaxError() {
            $('#error').fadeIn().delay(5000).fadeOut();
        }

    });



});

