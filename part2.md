# Creating A React App

# Styling


## Styling CSS in JS
- We can leverage JSX's flexibility to create CSS styling INSIDE of our JavaScript file.
- ## Notice how background-color is backgroundColor
- ## Notice that we have defined a headerStyle
```
const headerStyle = {
    color: 'black',
    backgroundColor: 'red',
}
```
- ## Notice how this gets executed

`<h1 style={headerStyle}>{title}</h1>`

## **We can utilize index.css for styling.**
# More Components - Button.js
```
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'/> // NOTICE
        </header>
    )
} 
.
.
.
```
##  Notice how we plug in our component inside of another component's return. We added the following properties to be accessed in the Button component.
## Then, in our Button.js. 
```
import React from 'react';

function Button({ color, text }){
    return (
        <button style={{backgroundColor: color}} // Notice double curly for inline style.
        className='btn'>
            {text}
        </button>
    );
}
export default Button;
```
# Adding an onClick function. Example.

## Passing in onClick function
```
const Header = ({ title }) => {
    const onClick = () => {
        console.log(Math.floor(Math.random() * 100));
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
} 
```
## onClick is being passed as a property from our Headers file.
```
    function Button({ color, text, onClick }){
    return (
        <button style={{backgroundColor: color}}
        className='btn' onClick={onClick}>
            {text}
        </button>
    );
}
```
# Creating a List in React
```
function Tasks() {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
}
```
## We are using our map higher-order function to generate h3 headers for each element of the array.
## When we use .map and output JSX -> this is a list.
## Every list needs a key property on the parent of the list.. <h3>
```
const tasks = [
    {
        id: 1,
        text: 'I love food',
    },
    {
        id: 2,
        text: 'I love to eat',
    },
    {
        id: 3,
        text: 'I live to fight and die another day'
    },
]

function Tasks() {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}
```

# useState Hook (Very Important)
- ## We don't want tasks array to be seperate from our component, we want it to be part of our state. Instead of having some global variable, let's put the contents of the array in the useState function as an argument.
- ## Starting by importing useState from react.

## App.js (Global State)
```
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'I love food',
    },
    {
        id: 2,
        text: 'I love to eat',
    },
    {
        id: 3,
        text: 'I live to fight and die another day'
    },
]);
  return (
    <div className="container">
      <Header title='title'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}
```
## Tasks.js
- We are catching the tasks variable as a property from <Tasks tasks={tasks}>
```
function Tasks({tasks}) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
    </>
  );
}
export default Tasks;
```
## Task.js
- We are catching the task property from Tasks.js's map
```
function Task({ task }) {
    return (
        <div className='task'>
            <h3>{task.text}</h3>
        </div>
    )
}

export default Task;
```
# React Icons
## npm install react-icons
## We added an x icon to delete tasks.
```
import { FaTimes } from 'react-icons/fa';

function Task({ task }) {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes /></h3>
            <p>{task.day} </p>
        </div>
    )
}
```

# States get passed down, actions get passed up.
## Examine Task.js
- We have an onClick property on our x icon from react-icons. When clicked, we are going to call onDelete, which is a function that was passed in from Tasks.
- Our Tasks has an onDelete property that comes from App.js.
- We can then handle onDelete in our global state. NOTE: We start at the app state, then move down to Tasks, then move down to Task before we see the action that fires up back up to the main component.