function downloadPdf () {

    var header = $('#header').text();
    var date = $('#date').text();
    var description = $('#description').text();
    var damage = $('#damage').text();
    var marks = $('#marks').text();
    var signature = $('#signature').text();

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
            date,
            description,
            damage,
            marks,
            'Мне известно об уголовной ответственности за заведомо ложный донос, предусмотренный в соответствии со ст.306 Уголовного кодекса Российской Федерации.',
            'На основании изложенного, прошу установить лицо, совершившее в отношении меня преступление (или указать ФИО известного), и привлечь его к уголовной ответственности.',
            'Также прошу направить меня в экспертную организацию для прохождения судебно-медицинского освидетельствования (экспертизы).',
            signature






        ]
    };














    pdfMake.createPdf(applicationText).download();
}
