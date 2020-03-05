import React from "react";

const MessageCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <p><strong>{props.username}</strong> ({props.timestamp}): {props.message}</p>
      </div>
    </div>
  )
}

export default MessageCard