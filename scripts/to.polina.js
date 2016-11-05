var descr = document.getElementById('editable').innerHTML;

data = JSON.stringify(
    {
        "id": "0",
        "title": "new case",
        "descr": "description",
        "tags": " "
    }
);

function send() {
    $.ajax({
        type: "POST",
        url: "../wp-content/themes/tstsite/inc/functions-tasks.php",
        data: data,
        contentType: "application/json"
    }).done(function() {
        console.log('success');
    });
}

