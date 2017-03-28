import request from 'request'
import config from '../config'

export const getArticleInfo = (params) => {
    return new Promise(function(resolve, reject) {
        try {
            console.log('resolve parseFeed')

            request(`${config.pathToBackend}/${params.id}`, function (error, response, body) {
                if(error) throw error
                resolve(body)
            });

        } catch (err) {
            reject(err);
        }
    })
}




