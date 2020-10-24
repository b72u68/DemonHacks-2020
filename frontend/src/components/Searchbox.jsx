import React from 'react';
import './searchbox.css'

const SearchBox = (props) =>{
    return(
        <input type='search'
        className='search'
        placeholder={props.placeholder}
        onChange = {props.handleChange}
        />
    )
}

export default SearchBox;