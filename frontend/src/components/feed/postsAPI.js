import axios from 'axios';

import config from '../../config';
const url = config.url;

export default class PostsAPI {
    static getAll() {
        return axios.get(url + 'posts/');
    }

    static get(id) {
        return axios.get(url + `posts/${id}/`);
    }

    static create(title, text, user) {
        return axios.post(url + `posts/`, { title, text, user });
    }
}