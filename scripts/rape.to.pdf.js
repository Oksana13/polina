function downloadPdf () {

    var header = $('#header').text(),
        date = $('#date').text(),
        description = $('#description').text(),
        damage = $('#damage').text(),
        marks = $('#marks').text(),
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
                        text: 'о возбуждении  уголовного дела'
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
                text: description,
                margin: [0, 0, 0, 10]
            },
            {
                text: damage,
                margin: [0, 0, 0, 10]
            },
            {
                text: marks,
                margin: [0, 0, 0, 10]
            },
            {
                text: 'Мне известно об уголовной ответственности за заведомо ложный донос, предусмотренный в соответствии со ст.306 Уголовного кодекса Российской Федерации.',
                margin: [0, 0, 0, 10]
            },
            {
                text: 'На основании изложенного, прошу установить лицо, совершившее в отношении меня преступление (или указать ФИО известного), и привлечь его к уголовной ответственности.',
                margin: [0, 0, 0, 10]
            },
            {
                text: 'Также прошу направить меня в экспертную организацию для прохождения судебно-медицинского освидетельствования (экспертизы).',
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
