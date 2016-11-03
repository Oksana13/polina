var descr = document.getElementById('editable').innerHTML;
data = JSON.stringify(
    {
        "task_title": "new case",
        "task_descr": descr,
        "post_tag": " ",
        "reward": " "
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

