import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher.js';
import UserActionTypes from '../action/UserActionTypes';
import UserActions from '../action/UserActions';

class UserStore extends ReduceStore{

    constructor(){
        super(Dispatcher);
    }
    
    getInitialState(){
            UserActions.loadUserInfo();
            return {
                user: {
                    loginInfo: {
                        access_token: 'empty',
                        email: '',
                        token_type: 'Bearer',
                        user_id: -1
                    },
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
                break;
            case UserActionTypes.LOAD:
                state.user['loginInfo'] = action.loginInfo;
            break;
            default:
        }
        return Object.assign({},state); //ToDo Immutable.jsを用いてstateを定義する
    }

}

export default new UserStore();