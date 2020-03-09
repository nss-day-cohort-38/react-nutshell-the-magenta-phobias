import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import ApiManager from "../../modules/ApiManager";

const activeUser = JSON.parse(sessionStorage.getItem('credentials'));

const firstLetterCase = (str) => {
    let capsTitle = "";
    for (let i = 0; i < str.split(" ").length; i++) {
        capsTitle += str.split(" ")[i].charAt(0).toUpperCase() + str.split(" ")[i].slice(1) + " ";
    }
    return capsTitle;
}

const NewsCard = (props) => {
    if (props.news.userId === activeUser.id) {
        return (
            <div className="card">
                <div className="card-content">
                    <h3><span className="card-articleName">
                        {firstLetterCase(props.news.title)}
                    </span></h3>
                    <p>Synopsis: {props.news.synopsis}</p>
                    <Link to={`/news/${props.news.id}`}>
                        <button>Details</button>
                    </Link>
                    <button type="button"
                        onClick={() => props.history.push(`/news/${props.news.id}/edit`)}>
                        Edit
        </button>
                    <button type="button" onClick={() => ApiManager.delete("articles", props.news.id).then(props.getNews)}>Delete Article</button>
                </div>
            </div>
        );
    } else {
        return ("");
    }
}

export default NewsCard;