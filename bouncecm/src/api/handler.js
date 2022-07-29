import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bouncenz-api.herokuapp.com',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
});

let api = async (_method, _endpoint, _details) => {
    try {
        const resp = await instance({
            method: _method,
            url: _endpoint,
            data: _details
        })
        return resp.data
    } catch (err) {
        return err
    }



}

export default api