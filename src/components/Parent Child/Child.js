import React, { useState } from "react";

export default function Child({ onIncrement, count, disabled, show, reset, text, showText }) {
    return (
        <div>
            <h1>Child component</h1>
            <div className="childBtn">
                <button className="childBtn" value={count} onClick={onIncrement} disabled={disabled}> Increment </button>
                {count}
                <button className="childBtn" disabled={show} onClick={reset}> Reset </button>
            </div>
            <div id="doneDiv">
                <p disabled={showText}>{text}</p>
            </div>
        </div>
    );
}