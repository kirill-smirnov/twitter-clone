import Lockr from 'lockr';

class Utils {
    static isUserAuthenticated() {
        let isAuthenticated;
        let userData = Lockr.get('userdata');
        if (userData) {
            isAuthenticated = userData.login !== '';
        } else {
            isAuthenticated = false;
        }
        return isAuthenticated;
    }

    static getMenuRoutes() {
        return [
            {
                name: 'Home',
                url: '/home/',
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
}

export default Utils;