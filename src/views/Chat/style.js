import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
flex: 0.65;
`

export const Header = styled.div`
margin-top: 20px;
display:flex; 
justify-content: space-between;
height: 68px;
border-bottom: 1px solid #D3D3D3;
`

export const FirstDivHeader = styled.div`
display:flex;
margin-left:  20px;
`

export const FriendInfo = styled.div`
margin:0 0 0 20px;
`

export const FriendName = styled.h3`
margin:0;
`

export const Info = styled.small`
margin:0;
color: gray;
`

export const SecondDivHeader = styled.div`

`

export const Main = styled.div`
flex: 1;
height: 70vh;
background: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
overflow: scroll;
display: flex;
justify-content: space-between;
`

export const PersonMessage = styled.div`
flex:1;
background-image: url("https://external-preview.redd.it/rEwFriCkfAtjOb5b-23b4tGGVcuvfaBqamYNJrgxnLM.png?width=700&auto=webp&s=b9cb52f0a75c14a2a4f0dda83382a525aea36b27");
background-repeat: repeat;
background-position: center;
padding: 30px;
overflow: scroll;
`

export const Message = styled.p`
position: relative;
font-size: 16px;
padding: 10px;
width: fit-content;
border-radius: 10px;
background-color: white;
margin-bottom: 30px;
`

export const Reciever = styled.p`
position: relative;
font-size: 16px;
padding: 10px;
width: fit-content;
border-radius: 10px;
background-color: white;
margin-bottom: 30px;
margin-left:auto;
background: #dcf8c6;
`

export const ChatName = styled.span`
position: absolute;
top: -15px;
font-weight: 800;
font-size: xx-small;
`

export const Time = styled.span`
margin-left: 10px;
font-size: xx-small;     
`



export const TypeDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 62px;
border-top: 1px solid lightgray;

`

export const Form = styled.form`
flex:1;
display: flex;
`

export const Input = styled.input`
flex:1;
border-radius: 30px;
padding: 10px;
border:none;
outline: none;
`

export const SendButton = styled.button`
display: none;
`
