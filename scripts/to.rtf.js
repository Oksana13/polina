var app, file,
    appLayout = $('#application').html();

$('#download-rtf').click(function () {
    $('.remove').text('');

    app = $('#editable').html();
    file = new File([app], "Заявление.rtf", {type: "text/plain;charset=utf-8"});
    saveAs(file);

    // $('#application').html(appLayout);
});