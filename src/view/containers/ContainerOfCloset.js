import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TabOfCloset from './TabOfCloset'
;

export default class ContainerOfCloset extends Component{

    render(){

        const ContainerOfCloset = Container.create(TabOfCloset);

        return(
            <ContainerOfCloset />
        );
    }
}