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
        const confirmDelete = () => {
            const result = confirm("Are you sure to delete?");
            if (result) {
                ApiManager.delete("articles", props.news.id).then(props.getNews)
            }
        }
        return (
            <div className="card">
                <div className="card-content">
                    <h3><span className="card-articleName">
                        {firstLetterCase(props.news.title)}
                    </span></h3>
                    <p>Synopsis: {props.news.synopsis}</p>
                    <div align="right">
                        <i className="big file alternate icon" id="newsFileIcon" onClick={() => props.history.push(`/news/${props.news.id}`)}></i>
                        <i className="big edit icon" id="newsDetailIcon" onClick={() => props.history.push(`/news/${props.news.id}/edit`)}></i>
                        <i id="newsTrashIcon" className="big trash alternate icon" onClick={() => confirmDelete()}></i>
                    </div>
                </div>
            </div>
        );
    } else {
        return ("");
    }
}

export default NewsCard;