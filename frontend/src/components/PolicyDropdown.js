import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useHistory } from "react-router-dom"
import {Button,} from "react-bootstrap"
import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

function BasicExample() {
  const [, setError] = useState("")
  const {logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <>
    <div> 
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Policies
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/dlppolicy"><Link to="/dlppolicy">DLP Policy</Link></Dropdown.Item>
        <Dropdown.Item href="#/firewallpolicy"><Link to="/firewallpolicy">Firewall Policy</Link></Dropdown.Item>
        <Dropdown.Item href="#/malwarepolicy"><Link to="/malwarepolicy">Malware Policy</Link></Dropdown.Item>
        <Dropdown.Item href="#/mobmalwarepolicy"><Link to="/mobmalwarepolicy">Mobile Malware Policy</Link></Dropdown.Item>      </Dropdown.Menu>
     </Dropdown>
     </div>
     <div className="logoutbutton">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
    </div>
     </>
  )
}


export default BasicExample;