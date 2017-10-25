import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher.js';

class UserStore extends ReduceStore{

    constructor(){
        super(Dispatcher);
    }
    
    getInitialState(){
        return {
            user: {
                token: null,
                address: '',
                password: '',
                name: 'しゃちょう',
                point: 0,
                iconUrl: ''
            }
        };
    }

    reduce(state, action){
        switch(action.type){
            default:
        }
        return Object.assign({},state); //ToDo Immutable.jsを用いてstateを定義する
    }

}

export default new UserStore();