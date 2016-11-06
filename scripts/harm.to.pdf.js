function downloadPdf () {

    var header1 = $('#header1').text(),
        header2 = $('#header2').text(),
        header3 = $('#header3').text(),
        header4 = $('#header4').text(),
        header5 = $('#header5').text(),
        date = $('#date').text(),
        text1 = $('#text1').text(),
        text2 = $('#text2').text(),
        text3 = $('#text3').text(),
        text4 = $('#text4').text(),
        text5 = $('#text5').text(),
        text6 = $('#text6').text(),
        text7 = $('#text7').text(),
        text8 = $('#text8').text(),
        text9 = $('#text9').text(),
        text10 = $('#text10').text(),
        text11 = $('#text11').text(),
        text12 = $('#text12').text(),
        text13 = $('#text13').text(),
        text14 = $('#text14').text(),
        text15 = $('#text15').text(),
        text16 = $('#text16').text(),
        text17 = $('#text17').text(),
        text18 = $('#text18').text(),
        text19 = $('#text19').text(),
        text20 = $('#text20').text(),
        text21 = $('#text21').text(),
        text22 = $('#text22').text(),
        text23 = $('#text23').text(),
        signature = $('#signature').text();

    var applicationText = {
        content: [
            {
                columns: [
                    {
                        text: ''
                    },
                    [
                        header1,
                        header2,
                        header3,
                        header4,
                        header5
                    ]
                ]
            },
            {
                stack: [
                    {
                        text: 'З А Я В Л Е Н И Е'
                    },
                    {
                        text: 'о принятии к производству дела частного обвинения и возбуждении уголовного дела частного обвинения'
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
                text: text8,
                margin: [0, 0, 0, 10]
            },
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
                text: text15,
                margin: [0, 0, 0, 10]
            },
            {
                text: text16,
                margin: [0, 0, 0, 10]
            },
            {
                text: text17,
                margin: [0, 0, 0, 10]
            },
            {
                text: text18,
                margin: [0, 0, 0, 10]
            },
            {
                text: text19,
                margin: [0, 0, 0, 10]
            },
            {
                text: text20,
                margin: [0, 0, 0, 10]
            },
            {
                text: text21,
                margin: [0, 0, 0, 10]
            },
            {
                text: text22,
                margin: [0, 0, 0, 10]
            },
            {
                text: text23,
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
