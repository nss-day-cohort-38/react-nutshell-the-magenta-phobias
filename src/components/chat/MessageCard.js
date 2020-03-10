import React from "react";
import "./Messages.css"


/* TODO: Follow Button
// Does not display for you or people you're already friends with
<i class="user plus icon"></i>

// Posts to the followings api
// userId: activeUser.id
// followedId: message.user.id
*/


const MessageCard = props => {
  const username = props.message.user.username;
  const userId = props.message.userId;
  const text = props.message.message;
  const timestamp = props.message.timestamp;
  const picUrl = props.message.user.picUrl;
  const activeUser = JSON.parse(sessionStorage.getItem('credentials'))

  return (
    <div className="card">
      <div className="card-content, message-container">
        <img src={picUrl} alt="Avatar" />
        <p>
          <strong>{username}</strong>: {text} 
        </p>
        {/* 
          If the active user id === the message's user id
          then output the edit button
        */}
        { parseInt(activeUser.id) === userId 
          ? (
            <div className="icon-container">
              <i className="edit outline icon"
                onClick={() => props.setMessageToEdit(props.message)}
              >
              </i>
            </div>
          )
          : ( null )
        }
        {
          props.amFollowing 
          ? (
            <i class="user plus icon"/>
            ) 
          : ""
        }
        <span className="time-right">{timestamp}</span>
      </div>
    </div>
  )
}

export default MessageCard