import React, {useState, useEffect} from "react" 
import ApiManager from "../../modules/ApiManager"
import EventsCard from "./EventsCard";
import "./EventsList.css";

const EventsList = (props) => {
    const [events, setEvents] = useState([])
    const user = JSON.parse(sessionStorage.getItem('credentials'))
    // const user = {id:2}

    const getEvents=()=>{
        ApiManager.getAllWithUserId('events', user.id).then(eventsFromApi=> {
            setEvents(eventsFromApi)
        })
    }
    // const getDate = () => {
    //     const filteredDates = events.filter(d => new Date(d.date) - new Date() > 0);
    //     setDate(filteredDates[filteredDates.length-1])
    // }
    const handleDelete=(component, id)=> {
        ApiManager.delete(component, id).then(()=> {
            ApiManager.getAllWithUserId('events', user.id).then(setEvents)
        })
    }

    useEffect(()=> {
        getEvents()

    },[])

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