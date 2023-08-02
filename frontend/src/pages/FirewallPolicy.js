import React from "react";
import { useEffect, useState } from "react"
import DataTable from "../components/DataTable"
import NavBar from '../components/NavBar'
import BasicExample from '../components/PolicyDropdown'
import ProfilePage from "../components/ProfilePage"
const departments = ["Engineering", "Administration", "HR"]

const columns = [
    {
        name: "Rule Name",
        field: "name",
        type: "text"
    },
    {
        name: "Label",
        field: "label",
        type: "text"
    },
    {
        name: "Status",
        field: "status",
        type: "select",
        options: ["Enabled", "Disabled"]
    }, 
    {
        name: "Department",
        field: "department",
        type: "select",
        options: departments
    }
]

const FirewallPolicy = () => {
    
    return (
        <div>
             <NavBar />
            <BasicExample />
            <ProfilePage />
            <div class="title fire-title">
                <h1>Firewall Policies</h1>
            </div> 
            <DataTable columns={columns} url={'firewall'}/>
        </div>

       
    )
   
}

export default FirewallPolicy;