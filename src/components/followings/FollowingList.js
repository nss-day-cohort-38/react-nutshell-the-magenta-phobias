import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import FollowCard from './FollowCard'
import './Following.css'

const FollowingList = props => {
  const [followingList, setFollowingList] = useState([]);
  const [users, setUsers] = useState([]);
  const activeUser = JSON.parse(sessionStorage.getItem('credentials'))
  
  const getFollowings = () => {
    // Gets the activeUser's followings and puts them in state
    return ApiManager.getAllWithUserId("followings", parseInt(activeUser.id))
      .then(setFollowingList)
  }

  const getUsers = () => {
    // Gets all users and puts them in state
    return ApiManager.getAll("users")
      .then(setUsers)
  }

  useEffect(() => {
    getFollowings();
    getUsers();
  }, [])

  // Find to get a user from state that matches the followId
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const matchUser = (followedId) => {
    if (users.length > 0) {
      return users.find( ({id}) => id === followedId)
    } else {
      return {username: null}
    }
  }

  return (
    <>
      <div className="background">
        <div className="wrapper">
          <div id="headerContainer">
            <h1>Following List</h1>
          </div>
          <div className="container-cards">
            {followingList.map(follow => 
              <FollowCard 
                key={follow.id}
                user={matchUser(follow.followedId)}
                {...props}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )

}

export default FollowingList  