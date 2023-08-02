import React, { useState, useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import NavBar from './NavBar'
import BasicExample from './PolicyDropdown'
import ProfilePage from "./ProfilePage"
import "../pagesCss/Dashboard.css"

const Dashboard = () => {
    const [FirewallPolicies, setFirewallPolicies] = useState(null);
    const [FirewallEnabled, setFirewallEnabled] = useState(0);

    const [DLPPolicies, setDLPPolicies] = useState(null);
    const [DLPEnabled, setDLPEnabled] = useState(0);

    const [MalwarePolicies, setMalwarePolicies] = useState(null);
    const [MalwareEnabled, setMalwareEnabled] = useState(0);

    const [MobMalwarePolicies, setMobMalwarePolicies] = useState(null);
    const [MobMalwareEnabled, setMobMalwareEnabled] = useState(0);

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const user = currentUser.email;

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }


    useEffect(() => {

        const getFirewallPolicies = async () => {
            const response = await fetch(`/firewall/${user}`)
            const json = await response.json()
            let count = 0

            if (response.ok) {
                console.log("ok")
                setFirewallPolicies(json)
                console.log(json)

                if (json) {
                    console.log("firewall policies:")
                    console.log(json)
                    for (let i = 0; i < json.length; i++) {
                        if (json[i].status == "Enabled") {
                            count += 1
                        }
                    }
                }
                setFirewallEnabled(count)

            } else {
                console.log('not ok');
            }
        }

        getFirewallPolicies();

        const getDLPPolicies = async () => {
            const response = await fetch(`/dlp/${user}`)
            const json = await response.json()
            let count = 0

            if (response.ok) {
                console.log("ok")
                setDLPPolicies(json)
                console.log(json)

                if (json) {
                    console.log("dlp policies;")
                    console.log(json)
                    for (let i = 0; i < json.length; i++) {
                        console.log(json[i])
                        if (json[i].status == "Enabled") {
                            count += 1
                        }
                    }
                }
                setDLPEnabled(count)

            } else {
                console.log('not ok');
            }
        }

        getDLPPolicies();

        const getMalwarePolicies = async () => {
            let response = await fetch(`/malware/${user}`)
            let json = await response.json()
            if (json.length <= 0) {
                response = await fetch("/malware/post", {
                    method: "POST",
                    body: JSON.stringify({
                        inboundTraffic: 1,
                        outboundTraffic: 1,
                        http: 1,
                        ftp: 1,
                        user
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                json = await response.json()
            }
            let count = 0
            if (response.ok) {
                console.log("ok")
                setMalwarePolicies(json)
                if (json.length > 0) {
                    if (json[0].inboundTraffic) {
                        count += 1
                    }
                    if (json[0].outboundTraffic) {
                        count += 1
                    }
                    if (json[0].http) {
                        count += 1
                    }
                    if (json[0].ftp) {
                        count += 1
                    }
                } else{
                    console.log("json is 0")
                }

            } else {
                console.log('not ok');
            }
            setMalwareEnabled(count)
        }

        getMalwarePolicies();


        const getMobMalwarePolicies = async () => {
            let response = await fetch(`/mobmalware/${user}`)
            let json = await response.json()
            if (json.length <= 0) {
                response = await fetch("/mobmalware/post", {
                    method: "POST",
                    body: JSON.stringify({
                        vulnerability: 1,
                        usercred: 1,
                        idinfo: 1,
                        ftp: 1,
                        user
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                json = await response.json()
            }
            let count = 0

            if (response.ok) {
                console.log("ok")
                setMobMalwarePolicies(json)
                console.log(json)
                if (json.length > 0) {
                    if (json[0].vulnerability) {
                        count += 1
                    }
                    if (json[0].userCred) {
                        count += 1
                    }
                    if (json[0].idInfo) {
                        count += 1
                    }
                    if (json[0].locInfo) {
                        count += 1
                    }
                }

            } else {
                console.log('not ok');
            }
            setMobMalwareEnabled(count)
        }

        getMobMalwarePolicies();


    }, [])

    return (
        <div>

            <NavBar />
            <BasicExample />
            <ProfilePage />

            <div class="welcome">
                <h1 class="welcome-message">Welcome to your Dashboard!</h1>
            </div>
            <div class="links">
                <Link to="/dlppolicy" class="link">
                    <button>
                        <h2>DLP Policies</h2>
                        <h3>{DLPPolicies && DLPEnabled} Policies Enabled</h3>
                        <h3>{DLPPolicies && (DLPPolicies.length - DLPEnabled)} Policies Disabled</h3>

                    </button>
                </Link>

                <Link to="/firewallpolicy" class="link">
                    <button>
                        <h2>Firewall Policies</h2>
                        <h3>{FirewallPolicies && FirewallEnabled} Policies Enabled</h3>
                        <h3>{FirewallPolicies && (FirewallPolicies.length - FirewallEnabled)} Policies Disabled</h3>
                    </button>
                </Link>

                <Link to="/malwarepolicy" class="link">
                    <button>
                        <h2>Malware Policies</h2>
                        <h3>{MalwarePolicies && MalwareEnabled} Settings Allowed</h3>
                        <h3>{MalwarePolicies && (4 - MalwareEnabled)} Settings Blocked</h3>
                    </button>
                </Link>

                <Link to="/mobmalwarepolicy" class="link">
                    <button>
                        <h2>Mobile Malware Policies</h2>
                        <h3>{MobMalwarePolicies && MobMalwareEnabled} Settings Allowed</h3>
                        <h3>{MobMalwarePolicies && (4 - MobMalwareEnabled)} Settings Blocked</h3>
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Dashboard;