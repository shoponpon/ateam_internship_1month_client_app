import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher.js';
import RoutingActionTypes from '../action/RoutingActionTypes';
import ItemActionTypes from '../action/ItemActionTypes';

class ItemStore extends ReduceStore{

    constructor(){
        super(Dispatcher);
    }
    
    getInitialState(){
        return {
            items: [
            ],
            favoriteItems: [
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                }
            ],
            cart: [
            ]
        };
    }

    reduce(state, action){
        switch(action.type){
            case RoutingActionTypes.GOTO_ITEM_PAGE:
                console.log(state);
                console.log(action);
                state['item'] = action.item;
                break;
            case ItemActionTypes.SET_OSUSUME:
                state['items'] = action.items;
                break;
            case ItemActionTypes.ADD_CART:
                state['cart'] = action.items;
                break;
            case ItemActionTypes.SET_CART:
                state['cart'] = action.items;
                break;
            default:
        }
        console.log(state);
        return Object.assign({},state); //ToDo Immutable.jsを用いてstateを定義する
    }

}

export default new ItemStore();