import React, { useState, useEffect} from 'react'
import ApiManager from "../../modules/ApiManager"

const NewEventForm = (props) => {
    const [newEvent, setNewEvent] = useState({name:"", description:"", date:"", streetAddress:"", city:"", state:"", zipcode:"", location:"", eventImage:""})
    const [image, setImage] = useState({})
    const [isLoading, setIsLoading]  = useState(false)

    const handleFieldChange = e => {
        const stateToChange = {...newEvent}
        stateToChange[e.target.id] = e.target.value
        setNewEvent(stateToChange)
    }
    const postNewEvent = e => {
        e.preventDefault()
        if(newEvent.name===""||newEvent.description===""|| newEvent.date===""|| newEvent.streetAddress===""||newEvent.city===""||newEvent.state===""||newEvent.location===""){
            window.alert('please fill out all the required fields')
        }else if(newEvent.eventImage===""){
            setIsLoading(true)
            const newEventObj = {
                name: newEvent.name,
                description: newEvent.description,
                date: newEvent.date,
                streetAddress: newEvent.streetAddress,
                city: newEvent.city,
                location: newEvent.location,
                state: newEvent.state,
                zipcode: newEvent.zipcode,
                eventImage: "https://www.muralswallpaper.com/app/uploads/geometric-mountains-blue-nursery-plain-820x532.jpg"
            }
            ApiManager.post('events', newEventObj).then(()=> props.push.history('/events'))
        }else {
            setIsLoading(true)
            const newEventObj = {
                name: newEvent.name,
                description: newEvent.description,
                date: newEvent.date,
                streetAddress: newEvent.streetAddress,
                city: newEvent.city,
                location: newEvent.location,
                state: newEvent.state,
                zipcode: newEvent.zipcode,
                eventImage: newEvent.eventImage
            }
            ApiManager.post('events', newEventObj).then(()=> props.push.history('/events'))
        }
       
    }
}