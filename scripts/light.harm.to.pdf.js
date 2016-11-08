function downloadPdf () {

    var header = $('#header').text(),
        date = $('#date').text(),
        text1 = $('#text1').text(),
        text2 = $('#text2').text(),
        // text3 = $('#text3').text(),
        text4 = $('#text4').text(),
        text5 = $('#text5').text(),
        text6 = $('#text6').text(),
        text7 = $('#text7').text(),
        // text8 = $('#text8').text(),
        text9 = $('#text9').text(),
        text10 = $('#text10').text(),
        text11 = $('#text11').text(),
        text12 = $('#text12').text(),
        text13 = $('#text13').text(),
        text14 = $('#text14').text(),
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
                        text: 'о преступлении'
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
            // {
            //     text: text3,
            //     margin: [0, 0, 0, 10]
            // },
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
            // {
            //     text: text8,
            //     margin: [0, 0, 0, 10]
            // },
            {
                text: text9,
                margin: [0, 0, 0, 10]
            },
            {
                text: text10,
                margin: [0, 0, 0, 10]
            },
            {
                text: text11,
                margin: [0, 0, 0, 10]
            },
            {
                text: text12,
                margin: [0, 0, 0, 10]
            },
            {
                text: text13,
                margin: [0, 0, 0, 10]
            },
            {
                text: text14,
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
