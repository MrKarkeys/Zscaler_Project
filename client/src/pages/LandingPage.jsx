import React, { useRef, useState } from "react"
//import { Form, Button, Card, Alert } from "react-bootstrap"
//import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            <header>

            </header>
            <div class="buttons-grid">
                <div className="w-100 text-center mt-3">
                    <Link to="/FirewallPolicy">
                        <button>Firewall</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;