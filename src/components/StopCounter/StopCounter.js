import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function StopCounter() {

    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setCount(prev => prev + 1);
                
            }, 1000);
        }
        else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [start]);

    const startCounter = () =>{
        setStart(true);
    };
    
    const pauseCounter = () => {
        setStart(false);
    };

    const resetCounter = () => {
        setStart(false);
        setCount(0);
    };

    const params = useParams()
    console.log(params);

    return (
        <div>
            <h1>Stop Counter</h1>
            {/* <Link to="/">Home</Link> */}
            <button className="childBtn" onClick={startCounter}>Start</button>
            <button className="childBtn" onClick={resetCounter}>Reset</button>
            <button className="childBtn" onClick={pauseCounter}>Pause</button><br />
            <input className="childBtn" id="counter" value={count} />
        </div>
    );
}

export default StopCounter;