import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
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
Header.defaultProps = {
    title: 'Tasker'
}
Header.propTypes = {
    title: PropTypes.string
}
// const headerStyle = {
//     color: 'black',
//     backgroundColor: 'red',
// }
export default Header;