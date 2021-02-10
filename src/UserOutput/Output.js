import React from 'react';


const UserOutput = (props) =>{
    return (

    <div>
        <p> Movie Component: Title <strong>{props.title}</strong>  Release Year: <strong>{props.year}</strong>  </p>
        <p></p>
    </div>
    )
    
}

export default UserOutput;