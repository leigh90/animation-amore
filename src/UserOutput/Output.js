import React from 'react';
import './Output.css'

const UserOutput = (props) =>{
    return (

    <div className="Output">
        <p> Movie Component: Title <strong>{props.title}</strong>  Release Year: <strong>{props.year}</strong>  </p>
        <p></p>
    </div>
    )
    
}

export default UserOutput;