import React,{useEffect,useState} from 'react';
import {SideBar} from './views/SideBar'
import {Chat} from './views/Chat'
import './App.css'
import Pusher from 'pusher-js';
import axios from 'axios';




function App() {

  const [messages,setMessages] = useState([])


    useEffect(() => {
      const instance = axios.create({
        baseURL: 'http://localhost:3001/'
      })  
      const FetchData = async() => {
        const response = await instance.get('messages/sync');
        setMessages(response.data);
      }
      FetchData();
    },[]);

  useEffect(() => {
    //run once
    const pusher = new Pusher('3231f22f93d191ffa0ed', {
      cluster: 'us2'
    });
  const channel = pusher.subscribe('newMessages');
    channel.bind('inserted', function (data) {
      setMessages([...messages, data])   //really IMPORTANT to bring the new messages into your app
  })
  return (() => {
    channel.unbind_all();
    channel.unsubscribe();  //This will get rid of the listener (client or person you are chatting with)
  });
}, [messages])


  return (
    <div className="App">
      <div  className= "app_body">
        <SideBar/>
        <Chat messages= {messages}/>
      </div>
    </div>
  );
}

export default App;
