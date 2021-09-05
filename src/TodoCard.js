import React from 'react'

const buttonStyle = {
    backgroundColor: "#FF0000",
    color: "white",
    padding: "5px",
    margin: "10px 10px",
    cursor: "pointer",
    fontFamily: "Quicksand, sans-serif",
    border: "none"
}

const liStyle = {
    color: "#171010",
    fontFamily: "Quicksand, sans-serif",
    listStyle: "none"
}


function TodoCard(props) {
    const {title, clickToRemove, index} = props
    return (

        <li style={liStyle}>{title}
            <button style={buttonStyle} onClick={() =>{clickToRemove(index)}}>Delete</button>
        </li>
    )
}

export default TodoCard