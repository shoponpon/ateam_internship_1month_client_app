import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import NewsTab from './NewsTab';
import ClosetTab from './ClosetTab';
import MyPageTab from './MyPageTab';

export default class Top extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarPosition='bottom'
                    scrollWithoutAnimation={false}
                    tabBarUnderlineStyle={{display:'none'}}
                    tabBarActiveTextColor='#64b3bc'
                    tabBarBackgroundColor='white'
                >
                    <NewsTab tabLabel='お知らせ' {...this.props} />
                    <ClosetTab tabLabel='クローゼット' {...this.props} />
                    <MyPageTab tabLabel='マイページ' {...this.props} />
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
