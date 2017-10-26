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
            case UserActionTypes.SIGNUP:           
                state.user['loginInfo'] = action.loginInfo;
                state.user['id'] = action.id;
                state.user['password'] = action.password;
            default:
        }
        return Object.assign({},state); //ToDo Immutable.jsを用いてstateを定義する
    }

}

export default new UserStore();