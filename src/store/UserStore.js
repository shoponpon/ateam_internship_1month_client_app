import { ReduceStore } from 'flux/utils';
import UserDispatcher from '../dispatcher/UserDispatcher.js';

class UserStore extends ReduceStore{

    constructor(){
        super(UserDispatcher);
    }
    
    getInitialState(){
        return {
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