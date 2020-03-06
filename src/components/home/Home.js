import React from "react"
import "./Home.css";

const Home = props => {
    // const user = sessionStorage.getItem('credentials')

    return (
        <>
        <div className="home-container">
            <div className="home-picture">
                <picture>
                    <img src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="home" className="home-photo"/>
                </picture>
            </div>
            <div className="button-container">
            <button id="homeBtn" className="ui blue basic button ">Sign In</button>
            <button id="homeBtn" className="ui blue basic button ">Create an account</button>
            </div>
        </div>
        </>
    )
}
export default Home;