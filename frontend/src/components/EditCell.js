import React from "react";
import { useEffect, useState } from "react"

const EditCell = ({ id, column, val, updateValue }) => {
    const [value, setValue] = useState(val);

    const handleSelect = (e) => {
        setValue(e.target.value)
        updateValue(id, column.field, e.target.value)
    }

    return column.type === "select" ? 
        (<select onChange={handleSelect} value={value}>
            {column.options.map((o) => (<option key={o} value={o}>{o}</option>))}
        </select>)
        :
        (<input
            value={value} onChange={(e) => setValue(e.target.value)}
            onBlur={() => updateValue(id, column.field, value)} type={column.type} />)
}

export default EditCell;