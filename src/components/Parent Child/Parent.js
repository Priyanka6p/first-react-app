import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {

    const [count, setCount] = useState(0);
    const [showInc, setShowInc] = useState(false);
    const [resetVisible, setResetVisible] = useState(true);
    const [text, setText] = useState('');
    const [showText, setShowText] = useState(false);

    const onIncrement = () => {
        if (count === 5) {
            setShowText(true);
            setText(<div id="red">Done</div>);
            setShowInc(true);
            setResetVisible(false);
        }
        else {
            setCount(prev => prev + 1)
            // setCount(count + 1);
        }
    };

    const reset = () => {
        setCount(0);
        setResetVisible(true);
        setShowInc(false);
        setShowText(true);
        setText(<div id="green"></div>);
    }

    return (
        <div>
            <h1>Parent component</h1>
            <input className="childBtn" type='text' value={count} onChange={onIncrement} />
            <Child onIncrement={onIncrement} disabled={showInc} show={resetVisible} reset={reset} showText={showText} text={text} />
        </div >
    );
}