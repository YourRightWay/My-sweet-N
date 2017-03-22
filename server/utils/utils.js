import * as Utils from './html-parser'


export const transformDataFromApi = (data) => {

    let convertedDescription = data.articles.map(function(item, index, arr) {
        return Object.assign({}, item, {
            body: Utils.ConvertHtml(item.body),
            dateCreated: Utils.ConvertDate(item.created)
        })
    })

    return {
        articles: convertedDescription,
        page: data.page,
        pageCounter: data.pagesCount
    }
}
