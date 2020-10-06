import React from 'react';
import {Avatar} from '@material-ui/core'
import {Div,H2,P,SubDiv} from './style'

export const SideBarChat = () => {
    return(
        <Div>
            <Avatar/>
            <SubDiv>
                <H2>Room Name</H2>
                <P>Last message</P>
            </SubDiv>
        </Div>
    );
}