import React from "react";

const FollowCard = props => {
  console.log(props.user)
  return (
    <div className="card">
      <div className="card-content, followList-container">
        <p>{props.user.username}</p>
      </div>
    </div>
  )
}

export default FollowCard 