import React from 'react';
import "./style.css";

function SearchBtn(props) {
    return(
        <button
        onClick = {props.onClick}
        className = {`btn btn-${props.flavor}`}
        placeholder = {props.placeholder}
        />
    )

}

export default SearchBtn;