import React, {useState, useEffect} from "react" 
import ApiManager from "../../modules/ApiManager"
import EventsCard from "./EventsCard";
import "./EventsList.css";

const EventsList = (props) => {
    const [events, setEvents] = useState([])
    const user = JSON.parse(sessionStorage.getItem('credentials'))
    // const user = {id:2}
    const handleDelete=(component, id)=> {
        ApiManager.delete(component, id).then(()=> {
            ApiManager.getAllWithUserId('events', user.id).then(setEvents)
        })
    }

    useEffect(()=> {
        ApiManager.getAllWithUserId('events', user.id).then(eventsFromApi=> {
            setEvents(eventsFromApi)
        })

    },[user.id])
    console.log(events)
    let counter=0;
    return(
        <>
        
        <div className="events-container">
      
            <div className="icon-container">
            <i className="big arrow circle left icon" id="back-arrow-detail" onClick={()=> props.history.push('/')}></i>
            <i className="big plus square outline icon" id="plusIcon" onClick={()=> props.history.push('/events/new')}></i>
            
            </div>
            <div className="card-container">

                {
                events.sort(function(a,b){return new Date(b.date)- new Date(a.date)}).reverse().map(userEvent=> {
                    counter++
                return <EventsCard key={userEvent.id} userEvent={userEvent} {...props} handleDelete={handleDelete} counter={counter}/>
                })}
            </div>
        </div>
        </>
    )
}
export default EventsList