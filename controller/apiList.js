import axios from 'axios';
export const getUrl = (path) => {
    let url;
    let getUrlType = path.split('/');
    switch (getUrlType[1]) {
        case 'product':
            url = [`https://node-sample-api.herokuapp.com/api/home`,`https://node-sample-api.herokuapp.com/api/products/${getUrlType[2]}`];
            break;
        case '' :
            url = [`https://node-sample-api.herokuapp.com/api/home`,`https://node-sample-api.herokuapp.com/api/products?page=1`];
            break;
        default :
            url = [`https://node-sample-api.herokuapp.com/api/home`];
            break;
    }
    return url
};


 export async function getAllData(URLs){
    let networkRequestPromises = URLs.map(fetchData);
    return await Promise.all(networkRequestPromises);
}

function fetchData(URL) {
    return axios.get(URL).then(function(response) {
            return {
                success: true,
                data: response.data
            };
        }).catch(function(error) {
            return { success: false };
        });
}
