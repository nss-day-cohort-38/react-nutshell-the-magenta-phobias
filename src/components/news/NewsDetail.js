import React, { useState, useEffect } from "react";
import APIManager from "../../modules/ApiManager";
import "./News.css";

const firstLetterCase = (str) => {
    let capsTitle = "";
    for (let i = 0; i < str.split(" ").length; i++) {
        capsTitle += str.split(" ")[i].charAt(0).toUpperCase() + str.split(" ")[i].slice(1) + " ";
    }
    return capsTitle;
 }

const NewsDetail = props => {
    const [news, setNews] = useState({ title: "", synopsis: "", userId: "", url: "", timestamp: "" });
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = () => {
        setIsLoading(true);
        APIManager.delete(props.newsId).then(() =>
            props.history.push("/news")
        );
    };

    useEffect(() => {
        APIManager.get("articles", props.newsId).then(news => {
            setNews({
                title: news.title,
                synopsis: news.synopsis,
                url: news.url,
                userId: news.userId,
                id: news.id,
                timestamp: news.timestamp
            });
            setIsLoading(false);
        });
    }, [props.newsId]);

    if (news.title !== undefined && news.synopsis !== undefined) {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>
                        <span style={{ color: "darkslategrey" }}>{firstLetterCase(news.title)}</span>
                    </h3>
                    <p>{news.timestamp}</p>
                    <p>{news.synopsis}</p>
                    <p><a href={news.url} target="_new">{news.url}</a></p>
                    <button type="button"
                        onClick={() => props.history.push(`/news/${news.id}/edit`)}>
                        Edit
                    </button>
                    <button type="button" disabled={isLoading} onClick={handleDelete}>
                        Delete News Article
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card">
                <div className="card-content">
                    <center><h3>NEWS ARTICLE NOT FOUND</h3></center>
                </div>
            </div>
        )
    }
};

export default NewsDetail;