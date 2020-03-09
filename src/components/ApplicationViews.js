import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import CreateAccount from "./auth/CreateAccount";
import NewsList from "./news/NewsList";
import NewsDetail from "./news/NewsDetail";
import NewsEditForm from "./news/NewsEditForm";
import NewsForm from "./news/NewsForm";
import EventsList from "./events/EventsList";
import EventDetails from "./events/EventDetails";
import NewEventForm from "./events/NewEventForm";
import EditEventForm from "./events/EditEventForm";
import MessageList from "./chat/Messages";
import TaskList from "./tasks/TaskList";
import TaskDetail from "./tasks/TaskDetail";
import TaskEditForm from "./tasks/TaskEditFrom";
import AddNewTaskForm from "./tasks/AddNewTaskForm";

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
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
          if (hasUser) {
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
          if (hasUser) {
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
          if (hasUser) {
            return <NewsEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/news/new"
        render={props => {
          if (hasUser) {
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
          return <EventsList {...props} />;
        }}
      />
      <Route
        exact
        path="/events/:eventId(\d+)"
        render={props => {
          return (
            <EventDetails
              eventId={parseInt(props.match.params.eventId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/events/:eventId(\d+)/edit"
        render={props => {
          return (
            <EditEventForm
              eventId={parseInt(props.match.params.eventId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/events/new"
        render={props => {
          return <NewEventForm {...props} />;
        }}
      />
      <Route path="/chat" render={props => <MessageList {...props} />} />
      <Route
        exact
        path="/tasks"
        render={props =>
          hasUser ? (
            <TaskList {...props} />
          ) : (
            <Redirect to="/login" component={Login} />
          )
        }
      />
      {/* <Route
        exact
        path="/tasks/:userId(\d+)" 
        render={props => {
          if (hasUser) {
            return (
              <TaskDetail
                taskId={parseInt(props.match.params.userId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" component={Login} />;
          }
        }}
      /> */}
      <Route
        exact
        path="/tasks/:taskId(\d+)/edit"
        render={props => {
          if (hasUser) {
            return (
              <TaskEditForm
                taskId={parseInt(props.match.params.taskId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/tasks/new"
        render={props =>
          hasUser ? <AddNewTaskForm {...props} /> : <Redirect to="/login" />
        }
      />
    </React.Fragment>
  );
};
export default ApplicationViews;
