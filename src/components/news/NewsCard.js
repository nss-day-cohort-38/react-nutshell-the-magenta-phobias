import React, { useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import ApiManager from "../../modules/ApiManager";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const activeUser = JSON.parse(sessionStorage.getItem('credentials'));

const firstLetterCase = (str) => {
    let capsTitle = "";
    for (let i = 0; i < str.split(" ").length; i++) {
        capsTitle += str.split(" ")[i].charAt(0).toUpperCase() + str.split(" ")[i].slice(1) + " ";
    }
    return capsTitle;
}

const NewsCard = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    if (props.news.userId === activeUser.id) {
        const handleDelete = () => {
            setIsLoading(true);
            confirmAlert({
                title: 'Confirm to delete',
                message: 'Are you sure you want to delete this?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => ApiManager.delete("articles", props.news.id).then(() =>
                            props.getNews()
                        )
                    },
                    {
                        label: 'No',
                        onClick: () => ""
                    }
                ]
            });
        };
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
                        <i id="newsTrashIcon" className="big trash alternate icon" onClick={() => handleDelete()}></i>
                    </div>
                </div>
            </div>
        );
    } else {
        return ("");
    }
}

export default NewsCard;