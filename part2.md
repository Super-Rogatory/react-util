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