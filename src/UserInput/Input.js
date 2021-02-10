import React from 'react';


const UserInput = (props) =>{
    return (

        <div>
            <h1>Input Element</h1>
            <input type="text" onChange={props.changed}/>
        </div>
        )
}

export default UserInput;