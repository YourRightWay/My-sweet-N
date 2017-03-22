import url from 'url'
import * as Article from '../models/article-id-model'
import * as ArticleList from '../models/article-list-model'


// =========================================
// utils
// =========================================
import * as Utils from '../utils/utils'

export const getArticleList = (req, res) => {

    let urlParts = url.parse(req.url, true);
   
    ArticleList.getArticleList(urlParts.query)
        .then(function (data) {
            
            let responseData = Utils.transformDataFromApi(JSON.parse(data))
            res.json(responseData)
            
        }).catch(function (err) {
            console.log(err) 
        })
}

export const getArticleId = (req, res) => {

    let urlParts = url.parse(req.url, true);
    
    Article.getArticleInfo(urlParts.query)
        .then(function (data) {
            res.json(JSON.parse(data));
        }).catch(function (err) {
            console.log(err)
        })
}