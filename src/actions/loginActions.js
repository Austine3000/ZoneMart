import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebToken';
import * as types from './type';

export function setCurrentUser(user) {
    return { type: types.SET_CURRENT_USER, user }
}

export function clearData() {
    return { type: types.USER_LOGOUT};
} 

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function login(data) {

    var params = new URLSearchParams();
    params.append('username', data.username);
    params.append('password', data.password);
    
    return dispatch => {
        return axios.post('http://192.168.8.103:9090/api/v1/signin', params).then(res => {
            const token = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)))
        });
    }
}
