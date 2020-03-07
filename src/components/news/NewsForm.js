import React, { useState } from "react";
import ApiManager from "../../modules/ApiManager";
import "./News.css";

const NewsForm = (props) => {
    const [news, setNews] = useState({ title: "", synopsis: "", userId: "", url: "", timestamp: "" });
    const [isLoading, setIsLoading] = useState(false);


    const handleFieldChange = evt => {
        const stateToChange = { ...news };
        stateToChange[evt.target.id] = evt.target.value;
        setNews(stateToChange);
    };

    const createNewNews = evt => {
        evt.preventDefault()
        setIsLoading(true);

        let dateTime = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });

        const newNews = {
            title: news.title,
            synopsis: news.synopsis,
            userId: 1,
            url: news.url,
            timestamp: dateTime
        };

        if (news.title === "" || news.synopsis === "" || news.url === "") {
            window.alert("Please input a title, synopsis, and URL for your News Article.");
        } else {
            setIsLoading(true);
            ApiManager.post("articles", newNews)
                .then(() => props.history.push("/news"))
        }
    };

    return (
        <>
            <form>
            <fieldset className="newsEditForm">
                    <div className="formgrid">
                        <div>
                            <label htmlFor="title">News Article Title: </label>
                            <p>
                            <textarea
                                type="text"
                                rows="2"
                                cols="40"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="title"
                                value={news.title}
                            />
                            </p>
                        </div>
                        <div>
                            <label htmlFor="synopsis">Synopsis: </label>
                            <p>
                            <textarea
                                type="text"
                                rows="6"
                                cols="50"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="synopsis"
                                value={news.synopsis}
                            />
                            </p>
                        </div>
                        <div>
                            <label htmlFor="url">URL: </label>
                            <p>
                            <textarea
                                type="text"
                                rows="1"
                                cols="60"
                                required
                                className="form-control"
                                onChange={handleFieldChange}
                                id="url"
                                value={news.url}
                            />
                            </p>
                        </div>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={createNewNews}
                            className="btn btn-primary newsEditFormBtn"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default NewsForm