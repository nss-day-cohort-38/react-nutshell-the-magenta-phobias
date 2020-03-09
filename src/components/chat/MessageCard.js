import React from "react";
import "./Messages.css"

const MessageCard = props => {
  const username = props.message.user.username;
  const userId = props.message.userId;
  const text = props.message.message;
  const timestamp = props.message.timestamp;
  const picUrl = props.message.user.picUrl;
  // FIXME: replace object with commented line following active storage working
  const activeUser = {email: "keith@keith.com", password: "keith" , id: 4} // sessionStorage.getItem('credentials');
  // const activeUser = JSON.parse(sessionStorage.getItem('credentials'))

  return (
    <div className="card">
      <div className="card-content, message-container">
        <img src={picUrl} alt="Avatar" />
        <p>
          <strong>{username}</strong>: {text} 
        </p>
        {/*FIXME: Only show this if it is the active user*/}
        {/* 
          If the active user id === the message's user id
          then output the edit button
        */}
        { activeUser.id === userId 
          ? (
            <div className="edit-outline-icon">
              <i class="edit outline icon"
                onClick={() => props.setMessageToEdit(props.message)}
              >
              </i>
            </div>
          )
          : ( null )
        }
        <span className="time-right">{timestamp}</span>
      </div>
    </div>
  )
}

export default MessageCard