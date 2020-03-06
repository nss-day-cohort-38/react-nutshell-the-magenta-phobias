import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home"

import MessageList from './chat/Messages'

const ApplicationViews = (props) => {

    return(
        <>
            <Route
            exact
            path="/"
            render={props=> (
                <Home />
            )}
            />
            <Route
                path="/chat"
                render={props=> (
                    <MessageList 
                        {...props}
                    />
            )}
            />
        </>
    )
}
export default ApplicationViews