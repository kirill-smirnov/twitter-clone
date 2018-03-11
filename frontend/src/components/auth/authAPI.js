import axios from 'axios';
import Lockr from 'lockr';
import Utils from '../../utils';

import config from '../../config';
const url = config.url;

export default class AuthAPI {
    static getToken() {
        return Lockr.get('user').token;
    }

    static getUsername() {
        return Lockr.get('user').username;
    }

    static signin(username, password) {
        axios.post(url+'login/', { username, password })
            .then(res => {
                Lockr.set('user', { username, token: res.data.token });
                Utils.log("User logged in");
            }).catch(e => {
                Utils.log(e);
            })
    }

    static signup(username, password, repeatPassword) {
        if (password === repeatPassword) {
            return axios.post(url+'users/', { username, password })
                .then(res => {
                    Utils.log("User created");
                }).catch(e => {
                    Utils.log(e);
                });

        } else {
            Utils.log("Password and your password repeat does not match.");
        }
    }

    static logout() {
        Lockr.rm('user');
        Utils.log("Logout");
        return true;
    }
}   