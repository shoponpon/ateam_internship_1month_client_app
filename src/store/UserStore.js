import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher.js';
import UserActionTypes from '../action/UserActionTypes';

class UserStore extends ReduceStore{

    constructor(){
        super(Dispatcher);
    }
    
    getInitialState(){
        return {
            user: {
                loginInfo: null,
                id: '',
                password: '',
                name: 'しゃちょう',
                point: 0,
                iconUrl: ''
            }
        };
    }

    reduce(state, action){
        switch(action.type){
            case UserActionTypes.LOGIN:
                state['loginInfo'] = action.loginInfo;
                state['id'] = action.id;
                state['password'] = action.password;
            break;
            default:
        }
        return Object.assign({},state); //ToDo Immutable.jsを用いてstateを定義する
    }

}

export default new UserStore();