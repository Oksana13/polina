function downloadPdf () {

    var header = $('#header').text(),
        date = $('#date').text(),
        text1 = $('#text1').text(),
        text2 = $('#text2').text(),
        text3 = $('#text3').text(),
        text4 = $('#text4').text(),
        signature = $('#signature').text();

    var applicationText = {
        content: [
            {
                columns: [
                    {
                        text: ''
                    },
                    [
                        header
                    ]
                ]
            },
            {
                stack: [
                    {
                        text: 'З А Я В Л Е Н И Е'
                    },
                    {
                        text: 'о предоставлении копий медицинских документов'
                    }
                ],
                margin: [0, 30],
                alignment: 'center'
            },
            {
                text: date,
                margin: [0, 0, 0, 10]
            },
            {
                text: text1,
                margin: [0, 0, 0, 10]
            },
            {
                text: text2,
                margin: [0, 0, 0, 10]
            },
            {
                text: text3,
                margin: [0, 0, 0, 10]
            },
            {
                text: text4,
                margin: [0, 0, 0, 10]
            },
            {
                text: signature,
                margin: [0, 0, 0, 10],
                alignment: 'right'
            }
        ]
    };














    pdfMake.createPdf(applicationText).download();
}
