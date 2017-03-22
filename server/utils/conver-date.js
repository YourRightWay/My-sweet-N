/**
 * ConverDate
 * @param {String} date
 * @returns {String}
 * @constructor
 * @description Конвертирует дату в формат: 21 декабря 2015 16:25
 */

export default function ConverDate( date ) {

    const months = {
        "01": 'Января',
        "02": 'Февраля',
        "03": 'Марта',
        "04": 'Апреля',
        "05": 'Мая',
        "06": 'Июня',
        "07": 'Июля',
        "08": 'Августа',
        "09": 'Сентября',
        "10": 'Октября',
        "11": 'Ноября',
        "12": 'Декабря'
    }
    
    let convertedDate = {
        number: '',
        mouth: '',
        year: ''
    }

    let parsed = date.split("/");
    convertedDate.number = parsed[0]

    console.log(convertedDate)


    // let basicParse = date.split(" "),
    //     returnedDate = basicParse[0],
    //     returnedTime = basicParse[1];
    //
    // let parseDate = returnedDate.split("-");
    // let parseTime = returnedTime.split(":");
    //
    // let day = parseDate[2],
    //     hours = parseTime[0],
    //     minutes = parseTime[1],
    //     month = months[parseDate[1]],
    //     years = parseDate[0];

    return convertedDate

}
