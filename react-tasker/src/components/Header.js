import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'/>
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