import { useState } from "react";

export default function Projects ()
{

    const [count, setCount] = useState(7);

    function decrementNumber ()
    {
        setCount(prevCount => prevCount - 1)
    }

    function incrementNumber ()
    {
        setCount(prevCount => prevCount + 1)
    }

    return(
        <>
            <h1>Projects oldala</h1>
            <button onClick={incrementNumber}>+</button>
            <h2>{count}</h2>
            <button onClick={decrementNumber}>-</button>

        </>
    );
}