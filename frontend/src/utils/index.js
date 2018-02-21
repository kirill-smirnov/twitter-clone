import Lockr from 'lockr';

export default () => {
    let isAuthenticated;
    let userData = Lockr.get('userdata');
    if (userData) {
        isAuthenticated = userData.login !== '';
    } else {
        isAuthenticated = false;
    }
    return isAuthenticated;
}