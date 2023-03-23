import React, { useState } from 'react';
import calculate from '../logic/calculate';
import DefaultValue from './DefaultValue';

const CalculatorApp = () => {
  const [result, setResult] = useState(0);
  const handleClick = (e) => {
    setResult((object) => calculate(object, e.target.innerHTML));
  };
  return (
    <div>
      <div className="container-div">
        <div className="wrapper">
          <div className="screen">
            <DefaultValue result={result.next || result.total || '0'} />
          </div>
          <div className="btn-group">
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              AC
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              +/-
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              %
            </button>
            <button className="btn orange" type="button" onClick={handleClick}>
              ÷
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              7
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              8
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              9
            </button>
            <button className="btn orange" type="button" onClick={handleClick}>
              x
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              4
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              5
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              6
            </button>
            <button className="btn orange" type="button" onClick={handleClick}>
              -
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              1
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              2
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              3
            </button>
            <button className="btn orange" type="button" onClick={handleClick}>
              +
            </button>
          </div>
          <div className="bottom">
            <button
              className="btn lightgrey zero"
              type="button"
              onClick={handleClick}
            >
              0
            </button>
            <button
              className="btn lightgrey"
              type="button"
              onClick={handleClick}
            >
              .
            </button>
            <button className="btn orange" type="button" onClick={handleClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
