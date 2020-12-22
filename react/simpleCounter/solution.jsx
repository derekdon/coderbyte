import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

export const Counter = ({startingCount = 0}) => {
    const [count, setCount] = useState(startingCount);
    const onClick = useCallback(() => setCount(count + 1), [count]);
    return (
        <div id="mainArea">
            <p>button count: <span>{count}</span></p>
            <button id="mainButton" onClick={onClick}>Increase</button>
        </div>
    )
};

ReactDOM.render(
    <Counter startingCount={0} />,
    document.getElementById('root')
);
