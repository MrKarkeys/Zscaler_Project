import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import MalwarePolicy from "../pages/MalwarePolicy"
import MobMalwarePolicy from "../pages/MobMalwarePolicy"
import FirewallPolicy from "../pages/FirewallPolicy"
import DLPPolicy from "../pages/DLPPolicy"
import Profile from "./Profile"
import "../pagesCss/Policies.css"



function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/malwarepolicy" component={MalwarePolicy} />
              <PrivateRoute path="/mobmalwarepolicy" component={MobMalwarePolicy} />
              <PrivateRoute path="/firewallpolicy" component={FirewallPolicy} />
              <PrivateRoute path="/DLPpolicy" component={DLPPolicy} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
