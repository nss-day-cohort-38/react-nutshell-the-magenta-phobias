import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm'
import './Messages.css'
/*
TODO: Given a user enters in a chat message
When the message appears in the chat history
Then there should be an affordance to edit the message

TODO: Given a user wants to edit a previous message of theirs
When the user performs a gesture on the edit affordance
Then the user should be able to change the text of their message
And have an affordance for saving the edited message
*/


const MessageList = props => {
  const [messages, setMessages] = useState([]);
  const [messageToEdit, setMessageToEdit] = useState({text: "", userId: 0, timestamp: ""})

  const getMessages = () => {
    return ApiManager.getAllWithExpand("messages", "user")
      .then(setMessages);
  }

  useEffect(() => {
    getMessages()
  }, [])


  /* 
  TODO: Check active storage for user, 
    if message matches active user, add edit/delete buttons
  */

  return (
    <>
      <div className="wrapper">
        <div className="FixedHeightContainer">
          <h1>Chat</h1>
          <div className="ScrollToBottom">
            <div className="container-cards">
              {/* Sorting by date via: 
              https://stackoverflow.com/questions/10123953/how-to-sort-an-array-by-a-date-property*/}
              {messages.sort(function(a,b){
                return new Date(a.timestamp) - new Date(b.timestamp)
              }).map(message => 
                <MessageCard 
                  key={message.id} 
                  message={message}
                  setMessageToEdit={setMessageToEdit}
                />
              )}
            </div>
          </div>
            <div className="container-form">
                <MessageForm
                  getMessages={getMessages}
                  messageToEdit={messageToEdit}
                  {...props}
                />
            </div>
        </div>
      </div>
    </>
  )

}

export default MessageList