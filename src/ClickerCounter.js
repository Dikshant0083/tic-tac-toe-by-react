import React, { useRef} from 'react';

const ClickerCounter = () => {
    const countRef = useRef(0);
    const displayRef = useRef(null);

    const handleClickIncrement = () => {
        countRef.current++;
        displayRef.current.textContent = countRef.current;
    };
    const handleClickDecrement = () => {
        countRef.current--;
        displayRef.current.textContent = countRef.current;
    }

    return (
        <div>
            <p>Click count: <span ref={displayRef}>0</span></p>
            <button onClick={handleClickIncrement}>Increment</button>
            <button onClick={handleClickDecrement}>Decrement</button>  
        </div>
    );
};
    export default ClickerCounter;