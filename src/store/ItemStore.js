import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher.js';

class ItemStore extends ReduceStore{

    constructor(){
        super(Dispatcher);
    }
    
    getInitialState(){
        return {
            items: [
                {
                    itemName: "Tシャツ",
                    itemImageUrl: "../../../assets/images/test.jpg",
                    itemPrice: "￥3,000"
                },
                {
                    itemName: "Tシャツ",
                    itemImageUrl: "",
                    itemPrice: "￥3,000"
                },
                {
                    itemName: "Tシャツ",
                    itemImageUrl: "",
                    itemPrice: "￥3,000"
                },
                {
                    itemName: "Tシャツ",
                    itemImageUrl: "",
                    itemPrice: "￥3,000"
                },
            ]
        };
    }

    reduce(state, action){
        switch(action.type){
            default:
        }
        return Object.assign({},state); //ToDo Immutable.jsを用いてstateを定義する
    }

}

export default new ItemStore();