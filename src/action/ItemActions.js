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
    },
    setCart(userId,token) {
        console.log('call cart token='+token);
        const URL = 'https://ateam-server.herokuapp.com/users/'+userId+'/carts';
        console.log(URL);
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
                type: ItemActionTypes.SET_CART,
                items: responseData
            });
        })
        .done();
    },
    addCart(userId,baggageId,token){
        console.log('call addCart token='+token);
        const URL = 'https://ateam-server.herokuapp.com/users/'+userId+'/baggages/'+baggageId+'/add_cart';        
        console.log(URL);
                fetch(URL, {  
                    method: 'POST',
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
                        type: ItemActionTypes.ADD_CART,
                        items: responseData
                    });
                })
                .done();
    },
    removeCart(userId,baggageId,token){
        console.log('call removeCart token='+token);
        const URL = 'https://ateam-server.herokuapp.com/users/'+userId+'/baggages/'+baggageId+'/remove_cart';        
        console.log(URL);
                fetch(URL, {  
                    method: 'POST',
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
                        type: ItemActionTypes.REMOVE_CART,
                        items: responseData
                    });
                })
                .done();
    }
}

module.exports = ItemActions;