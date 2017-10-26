import Dispatcher from '../dispatcher/Dispatcher';
import ItemActionTypes from './ItemActionTypes';

const ItemActions = {
    setOsusume(token) {
        console.log('call osusume token='+token);
        
        const URL = 'https://ateam-server.herokuapp.com/baggages';

        fetch(URL, {  
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': token,
            },
            body: ''
        }).then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            Dispatcher.dispatch({
                type: ItemActionTypes.SET_OSUSUME,
                items: responseData
            });
        })
        .done();
    }
}

module.exports = ItemActions;