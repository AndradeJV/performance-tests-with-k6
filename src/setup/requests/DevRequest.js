import http from 'k6/http';
const ENVIRONMENTS = require('../../../config/environments.js');


class DevRequest {
    get(endpoint){
        return http.get(`${ENVIRONMENTS.devUrls.baseUrl}/${endpoint}`);
    }

    post(endpoint, payload, params = ''){
        return http.post(`${ENVIRONMENTS.devUrls.baseUrl}/${endpoint}`, payload, params);
    }

    put(endpoint, payload, params = ''){
        return http.put(`${ENVIRONMENTS.devUrls.baseUrl}/${endpoint}`, payload, params);
    }
    
    del(endpoint, payload = '', params = ''){
        return http.put(`${ENVIRONMENTS.devUrls.baseUrl}/${endpoint}`, payload, params);
    }
}


export default new DevRequest;