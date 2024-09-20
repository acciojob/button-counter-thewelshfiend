import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function btnHandle()
    {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={btnHandle}>Click me</button>
        </div>
    )
}

export default Counter