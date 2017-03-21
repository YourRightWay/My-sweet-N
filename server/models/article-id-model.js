import request from 'request'
import { API } from '../api/api'

export const getArticleInfo = (params) => {
    return new Promise(function(resolve, reject) {
        try {
            console.log('resolve parseFeed')

            request(`${API}/${params.id}`, function (error, response, body) {
                if(error) throw error
                resolve(body)
            });

        } catch (err) {
            reject(err);
        }
    })
}




