import clientAxios from './axiosClient';

const tokenAuth = token => {
    console.log('hii', token);
    if (token) {
        clientAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete clientAxios.defaults.headers.common['x-auth-token'];
    }
}
export default tokenAuth;
