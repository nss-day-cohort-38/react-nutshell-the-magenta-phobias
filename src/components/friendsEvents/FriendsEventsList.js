import React, { useState, useEffect} from 'react';
import ApiManager from "../../modules/ApiManager";
import FriendsEventCard from "./FriendsEventCard";


const FriendsEventsList = props => {
    const [friendsEvents, setFriendsEvents] = useState([])
    const [friends, setFriends] = useState([]);
    const user = JSON.parse(sessionStorage.getItem('credentials'))
    const masterEvents =[]

    const settingEvents = async () => {
        ApiManager.getAllWithUserId('followings', user.id).then( async friends=> {
            Promise.all(()=> {

     
   
                friends.forEach(async friend=> {
                    const events = await Promise.all(() => {
                        const resEvent = fetch(`http://localhost:8200/events?userId=${friend.followedId}`)
                        return resEvent.jsonI()
                    }   
                    ).then(()=> masterEvents.push(events))
                })
            }).then(setFriendsEvents(masterEvents))
           
        }
            
        )
        
   
 
  
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