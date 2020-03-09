import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import CreateAccount from "./auth/KK-CreateAccount";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import NewsEditForm from "./news/NewsEditForm";
import NewsForm from "./news/NewsForm";
import EventsList from "./events/EventsList";
import EventDetails from "./events/EventDetails";
import NewEventForm from "./events/NewEventForm";
import EditEventForm from "./events/EditEventForm";
import MessageList from "./chat/Messages"
import FollowingList from "./followings/FollowingList";

const isAuthenticated = true;
// () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} hasUser={hasUser}/>;
        }}
      />

      <Route
        exact
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/createaccount"
        render={props => {
          return <CreateAccount setUser={setUser} {...props} />;
        }}
      />

      <Route
        exact
        path="/news"
        render={props => {
          if (isAuthenticated) {
            return <NewsList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/news/:newsId(\d+)"
        render={props => {
          if (isAuthenticated) {
            return (
              <NewsDetail
                newsId={parseInt(props.match.params.newsId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/news/:newsId(\d+)/edit"
        render={props => {
          if (isAuthenticated) {
            return <NewsEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/news/new"
        render={props => {
          if (isAuthenticated) {
            return <NewsForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/events"
        render={props => {
            if(hasUser){
          return <EventsList {...props} />;}
          else{
              return <Redirect to="/login" />
          }
        }}
      />
      <Route
        exact
        path="/events/:eventId(\d+)"
        render={props => {
            if(hasUser) {
          return (
            <EventDetails
              eventId={parseInt(props.match.params.eventId)}
              {...props}
            />
          );} else {
            return <Redirect to="/login" />
          }
        }}
      />
      <Route
        path="/events/:eventId(\d+)/edit"
        render={props => {
            if(hasUser){
          return (
            <EditEventForm
              eventId={parseInt(props.match.params.eventId)}
              {...props}
            />
          );}
          else {
            return <Redirect to ="/login" />
          }
        }}
      />
      <Route
        path="/events/new"
        render={props => {
            if(hasUser){
          return <NewEventForm {...props} />; } else{
            return <Redirect to="/login" />
          }
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
      <Route
        path="/friends"
        render={props=> {
          if (isAuthenticated) {
            return <FollowingList
              {...props}
            />
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};
export default ApplicationViews;
