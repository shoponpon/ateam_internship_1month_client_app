import Dispatcher from '../dispatcher/Dispatcher';
import UserActionTypes from './UserActionTypes';

const UserActions = {
    login(id, password) {
        let token = null;
        const params = {
            "user": {
                "email": id,
                "password": password
            }
        };
        
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