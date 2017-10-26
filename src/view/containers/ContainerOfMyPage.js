import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TabOfMyPage from './TabOfMyPage';

export default class ContainerOfMyPage extends Component{

    render(){

        const ContainerOfMyPage = Container.create(TabOfMyPage);

        return(
            <ContainerOfMyPage {...this.props}/>
        );
    }
}