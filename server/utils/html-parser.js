import htmlparser from "htmlparser2"

export const ConvertHtml = (html) => {
    let parsedText = {
        text: '',
        tagname: '',
        style: ''
    }

    var parser = new htmlparser.Parser({
        onopentag: function(name, attribs){
            
        },
        ontext: function(text){
            parsedText.text = text;
        },
        onclosetag: function(tagname){
            parsedText.tagname = tagname;
        }
    }, {decodeEntities: true});

    parser.write(html);
    parser.end();

    return parsedText
}

export const ConvertDate = (date) => {
    
    const months = {
        "01": 'January',
        "02": 'February',
        "03": 'March',
        "04": 'April',
        "05": 'May',
        "06": 'June',
        "07": 'July',
        "08": 'August',
        "09": 'September',
        "10": 'October',
        "11": 'November',
        "12": 'December'
    }

    let convertedDate = {
        number: '',
        month: '',
        year: ''
    }

    let parsed = date.split("/");
    
    convertedDate.number = parsed[0]
    convertedDate.month = months[parsed[1]]
    convertedDate.year = parsed[2].split(" ")[0]
    
    return convertedDate
}