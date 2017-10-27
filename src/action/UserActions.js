import Dispatcher from '../dispatcher/Dispatcher';
import UserActionTypes from './UserActionTypes';
import { AsyncStorage } from 'react-native';
import RNRestart from 'react-native-restart';

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
            RNRestart.Restart();
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
            RNRestart.Restart();
            AsyncStorage.setItem('loginInfo', JSON.stringify(responseData));
        })
        .done();
    },

    loadUserInfo(){
        AsyncStorage.getItem('loginInfo', (error, results) => {
            let loginInfo;
            if (error) {
                callback(error, null);
                loginInfo = null;
            }
            loginInfo = JSON.parse(results);
            Dispatcher.dispatch({
                type: UserActionTypes.LOAD,
                loginInfo: loginInfo
            });
        }
    )
    }
}

module.exports = UserActions;