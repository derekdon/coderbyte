import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

const ON = 'ON';
const OFF = 'OFF';

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    const buttonText = isOn ? OFF : ON;
    const handleClick = useCallback(() => setIsOn(!isOn), [isOn]);
    return (
        <button
            onClick={handleClick}>
            {buttonText}
        </button>
    );
};

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
