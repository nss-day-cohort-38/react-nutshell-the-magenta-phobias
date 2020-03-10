import React from "react"

const FriendsEventCard = (friendEvent) => {
    console.log(friendEvent)
    return (
        <div className="friend-card-content">
            <picture>
                <img src={friendEvent.eventImage} width="25px" alt="friend-event" />
            </picture>
            <h2>{friendEvent.name}</h2>
            <h5 className="light-text">{friendEvent.date}</h5>
            <h5 className="light-text">{friendEvent.location}</h5>
        </div>
    )

}
export default FriendsEventCard;