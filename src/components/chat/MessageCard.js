import React from "react";
import "./Messages.css"

const MessageCard = props => {
  const username = props.message.user.username;
  const text = props.message.message;
  const timestamp = props.message.timestamp;

  return (
    <div className="card">
      <div className="card-content, message-container">
        {/* TODO: Make this the user's profile pic */}
        <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar" />
        <p>
          <strong>{username}</strong>: {text} 
        </p>
        <button
          type="button"
          className="chat-edit-button"
          onClick={() => props.setMessageToEdit(props.message)}
        >
          Edit
        </button>
        <span className="time-right">{timestamp}</span>
      </div>
    </div>
  )
}

export default MessageCard