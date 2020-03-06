import React, { useState, useEffect } from 'react';
//import the components we will need
import NewsCard from './NewsCard';
import ApiManager from '../../modules/ApiManager';

const NewsList = (props) => {
    const [news, setNews] = useState([]);

    const getNews = () => {
        return ApiManager.getAll("articles").then(newsFromAPI => {
            setNews(newsFromAPI)
        });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div>
            <section className="section-content">
                <div className="container-cards">
                    {news.map(news =>
                        <NewsCard
                            key={news.id}
                            news={news}
                            getNews={getNews}
                            {...props}
                        />)}
                </div>
                <button type="button"
                    className="btn addNewsBtn"
                    onClick={() => { props.history.push("/news/new") }}>
                    + Add News Article
            </button>
            </section>

        </div>
    );
};
export default NewsList