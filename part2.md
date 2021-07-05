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
- ## **[tasks,setTasks].** Notice that setTasks is a method from React.

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

# Spread Syntax for Objects
```
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
```
- Toggle's purpose is to reverse true/false values in relation to some event.
- In our App.js, notice our onToggle property.
- This function is to call setTasks (which changes the state of the component) with each individual task property in order to reverse some boolean value upon id match.
- **The second expression after ...task, allows you to change a specific property after it has been 'spread'**
## Spread syntax example
```
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

# AddTask - important codepiece
```
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
```
## Default Value && onChange ** Form Input State
```
<input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
```
- Notice how we set the value of the JSX expression to {text}. By default, an empty string.
- Notice our onChange, when you start to type on the input, that fires onChange. Whatever is typed in **WILL CHANGE** our text Value with setText.
## **Notice how that changes if the input is a text input or a checkbox input**
# React DevTools will aid in checking functionality - 1:08:00
# Neat Trick with Spread Syntax and Objects
```
const id = Math.floor(Math.random() * 10000) + 1;
const newTask = { id, ...task }
```
## Allows us to create a new object with id:id PLUS all the key-value pairs that exist in the task object.
## Then we can use `setTasks([...tasks, newTask]);` to add this to our tasks total object.

# Ternary?? You can short-circuit as well!
```
{showAddTask && <AddTask onAdd={addTask}/>}
```
- If showAddTask is true, then evaluate that component.
- Else, do nothing.
- First expression must evaluate to true before doing anything else.
- Recall Or. `{showAddTask || <AddTask onAdd={addTask}/>}`. This says, if showAddTask is true return showAddTask, else return AddTask component. That is different. <br> **[Or] will pick the FIRST value that is true**. <br> **[And] will pick the second value GIVEN a true expression evaluation from the first expression.**

# Creating a production build, 1:18:00.