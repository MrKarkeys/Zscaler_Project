import React from 'react'
import { useEffect, useState } from "react"
import EditCell from "./EditCell";
import { useAuth } from "../contexts/AuthContext"
import { FaSearch } from "react-icons/fa";
import './DataTable.css';

const departments = ["Engineering", "Administration", "HR"]


const DataTable = ({ columns, url }) => {
    const { currentUser, logout } = useAuth()
    const user = currentUser.email;
    const [policies, setPolicies] = useState(null);
    const [oldPolicies, setOldPolicies] = useState(null);
    const [newPolicy, setNewPolicy] = useState({
        name: '',
        label: '',
        department: "Engineering",
        status: "Enabled",
        user
    })
    const [editedPolicies, setEditedPolicies] = useState(new Set());
    const [input, setInput] = useState("");
    const [completeFields, setCompleteFields] = useState(true);
    const [incompletePolicies, setIncompletePolicies] = useState(new Set());


    // Retrieves all policies from database associated with this user
    useEffect(() => {
        const getFirewallPolicies = async () => {
            const response = await fetch(`/${url}/${user}`)
            console.log(response)
            const json = await response.json()
            if (response.ok) {
                setPolicies(json)
                setOldPolicies(json)
                console.log(json)
            } else {
                console.log("Get failed")
            }
        }
        getFirewallPolicies();
    }, [])

    // Adds newPolicy to the database
    const addPolicy = async () => {
        for (const key in newPolicy) {
            if (newPolicy[key] === "") {
                setCompleteFields(false)
                return
            }
        }
        setCompleteFields(true);
        const response = await fetch(`/${url}/post`, {
            method: "POST",
            body: JSON.stringify(newPolicy),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json();
        if (response.ok) {
            console.log("Added policy")
            const newPoliciesTemp = [...policies, json]
            setPolicies(newPoliciesTemp)
            setOldPolicies(newPoliciesTemp)
            setNewPolicy({
                name: '',
                label: '',
                department: "Engineering",
                status: "Enabled",
                user
            })
        } else {
            console.log("Unable to add")
        }
    }

    // handles change in Add form
    const handleChange = (e) => {
        let updatedValue = e.target.value;
        setNewPolicy({
            ...newPolicy,
            [e.target.name]: updatedValue
        })
    }

    const deletePolicy = (id) => {
        console.log(`/${url}/delete/${id}`);
        fetch(`/${url}/delete/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Policy ${id} has been deleted`)
                    const newPoliciesTemp = policies.filter((p) => p.id !== id);
                    setPolicies(newPoliciesTemp);
                    setOldPolicies(newPoliciesTemp);
                }
                else {
                    console.error("**Failed to delete policy**")
                }
            })
            .catch((error) => {
                console.error('Error during the delete request: ', error);
            });
    }

    //PUT
    const saveEditedPolicy = async (policy) => {
        for (const key in policy) {
            if (policy[key] === "") {
                setIncompletePolicies(new Set(incompletePolicies).add(policy.id))
                return
            }
        }

        console.log(policy)
        const newSet = new Set(editedPolicies);
        newSet.delete(policy.id);
        setEditedPolicies(newSet)

        setOldPolicies(oldPolicies.map((p) => {
            if (p.id === policy.id) {
                return policy;
            } else {
                return p;
            }
        }))
        const response = await fetch(`/${url}/put/${policy.id}`, {
            method: "PUT",
            body: JSON.stringify(policy),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            console.log("Successfully updated policy " + policy.id);
        } else {
            console.log("Unable to update policy");
        }
    }

    const cancelEditedPolicy = (id) => {
        const newSet = new Set(editedPolicies);
        newSet.delete(id);
        setEditedPolicies(newSet)
        const oldPolicy = oldPolicies.find(pol => pol.id === id)
        setPolicies(policies.map((p) => {
            if (p.id === id) {
                return oldPolicy
            } else {
                return p;
            }
        }))
    }

    const updateValue = (id, field, newVal) => {
        console.log(id, field)
        console.log(policies)
        const newList = policies.map((policy) => {
            return policy.id === id ? { ...policy, [field]: newVal } : policy;
        })
        setPolicies(newList)
        console.log(newList)
    }

    const handleInputChange = (e) => {
        setInput(e);
    }

    const handleSearch = () => {
        const filteredPolicies = oldPolicies.filter(policy => policy.name.includes(input));
        setPolicies(filteredPolicies);
    }

    return (
        <div class="table-container">
            <div className="input-wrapper">
                <FaSearch id="search-icon" class="search-icon"/>
                <input
                    id="searchbar"
                    class="searchbar"
                    placeholder="Type to search.."
                    value={input}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button className="btn search-btn" type="submit" onClick={handleSearch}>SEARCH</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        {columns && columns.map((col) => (
                            <th key={col.name}>{col.name}</th>
                        ))}
                        <th>Actions</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {policies && policies.map((policy) => (
                        <tr key={policy.id}>
                            {columns.map((col) => (
                                <td key={col.name}>
                                    {editedPolicies && editedPolicies.has(policy.id)
                                        ? <EditCell
                                            key={policy.id}
                                            id={policy.id}
                                            column={col}
                                            val={policy[col.field]}
                                            updateValue={updateValue} />
                                        : <span key={policy.id}>{policy[col.field]}</span>
                                    }
                                </td>
                            ))}
                            <td>
                                {editedPolicies.has(policy.id)
                                    ? <div>
                                        <button className="btn btn-primary change-button"
                                            onClick={() => saveEditedPolicy(policy)}>Save</button>
                                        <button className="btn btn-primary change-button"
                                            onClick={() => cancelEditedPolicy(policy.id)}>Cancel</button>
                                        {incompletePolicies.has(policy.id) ? <p style={{ color: 'red', inlineSize: "90px" }}>Incomplete Fields!</p> : null}
                                    </div>
                                    : <button type="button" className="btn btn-primary" onClick={() => setEditedPolicies(new Set(editedPolicies).add(policy.id))}>Edit</button>}
                            </td>
                            <td><button type="button" className="btn btn-primary" onClick={() => deletePolicy(policy.id)} id="deletebtn">Delete</button></td>
                        </tr>
                    ))}

                    <tr key="addPolicy">
                        {columns && columns.map((col) => (
                            <td key={col.name}>
                                {col.type === "select" ?
                                    <select key={col.field} name={col.field} onChange={handleChange}>
                                        {col.options.map((o) => <option key={o} value={o}>{o}</option>)}
                                    </select>
                                    : <input key={col.field} type={col.type || "text"} name={col.field} placeHolder={col.name} onChange={handleChange}></input>
                                }
                            </td>
                        ))}
                        <td><button type="button" className="btn btn-primary" onClick={addPolicy}>Add</button>
                            {!completeFields ? <p style={{ color: 'red', inlineSize: "90px" }}>Incomplete Fields!</p> : null}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default DataTable;