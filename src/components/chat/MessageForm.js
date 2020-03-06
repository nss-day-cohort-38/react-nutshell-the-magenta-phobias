import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';

const MessageForm = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({message: ""})

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
        message: message.message,
        timestamp: new Date().toLocaleString()
      }
      // If this is an edit, we need the id
      // and the timestamp should be what it was.
      if (props.messageToEdit.id) {
        messageToSave.id = props.messageToEdit.id;
        messageToSave.timestamp = props.messageToEdit.timestamp;
      }
      return messageToSave;
    }
  };
  
  const saveMessage = (message) => {
    // If the object has an id, it is an edit
    // so we put/update
    if (message.hasOwnProperty('id')) {
      return ApiManager.updatePut("messages", message);
    } else {
      // Otherwise, it is new, so we post
      return ApiManager.post("messages", message);
    }
  }

  const handleSubmit = (evt) => {
    setIsLoading(true);
    evt.preventDefault();
    evt.stopPropagation();
    const constructedMessage = constructMessage(evt);
    // Clears the form upon submission
    evt.target.reset()
    saveMessage(constructedMessage)
      // Gets the messages again and re-renders
      .then(props.getMessages)
      .then(setIsLoading(false));
  }
  
  useEffect(() => {
    if (props.messageToEdit.message) {
      setMessage(props.messageToEdit)
      // A "one-time" setting of the message field's value
      // when there's a new props.messageToEdit containing a message string
      // (which happens when the edit button is clicked)
      document.getElementById("message").value = props.messageToEdit.message 
    }
    setIsLoading(false);
  }, [props.messageToEdit])

  return (
    <>
      {/*
      https://stackoverflow.com/a/33212911
      Form Submit allows the Enter key to work 
      instead of just clicking the send button
      */}
      <div className="message-container, darker, chat-input-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              name="message"
              type="message"
              required
              onChange={handleFieldChange}
              id="message"
              placeholder="Chat message"
            />
            <button
              type="submit"
              disabled={isLoading}
            >
              Send
            </button>
          </fieldset>
        </form>
      </div>
    </>
  )

}

export default MessageForm