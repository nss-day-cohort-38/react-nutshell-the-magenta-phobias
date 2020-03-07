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
                    {news.sort(function(a,b){
                        return new Date(b.timestamp) - new Date(a.timestamp)
                     }).map(newsItem =>
                        <NewsCard
                            key={newsItem.id}
                            news={newsItem}
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