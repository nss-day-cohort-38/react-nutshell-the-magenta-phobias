import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm'
/*
TODO: Given a user wants to enter in a chat message
When the user activates their account
And enters a message into the New message text input
Then their message should appear in the Chat area, prepended with the user's name

TODO: Given a user is viewing, or entering in chat messages
When a new message is entered by any user, and there are more messages than can fit in the default size of the chat history
Then the most recent message should always be made visible at the bottom of the chat history

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

  const getMessages = () => {
    return ApiManager.getAllWithExpand("messages", "user")
      .then(setMessages)
  }

  useEffect(() => {
    getMessages();
  }, [])


  /* 
  TODO: Check active storage for user, 
    if message matches active user, add edit/delete buttons
  */

  return (
    <>
      <h1>CHAT</h1>
      <div className="container-cards">
        {/* Sorting by date via: 
        https://stackoverflow.com/questions/10123953/how-to-sort-an-array-by-a-date-property*/}
        {messages.sort(function(a,b){
          return new Date(a.timestamp) - new Date(b.timestamp)
        }).map(message => 
          <MessageCard 
            key={message.id}
            username={message.user.username}  
            message={message.message}
            timestamp={message.timestamp}
          />
        )}
      </div>
      <div className="container-form">
          <MessageForm
            getMessages={getMessages}
            {...props}
          />
      </div>
    </>
  )

}

export default MessageList