import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TabOfCloset from './TabOfCloset'
;

export default class ContainerOfCloset extends Component{

    static navigatorButtons = {
        rightButtons: [
          {
            id: 'kago', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            title: 'kago', // if you want a textual button
            icon: require('../../../assets/images/bagx25.png'), // if you want an image button
//            component: 'example.CustomButton', // if you want a custom button
            passProps: {}, // Object that will be passed as props to custom components (optional)
//            id: 'compose', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
//            testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
//            disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
            disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors こいつが青くする元凶 trueならならない
            buttonColor: 'white', // Set color for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontWeight: '600' // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
          },
          {
            id: 'send', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            title: 'send', // if you want a textual button
            icon: require('../../../assets/images/sendx25.png'), // if you want an image button
//            component: 'example.CustomButton', // if you want a custom button
            passProps: {}, // Object that will be passed as props to custom components (optional)
//            id: 'compose', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
//            testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
//            disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
            disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors こいつが青くする元凶 trueならならない
            buttonColor: 'white', // Set color for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontWeight: '600' // Set font weight for the button (can also be used in setButtons function to set different button style programatically)

          }
        ],
        leftButtons: [
            {
                id: 'search', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                title: 'search', // if you want a textual button
                icon: require('../../../assets/images/searchx25.png'), // if you want an image button
    //            component: 'example.CustomButton', // if you want a custom button
                passProps: {}, // Object that will be passed as props to custom components (optional)
//                id: 'compose', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
    //            testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
    //            disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
                disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors こいつが青くする元凶 trueならならない
                buttonColor: 'white', // Set color for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontWeight: '600' // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
              }
        ]
    };

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event){
        if(event.type == 'NavBarButtonPress'){
            if(event.id == 'kago'){

            }else if(event.id == 'send'){
                this.props.navigator.push({
                    screen: 'reclo.Send',
                    title: 'アイテムを送る',
                    //propsをpassするとなんかこける
                });
            }else if(event.id == 'search'){

            }
        }
    }

    render(){

        const ContainerOfCloset = Container.create(TabOfCloset);
        return(
            <ContainerOfCloset {...this.props}/>
        );
    }
}