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

  // const handleSubmit = () => {
  // TODO:  //STOPPED HERE
  // }

  const constructMessage = evt => {
    evt.preventDefault();
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
        // FIXME: How do you get the page to re-render?
        // .then(() => props.history.push("/messages"))
        .then(setIsLoading(false))
        .then(props.getMessages)
    }
  }

  useEffect(() => {
    // TODO: If this is an edit, we need to get the entry-to-edit's details
    setIsLoading(false);
  }, [])

  return (
    <>
      <form>
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
            type="button"
            disabled={isLoading}
            onClick={(evt) => {
              const constructedMessage = constructMessage(evt);
              saveMessage(constructedMessage);
              // Garbage, solution to clear this form on submit: 
              // the grandparent of this buton is the form
              evt.target.parentNode.parentNode.reset();
            }}
            onKeyDown={(evt) => {
              if (event.key === "Enter") {
                
              }
            }}
          >
            Send
          </button>
        </fieldset>
      </form>
    </>
  )

}

export default MessageForm