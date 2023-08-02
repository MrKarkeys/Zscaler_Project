import React from 'react'
import DataTable from '../components/DataTable'
import NavBar from '../components/NavBar'
import BasicExample from '../components/PolicyDropdown'
import ProfilePage from "../components/ProfilePage"

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
        name: "DLP Engine",
        field: "dlpEngine",
        type: "text"
    },
    {
        name: "File Type",
        field: "fileType",
        type: "text"
    }
]

const DLPPolicy = () => {
    return(
        <div>

            <NavBar />
            <BasicExample />
            <ProfilePage />
            <div class="title">
                <h1>DLP Policies</h1>
            </div>
            <div class="DLP-container">
            <DataTable columns={columns} url={"dlp"} class = "DLP-table"/>
            </div>
        </div>
       
    )
}

export default DLPPolicy