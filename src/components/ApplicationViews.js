import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home"

const ApplicationViews = (props) => {

    return(
        <Route
        path="/"
        render={props=> (
            <Home />
        )}
        />
    )
}
export default ApplicationViews