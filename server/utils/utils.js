import * as Utils from './html-parser'
import imgDb from './image-db'

export const transformDataFromApi = (data) => {
    
    let convertedAssociativeArray = {};

    data.articles.map(function(item, index, arr) {
        convertedAssociativeArray[item._id] = Object.assign({}, item, {
            body: Utils.ConvertHtml(item.body),
            dateCreated: Utils.ConvertDate(item.created),
            image: imgDb[index]
        })
    })

    return {
        articles: convertedAssociativeArray,
        page: data.page,
        pageCounter: data.pagesCount
    }
}
