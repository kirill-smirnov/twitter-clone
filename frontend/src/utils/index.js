import Lockr from 'lockr';

class Utils {
    static getMenuRoutes() {
        return [
            {
                name: 'Home',
                url: '/',
                showIfAnonimous: true
            },
            {
                name: 'Profile',
                url: '/profile/',
                showIfAnonimous: false
            },
            {
                name: 'Users',
                url: '/users/',
                showIfAnonimous: true
            },
            {
                name: 'Posts',
                url: '/posts/',
                showIfAnonimous: true
            }
        ]
    }

    static log(msg) {
        console.log(msg);
    }
}

export default Utils;