import Dispatcher from '../dispatcher/Dispatcher';
import UserActionTypes from './UserActionTypes';

const UserActions = {

    signup(id, password) {
        console.log('call signup');

        const params = {
            "user": {
                "email": id,
                "password": password
            }
        }
        
        const URL = 'https://ateam-server.herokuapp.com/users';

        fetch(URL, {  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            Dispatcher.dispatch({
                type: UserActionTypes.SIGNUP,
                loginInfo: responseData,
                id: id,
                password: password
            });
        })
        .done();
    },
    login(id, password) {
        console.log('call login');
        
        const URL = 'https://ateam-server.herokuapp.com/login?email='+id+'&password='+password;

        fetch(URL, {  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:''
        }).then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            Dispatcher.dispatch({
                type: UserActionTypes.LOGIN,
                loginInfo: responseData,
                id: id,
                password: password
            });
        })
        .done();
    }
}

module.exports = UserActions;