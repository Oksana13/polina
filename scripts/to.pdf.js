function downloadPdf () {


    var whereName = document.getElementById('in').innerHTML;
    var whereAddress = document.getElementById('med-address').innerHTML;
    var fromName = document.getElementById('from-name').innerHTML;
    var dateOfBirth = document.getElementById('birth').innerHTML;
    var passport = document.getElementById('passport').innerHTML;
    var issued = document.getElementById('issued').innerHTML;
    var registered = document.getElementById('registered').innerHTML;
    var factAddress = document.getElementById('fact-address').innerHTML;
    var phone = document.getElementById('phone').innerHTML;
    var name = document.getElementById('name').innerHTML;
    var date = document.getElementById('date').innerHTML;
    var medName = document.getElementById('med-name').innerHTML;



    var applicationText = {
        content: [
            {
                columns: [
                    {
                        text: ''
                    },
                    [
                        'В ' + whereName,
                        '(наименование медицинского учреждения)',
                        whereAddress,
                        '(адрес медицинского учреждения)',
                        'от ФИО ' + fromName,
                        'дата рождения ' + dateOfBirth,
                        'паспорт ' + passport,
                        'выдан: ' + issued,
                        'зарегистрирован(на) по адресу ' + registered,
                        'адрес фактического места жительства и направления корреспонденции: ' + factAddress,
                        'номер телефона: ' + phone
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
                margin: [0, 40],
                alignment: 'center'
            },
            'Я, ' + name + ' ' + date + ' г. обратилась за медицинской помощью в ' + medName + '.'
            



        ]
    };














    pdfMake.createPdf(applicationText).download();
}
