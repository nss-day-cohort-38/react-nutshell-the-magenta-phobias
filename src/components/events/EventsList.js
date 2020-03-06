import React, {useState, useEffect, Component} from "react" 
import ApiManager from "../../modules/ApiManager"
import EventsCard from "./EventsCard";
import "./EventsList.css";

const EventsList = (props) => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // const user = JSON.parse(sessionStorage.getItem('credentials'))
    const user = {id:2}

    const getEvents=()=>{
        setIsLoading(true)
        ApiManager.getAllWithUserId('events', user.id).then(eventsFromApi=> {
            setEvents(eventsFromApi)
            setIsLoading(false);
        })
    }
    const handleDelete=(component, id)=> {
        ApiManager.delete(component, id).then(()=> {
            ApiManager.getAllWithUserId('events', user.id).then(setEvents)
        })
    }

    useEffect(()=> {
        getEvents()
    },[])

    return(
        <>
        
        <div className="events-container">
            <div className="icon-container">
            <i className="big plus square outline icon" id="plusIcon"></i>
            </div>
            <div className="card-container">
                {events.map(userEvent=> <EventsCard key={userEvent.id} userEvent={userEvent} {...props} handleDelete={handleDelete}/>)}
            </div>
        </div>
        </>
    )
}
export default EventsList