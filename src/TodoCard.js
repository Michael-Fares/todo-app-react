import React from 'react'

const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    fontSize: "14px",
    padding: "5px 30px",
    margin: "10px 10px",
    cursor: "pointer"
}

const liStyle = {
    color: "steelblue",
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