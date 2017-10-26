import { ReduceStore } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';
import RoutingActionTypes from '../action/RoutingActionTypes';

class AppStore extends ReduceStore{

    constructor(){
        super(Dispatcher);
    }
    
    getInitialState(){
        return {
            myPageTab: 'kago'
        };
    }

    reduce(state, action){
        switch(action.type){
            case RoutingActionTypes.GOTO_TAB_ON_MYPAGE:
                state['myPageTab'] = action.tab;
                break;
            default:
        }
        return Object.assign({},state); //ToDo Immutable.jsを用いてstateを定義する
    }

}

export default new AppStore();