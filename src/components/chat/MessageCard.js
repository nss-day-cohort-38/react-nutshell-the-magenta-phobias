import React from "react";

const MessageCard = props => {
  const username = props.message.user.username;
  const text = props.message.message;
  const timestamp = props.message.timestamp;

  return (
    <div className="card">
      <div className="card-content">
        <p><strong>{username}</strong> ({timestamp}): {text}</p> 
        <button
          type="button"
          onClick={() => props.setMessageToEdit(props.message)}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default MessageCard