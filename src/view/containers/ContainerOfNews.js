import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TabOfNews from './TabOfNews';

export default class ContainerOfNews extends Component{

    render(){

        const ContainerOfNews = Container.create(TabOfNews);

        return(
            <ContainerOfNews {...this.props}/>
        );
    }
}