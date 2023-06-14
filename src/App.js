import React, { useState } from 'react'
import './App.css'

const App = () => {
  // State variables for maxEntry and queue
  //maxEntry takes initial value as 5
  const [maxEntry, setMaxEntry] = useState(5)
  //queue takes initial value as an empty Array
  const [queue, setQueue] = useState([])

  // Enqueue function to add a new number to the queue
  // Each time Enqueue operation is performed a new object with properties id and number
  // will be created and object is added to the queue
  const enqueue = () => {
    if (queue.length < maxEntry) {
      //Generates randomNumber between 0 to 100
      const randomNumber = Math.floor(Math.random() * 100)
      //updating queue each time Enqueue operation performed
      setQueue([...queue, { id: queue.length, number: randomNumber }])
    }
  }

  // Dequeue function to remove the first number from the queue
  const dequeue = () => {
    if (queue.length > 0) {
      //updating queue using slice() method when Dequeue operation performed
      const newQueue = queue.slice(1)
      setQueue(newQueue)
    }
  }

  // Function to show the first number in an alert
  const showFront = () => {
    if (queue.length > 0) {
      alert(`Front: ${queue[0].number}`)
    }
  }

  // Function to show whether the queue is empty in an alert
  const showIsEmpty = () => {
    alert(`IsEmpty: ${queue.length === 0}`)
  }

  // Function to show whether the queue is full in an alert
  const showIsFull = () => {
    alert(`IsFull: ${queue.length === maxEntry}`)
  }

  // Function to clear the queue
  const clearAll = () => {
    setQueue([])
  }

  return (
    <div className="queue-app">
      <h1 className="title">Queue React App</h1>

      <div>
        <label htmlFor="max-entry">Max Entry</label>
        <input
          className="input-container"
          id="max-entry"
          value={maxEntry}
          onChange={(event) => setMaxEntry(event.target.value)}
        />
      </div>

      <div className="buttons-container">
        <button
          className="enqueue-button"
          onClick={enqueue}
          disabled={queue.length >= maxEntry} // Disables enqueue-button if queue reaches maxEntry
        >
          Enqueue
        </button>

        <button
          className="dequeue-button"
          onClick={dequeue}
          disabled={queue.length === 0} // Disables dequeue-button if queue is empty
        >
          Dequeue
        </button>

        <button
          className="front-button"
          onClick={showFront}
          disabled={queue.length === 0} // Disables front-button if queue is empty
        >
          Front
        </button>

        <button className="alert-button" onClick={showIsEmpty}>
          Is Empty
        </button>

        <button className="alert-button" onClick={showIsFull}>
          Is Full
        </button>

        <button className="clear-button" onClick={clearAll}>
          Clear all
        </button>
      </div>

      {/* displaying queue in the UI */}
      <h2>Queue</h2>
      <div className="queue-container">
        <div className="display-queue">
          {queue.length > 0 ? (
            <ul>
              {queue.map((eachNumber) => (
                <li key={eachNumber.id}>{eachNumber.number}</li>
              ))}
            </ul>
          ) : (
            <p>Queue is empty</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
