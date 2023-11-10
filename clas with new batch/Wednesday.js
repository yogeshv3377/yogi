import React, { useState } from 'react'

const Wednesday = () => {


    const [input, setInput] = useState("");
    const inputChange = (event) => {
        setInput(event.target.value)
        
    }

    console.log(input)

    return (
        <div>
            <input type='text' onChange={inputChange} value={input} placeholder="enter  name" />
            <h2> youtyped:{input}</h2>
        </div>
    )
}

export default Wednesday