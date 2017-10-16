import React, { Component } from 'react';
import { Container } from 'flux/utils';
import App from './App';

export default class AppContainer extends Component{
    render(){

        const AppContainer = Container.create(App);

        return(
            <AppContainer />
        );
    }
}