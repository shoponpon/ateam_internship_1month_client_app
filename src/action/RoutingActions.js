import Dispatcher from '../dispatcher/Dispatcher';
import RoutingActionTypes from './RoutingActionTypes';

const RoutingActions = {
    gotoTabOnMyPage(tabName){
        Dispatcher.dispatch({
            type: RoutingActionTypes.GOTO_TAB_ON_MYPAGE,
            tab: tabName
        });
    },
    gotoItemPage(item){
        console.log(item);
        Dispatcher.dispatch({
            type: RoutingActionTypes.GOTO_ITEM_PAGE,
            item: item
        });
    }
}

module.exports = RoutingActions;