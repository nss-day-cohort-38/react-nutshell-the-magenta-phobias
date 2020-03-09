import React from "react";
import './Following.css'

const FollowCard = props => {
  const username = props.user.username;
  // const userId = props.user.id;
  const email = props.user.email;
  const picUrl = props.user.picUrl;

  return (
    <div className="card">
      <div className="card-content, follow-container">
        <img src={picUrl} alt="Avatar" />
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  )
}

export default FollowCard 