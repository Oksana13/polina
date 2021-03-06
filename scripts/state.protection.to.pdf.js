function downloadPdf () {

    var header = $('#header').text(),
        text1 = $('#text1').text(),
        text2 = $('#text2').text(),
        text3 = $('#text3').text(),
        text4 = $('#text4').text(),
        text5 = $('#text5').text(),
        text6 = $('#text6').text(),
        text7 = $('#text7').text(),
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
                        text: 'о применении мер государственной защиты'
                    },
                    {
                        text: 'в соответствии с ФЗ «О государственной защите потерпевших, свидетелей и иных участников уголовного судопроизводства» от 20.08.2004 № 119-ФЗ',
                        margin: [0, 20, 0, 0]
                    }
                ],
                margin: [0, 30],
                alignment: 'center'
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
                text: text5,
                margin: [0, 0, 0, 10]
            },
            {
                text: text6,
                margin: [0, 0, 0, 10]
            },
            {
                text: text7,
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
