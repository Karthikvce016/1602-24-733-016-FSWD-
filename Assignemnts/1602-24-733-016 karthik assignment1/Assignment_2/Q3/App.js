import React, { useState } from 'react';

function Calculator() {
    const [display, setDisplay] = useState('');

    function handleButtonClick(value) {
        setDisplay(display + value);
    }

    function handleClear() {
        setDisplay('');
    }

    function handleCalculate() {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Error');
        }
    }

    return (
        <div className="calculator-container">
            <h2>React Calculator</h2>
            <div className="calculator">
                <div className="display">{display || '0'}</div>
                <div className="button-grid">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button className="op-btn" onClick={() => handleButtonClick('/')}>/</button>

                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button className="op-btn" onClick={() => handleButtonClick('*')}>*</button>

                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button className="op-btn" onClick={() => handleButtonClick('-')}>-</button>

                    <button className="clear-btn" onClick={handleClear}>C</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button className="equal-btn" onClick={handleCalculate}>=</button>
                    <button className="op-btn" onClick={() => handleButtonClick('+')}>+</button>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Calculator />
        </div>
    );
}

export default App;
