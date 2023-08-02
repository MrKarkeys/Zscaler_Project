import React from 'react'
import {useHistory } from "react-router-dom"

const ProfilePage = () =>{
    const history = useHistory()

function handleClick(path) {
    history.push(path);
  }

    return(
        <div className="profilebutton">
        <button type="button" class="btn btn-outline-secondary" onClick={() => handleClick("Profile")}> 
        Profile</button>
        </div>
    )
}
export default ProfilePage