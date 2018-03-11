import axios from 'axios';
import Lockr from 'lockr';
import Utils from '../../utils';

import '../../config';
const url = config.url;

export default class AuthAPI {
    static getToken() {
        return Lockr.get('userdata').token;
    }

    static signin(username, password) {
        axios.post(url+'login/', { username, password })
            .then(res => {
                Lockr.set('userdata', { username, token: res.data.token });
                Utils.log("User logged in");
            }).catch(e => {
                Utils.log(e);
            })
    }

    static signup(username, password, repeatPassword) {
        if (password === repeatPassword) {
            axios.post(url+'users/', { username, password })
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
        Lockr.rm('userdata');
        Utils.log("Logout");
        return true;
    }
}   