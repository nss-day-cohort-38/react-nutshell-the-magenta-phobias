import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const FollowerForm = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [follow, setFollow] = useState({});
  const [users, setUsers] = useState([]);
  const activeUser = JSON.parse(sessionStorage.getItem('credentials'));

  const handleFieldChange = evt => {
    const stateToChange = {...follow};
    stateToChange[evt.target.id] = evt.target.value;
    setFollow(stateToChange);
  }

  const getUsers = () => {
    // Gets all users and puts them in state
    return ApiManager.getAll("users")
      .then(setUsers)
  }

  const constructFollow = () => {
    if (follow === "") {
      window.alert("Please input a follow");
    } else {
      setIsLoading(true);
      const followToSave = {
        userId: activeUser.id,
        followedId: // TO GET FROM A MATCH WITH USERNAME
      }
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
    </>
  )

}