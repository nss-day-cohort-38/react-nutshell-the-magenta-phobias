import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import NewsEditForm from "./news/NewsEditForm";
import NewsForm from "./news/NewsForm";
import EventsList from "./events/EventsList";
import EventDetails from "./events/EventDetails";
import NewEventForm from "./events/NewEventForm";
import EditEventForm from "./events/EditEventForm";
import MessageList from "./chat/Messages"


const isAuthenticated = true;
// () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = (props) => {

    return (
        <React.Fragment>
            <Route
                exact path="/"
                render={props => (
                    <Home />
                )}
            />
            <Route exact path="/news" render={props => {
                if (isAuthenticated) {
                    return <NewsList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route
                exact path="/news/:newsId(\d+)"
                render={props => {
                    if (isAuthenticated) {
                        return (
                            <NewsDetail
                                newsId={parseInt(props.match.params.newsId)}
                                {...props}
                            />
                        );
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route path="/news/:newsId(\d+)/edit" render={props => {
                if (isAuthenticated) {
                    return <NewsEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/news/new" render={(props) => {
                if (isAuthenticated) {
                    return <NewsForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route
                exact path="/events"
                render={props => {
                    return (<EventsList {...props} />)

                }}
            />
            <Route
                exact path="/events/:eventId(\d+)"
                render={props => {
                    return (<EventDetails eventId={parseInt(props.match.params.eventId)} {...props} />)
                }}
            />
            <Route
                path="/events/:eventId(\d+)/edit"
                render={props => {
                    return (
                        <EditEventForm eventId={parseInt(props.match.params.eventId)} {...props} />
                    )
                }}
            />
            <Route
                path="/events/new"
                render={props => {
                    return (
                        <NewEventForm {...props} />
                    )
                }}
            />
            <Route
                path="/chat"
                render={props=> (
                    <MessageList 
                        {...props}
                    />
                )}
            />
        </React.Fragment>
    )
}
export default ApplicationViews