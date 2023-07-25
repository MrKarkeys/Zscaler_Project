import { useEffect, useState } from "react"


const FirewallPolicy = () => {
    
    const [policies, setPolicies] = useState(null);
    
    
    useEffect(() => {
        const getFirewallPolicies = async () => {
            const response = await fetch('/get/firewall')
            const json = await response.json()
    
            if (response.ok) {
                console.log("ok")
                setPolicies(json)
            } else {
                console.log('not ok');
            }
        }

        getFirewallPolicies();
    }, [])

    const deletePolicy = (name) => {
        console.log(name);
    }

    return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Rule Name</th>
                <th>Status</th>
                <th>Label</th>
                <th>Department</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {policies && policies.map((policy) => (
                <tr key={policy.id}>
                    <td>{policy.name}</td>
                    <td>{policy.status ? "Enabled" : "Disabled"}</td>
                    <td>{policy.label}</td>
                    <td>{policy.department}</td>
                    <td><button onClick={() => deletePolicy(policy.name)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>

    </div>
    )
}

export default FirewallPolicy;