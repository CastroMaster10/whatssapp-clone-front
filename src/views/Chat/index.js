import React,{useState} from 'react';
import { Header, Container, FriendInfo,FriendName,
Info,FirstDivHeader,SecondDivHeader,Main,Input,TypeDiv,
PersonMessage,Message,ChatName, Time,Reciever,Form,SendButton} from './style'
import {Avatar,IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from 'axios'

export const Chat = ({messages}) => {

  const [input,setInput] = useState('')

    const sendMessage = async (e) => {
      e.preventDefault(); 
      const instance = axios.create({
        baseURL: 'http://localhost:3001/'
      })  
      const response = await instance.post('messages/new', {
        message: input,   //what we just write in the box
        name: 'Ruben Castro',
        timeStamp: 'Just now',
        recieved: true
      })
      setInput("");
    }



    return(
        <Container>
            <Header>
                <FirstDivHeader>
                    <Avatar />
                    <FriendInfo>
                        <FriendName>Jordan Peterson</FriendName>
                        <Info>Last seen at {new Date().toUTCString()}</Info>
                    </FriendInfo>
                </FirstDivHeader>
                <SecondDivHeader>
                    <IconButton>
                        <SearchIcon style={{ margin: '0 10px' }} />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon style={{ margin: '0 10px' }} />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon style={{ margin: '0 10px' }} />
                    </IconButton>
                </SecondDivHeader>
            </Header>
            <Main>
              <PersonMessage>
                {
                  messages.map(message => {
                     return (message.recieved ? (
                       <Reciever key={message.id}>
                    <ChatName>{message.name}</ChatName>
                         {message.message}
                      <Time>{message.timeStamp}</Time>
                       </Reciever>
                    ) : (
                          <Message key={message.id}>
                           <ChatName>{message.name}</ChatName>
                           {message.message}
                           <Time>{new Date().toUTCString().slice(0, 16)}</Time>
                         </Message>  
                    ))
                  })
                }

              </PersonMessage>
            </Main>
            <TypeDiv>
                <IconButton>
                    <InsertEmoticonIcon  />
                </IconButton>
                <Form>
                    <Input value={input} onChange= {(e) => setInput(e.target.value)} placeholder="type something..." />
                    <SendButton onClick= {sendMessage} type='submit'></SendButton>
                    <IconButton>
                    <MicIcon/>
                    </IconButton>
                </Form>
            </TypeDiv>
        </Container>
    )
}