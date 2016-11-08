var name = $('#name').val(),
    email = $('#email').val(),
    app = $('#editable').text(),
    description = app + '<br><br>' + name + '<br>' + email;

function send() {
    $.post('http://polina.crisiscenter.ru/wp-admin/admin-ajax.php', {
        action: 'external_add_task',
        status: 'publish',
        title: 'Новое дело',
        descr: description
    });
}

