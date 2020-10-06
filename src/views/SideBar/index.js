import React from 'react';
import { Container,Header,Search,SearchContainer,Input,Chats } from './style'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {IconButton,Avatar} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {SideBarChat} from '../../components/SideBarChat'
import AddIcon from '@material-ui/icons/Add';


export const SideBar = () => {
    return(
        <Container>
            <Header>
                <Avatar alt="Remy Sharp" />
                <div>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon    />
                    </IconButton>
                </div>
            </Header>
            <Search>
                <SearchContainer>
                    <SearchOutlinedIcon />
                    <Input type="text" placeholder="Search for new friends" />
                </SearchContainer>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
            </Search>
            <Chats>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
            </Chats>
        </Container>
    );
}