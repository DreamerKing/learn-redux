import React, { useState, useEffect } from 'react';
export default (params) => {
    const [ count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count}`;
    })
    return (
        <div>
            <p>You clicked {count}</p>
            <button onClick={() => setCount(count + 1)}> Click Me</button>
        </div>
    );
}
