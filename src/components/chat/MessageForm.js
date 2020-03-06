import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const MessageForm = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({text: ""})

  const handleFieldChange = evt => {
    const stateToChange = {...message};
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  const constructMessage = () => {
    if (message === "") {
      window.alert("Please input a message")
    } else {
      setIsLoading(true);
      const messageToSave = {
        //TODO: use active userId
        userId: 4,
        message: message.text,
        timestamp: new Date().toLocaleString()
      }
      // If this is an edit, we also need the id
      if (props.match.params.messageId) {
        messageToSave.id = props.match.params.messageId;
      }
      return messageToSave;
    }
  };
  
  const saveMessage = (message) => {
    // If the object has an id, it is an edit
    // so we put/update
    if (message.hasOwnProperty('id')) {
      ApiManager.updatePut("messages", message)
      .then(() => props.history.push("/messages")
      );
    } else {
      // Otherwise, it is new, so we post
      ApiManager.post("messages", message)
      .then(setIsLoading(false))
      // Gets the messages again and re-renders
      .then(props.getMessages)
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    const constructedMessage = constructMessage(evt);
    saveMessage(constructedMessage);
    // Clears the form upon submission
    evt.target.reset()
  }
  
  useEffect(() => {
    // TODO: If this is an edit, we need to get the entry-to-edit's details
    setIsLoading(false);
  }, [])

  return (
    <>
      {/*
      https://stackoverflow.com/a/33212911
      Form Submit allows the Enter key to work 
      instead of just clicking the send button
      */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            name="text"
            type="text"
            required
            onChange={handleFieldChange}
            id="text"
            placeholder="Chat message"
            // value={message}
          />
          <button
            type="submit"
            disabled={isLoading}
          >
            Send
          </button>
        </fieldset>
      </form>
    </>
  )

}

export default MessageForm