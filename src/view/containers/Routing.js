import React, { Component } from 'react';
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';
import ViewOfMain from './ViewOfMain';
import PageOfMyPage from './PageOfMyPage';
import ListOfFavoriteItem from './ListOfFavoriteItem';
import ListOfClosetItem from './ListOfClosetItem';
import PageOfRentalItem from '../components/PageOfRentalItem';

export default class Routing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                 <Stack key="root">
                    <Scene key="main" component={ViewOfMain} {...this.props} hideNavBar/>
                    <Scene key='mypage' component={PageOfMyPage} {...this.props} hideNavBar/>
                    <Scene key='list' component={ListOfFavoriteItem} {...this.props} hideNavBar/>
                    <Scene key='item' component={PageOfRentalItem} {...this.props} navigationBarStyle={{ backgroundColor: 'white' }} />
                </Stack>
            </Router>
        );
    }
}