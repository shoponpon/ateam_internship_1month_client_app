import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher.js';
import RoutingActionTypes from '../action/RoutingActionTypes';

class ItemStore extends ReduceStore{

    constructor(){
        super(Dispatcher);
    }
    
    getInitialState(){
        return {
            items: [
                {
                    itemName: "コート",
                    itemImageUrl: "../../../assets/images/test.jpg",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },,
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },,
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
            ],
            favoriteItems: [
                {
                    itemName: "コート",
                    itemImageUrl: "../../../assets/images/test.jpg",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },,
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },,
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
                {
                    itemName: "コート",
                    itemImageUrl: "",
                    itemPrice: "3000"
                },
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
            default:
        }
        return Object.assign({},state); //ToDo Immutable.jsを用いてstateを定義する
    }

}

export default new ItemStore();