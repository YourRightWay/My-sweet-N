import request from 'request'
import { API } from '../api/api'

export const getArticleList = (params) => {
    return new Promise(function(resolve, reject) {
        try {
            console.log('resolve parseFeed')

            request(`${API}/?limit=${params.limit}&page=${params.page}`, function (error, response, body) {
                if(error) throw error
                resolve(body)
            });

        } catch (err) {
            reject(err);
        }
    })
}
