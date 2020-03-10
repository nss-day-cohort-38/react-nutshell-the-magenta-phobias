import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import ApiManager from '../../modules/ApiManager';

const activeUser = JSON.parse(sessionStorage.getItem('credentials'));

const NewsFriendsList = (props) => {
    const [followNews, setFollowNews] = useState([]);

    const getFollows = () => {
        return ApiManager.getAllWithUserId("followings", activeUser.id).then(follows => {
            setFollowNews(follows)
        });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div>
            <section className="section-content">
                <div className="icon-container">
                    <i className="big arrow circle left icon" id="back-arrow-detail" onClick={() => props.history.push('/')}></i>
                    <i className="big plus square outline icon" id="plusIcon" onClick={() => props.history.push('/news/new')}></i>
                </div>
                <div className="container-cards">
                    {followNews.sort(function (a, b) {
                        return new Date(b.timestamp) - new Date(a.timestamp)
                    }).map(newsItem =>
                        <NewsCard
                            key={newsItem.id}
                            news={newsItem}
                            getNews={getNews}
                            {...props}
                        />)}
                </div>
            </section>

        </div>
    );
};
export default NewsList