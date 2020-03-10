import React, { useState, useEffect} from 'react';
import ApiManager from "../../modules/ApiManager";
import FriendsEventCard from './FriendsEventCard';
import "./FriendsEvents.css";

const FriendsEventsList = props => {
    const [friendsEvents, setFriendsEvents] = useState([])
    // const [friends, setFriends] = useState([]);
    const user = JSON.parse(sessionStorage.getItem('credentials'))

    // const settingEvents =  () => {
    //     const arr= []
    //     return ApiManager.getAllWithUserId('followings', user.id).then(friends=> {
    //         const friendArray = friends
    //         friendArray.forEach(friend=> {
    //             ApiManager.eventExpandUser('events', friend.followedId).then(events=> {
                    
    //                 arr.push(events.flat())
    //                 setFriendsEvents(arr.flat())
    //             })
    //         })
    //     })

        // const friendsRes = await fetch(`http://localhost:8200/followings?userId=${user.id}`)
        // const friends = await friendsRes.json();
        // const events = await friends.map(async friend=> {
        //     const event = await fetch(`http://localhost:8200/events?userId=${friend.followedId}`)
        //     const resEvent = event.json()
        //     return resEvent;
        // })
        // Promise.all(events).then(function(values){

        //     values.forEach(arr=> {
        //         arr.forEach(event=> {
        //             const newArr= friendsEvents;
        //             newArr.push(event)
        //             console.log(newArr)
        //             setFriendsEvents(newArr)})
        //     })
        // })

  
    // }
    useEffect( ()=> {
        const arr= []
         ApiManager.getAllWithUserId('followings', user.id).then(friends=> {
            const friendArray = friends
            friendArray.forEach(friend=> {
                ApiManager.eventExpandUser('events', friend.followedId).then(events=> {
                    
                    arr.push(events.flat())
                    setFriendsEvents(arr.flat())
                })
            })
        })

    }, [user.id])

    return (
        <>
        <div className="friends-event-cards">
            <h1>Friends Events</h1>
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
// {
//     friendEventObj.[[PromiseValue]].map(friendEvent=> {

// })
// }