#  Queue React App

This is a simple React application that demonstrates the functionalities of a queue. It allows you to enqueue and dequeue numbers, display the front element, check if the queue is empty or full, and clear the entire queue.

## Features

- Input box to set the maximum number of entries in the queue.
- Enqueue button to add a new number to the queue.
  - The button is disabled when the queue reaches the maximum entry limit.
- Dequeue button to remove the first number from the queue.
  - The button is disabled when the queue is empty.
- Front button to show the first number in an alert.
  - The button is disabled when the queue is empty.
- IsEmpty button to show whether the queue is empty in an alert.
- IsFull button to show whether the queue is full in an alert.
- Clear all button to reset the queue.

## Demo link
Access my site at [queue-react-app](https://pavanmahesh0207.github.io/Queue-React-App)

## Approach

I have developed this application using React. The application follows a component-based architecture and leverages React's state management capabilities to handle the queue and its operations.

The main components in the application are:

- `App`: The root component that encapsulates the entire application.
- `InputBox`: Renders the input box for setting the maximum number of entries in the queue.
- `QueueButtons`: Contains the buttons for enqueue, dequeue, front, isEmpty, isFull, and clear all operations.
- `QueueDisplay`: Renders the queue numbers and displays them on the UI.
- `QueueItem`: Represents an individual number in the queue.

The application state is managed using the `useState` hook. The `maxEntry` state variable holds the maximum number of entries allowed in the queue, while the `queue` state variable keeps track of the numbers in the queue.

The `enqueue`, `dequeue`, `showFront`, `showIsEmpty`, `showIsFull`, and `clearAll` functions handle the respective operations and update the state accordingly.

The UI is built using HTML and CSS. The application layout is structured using HTML tags, and CSS styles are applied to achieve the desired visual appearance.

The application provides instant feedback to the user through disabled buttons when certain conditions are met, such as reaching the maximum entry limit or an empty queue.




## Setup

1. Navigate to the project directory
```bash
cd queue-react-app
```
2. Install the dependencies
```bash
npm install
npm start
```
3. Start the development server
```bash
npm start
```
 This will open the application in your default browser. If it 
  doesn't, you can manually open [http://localhost:3000]() in your 
  browser.

4. Use the application by setting the max entry, enqueuing or 
   dequeuing numbers, and interacting with the different buttons.

## Technologies Used
1. React
2. HTML
3. CSS

