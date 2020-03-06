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

        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;

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
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="title"
                            value={news.title}
                        />
                        <label htmlFor="title">News Article</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="synopsis"
                            value={news.synopsis}
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="url"
                            value={news.url}
                        />
                        <label htmlFor="url">URL</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={createNewNews}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default NewsForm