import React, { useState, useEffect} from 'react';
import ApiManager from "../../modules/ApiManager";
import FriendsEventCard from "./FriendsEventCard";
import { promised } from 'q';
import EventsCards from '../events/EventsCard';

const FriendsEventsList = props => {
    const [friendsEvents, setFriendsEvents] = useState([])
    const [friends, setFriends] = useState([]);
    const user = JSON.parse(sessionStorage.getItem('credentials'))
    const settingEvents = async () => {
        const resFriends = await fetch(`http://localhost:8200/followings?userId=${user.id}`)
        console.log(resFriends)
        const friends= await resFriends.json();
        const events = await friends.map(async friend=> {
            const resEvent = await fetch(`http://localhost:8200/events?userId=${friend.followedId}`)
            const event = await resEvent.json()
            event.forEach(e=> friendsEvents.push(e))
           console.log(friendsEvents)
            
        })
     
        
        
      
    }
    useEffect( ()=> {
            settingEvents()

    }, [])
    console.log(friendsEvents)
    return (
        <>
        <div className="friends-event-cards">
            <h4>Friends Events</h4>
            <div className="friends-events-card-container">
                {friendsEvents.map(friendEvent=> 
                    <FriendsEventCard key={friendEvent.id} friendEvent={friendEvent}/>
                )}
            </div>
        </div>
        </>
    )
}
export default FriendsEventsList


// ApiManager.getAllWithUserId('followings', user.id).then((friendsFromApi)=> {
//     setFriends(friendsFromApi)
// }).then(()=> {
    
//     friends.map(friend=> ApiManager.getAllWithUserId('events', friend.followedId).then(eventsFromApi=> {
//         console.log(eventsFromApi)
//         eventsFromApi.forEach(event=> events.push(event))
//     }))
// }).then(()=> {setFriendsEvents(events)
// console.log(friendsEvents)})
// }, [])


// ApiManager.getAllWithUserId('followings', user.id).then(friendsFromApi=> {
//     const events = [];
//     friendsFromApi.forEach(async friend=> {
//         await Promise.all(
//             ApiManager.getAllWithUserId('events', friend.followedId).then(eventsFromApi=>{eventsFromApi.forEach(event=> events.push(event))})
//         )
        
//     })
//     setFriendsEvents(events)
// })

// const events = await friends.map(friend=> {console.log(friend)
//     fetch(`http://localhost:8200/events?userId=${friend.follwedId}`)})
// console.log(events)
// const eventsTwo = await events.forEach(event=> event.json())
// console.log(eventsTwo);
// setFriendsEvents(eventsTwo)
// }