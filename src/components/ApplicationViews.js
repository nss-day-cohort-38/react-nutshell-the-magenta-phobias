import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home"
import EventsList from "./events/EventsList";
import EventDetails from "./events/EventDetails";
import NewEventForm from "./events/NewEventForm";
import EditEventForm from "./events/EditEventForm";

const ApplicationViews = (props) => {

    return(
        <>
        <Route
        exact path="/"
        render={props=> (
            <Home />
        )}
        />
        <Route 
        exact path="/events"
        render={props => {
            return (<EventsList {...props} />)
            
        }}
        />
        <Route 
        exact path="/events/:eventId(\d+)"
        render={props=> {return( <EventDetails   eventId={parseInt(props.match.params.eventId)} {...props}/>)    
}}
        />
        <Route
        path="/events/:eventId(\d+)/edit"
        render={props=> {
            return(
                <EditEventForm eventId={parseInt(props.match.params.eventId)} {...props} />
            )
        }}
        />
        <Route 
        path="/events/new"
        render={props => {return (
            <NewEventForm {...props} />
        )}}
        />
        </>
        
    )
}
export default ApplicationViews