import React, { useState } from 'react'
import './button.css';

const Button = () => {
    const[result,setResult] = useState("");
    function clickHandler(e){
        setResult(result.concat(e.target.value))

    }
    function onclear(){
        setResult("")
        
    }
    function results(){
        try{
            setResult(eval(result).toString())

        }
        catch(err){
            setResult("Error")
        }
        


    }
    function clearOne(){
        setResult(result.slice(0,-1));

    }
    return (
        <div className='main'>
            <div className="main-container">
            <div className="container">
                <input type="text"  value={result} readOnly/>
            </div>
            <div className="key">


                <button id='clear' className='commoncolor' onClick={onclear}>Clear</button>
                <button id='backspace' className='commoncolor' onClick={clearOne}>C</button>
                <button value="/" onClick={clickHandler} className='commoncolor'>&divide;</button>
                <button value="7" onClick={clickHandler}>7</button>
                <button value="8" onClick={clickHandler}>8</button>
                <button value="9" onClick={clickHandler}>9</button>
                <button value="*" onClick={clickHandler} className='commoncolor'>&times;</button>
                <button value="4" onClick={clickHandler}>4</button>
                <button value="5" onClick={clickHandler}>5</button>
                <button value="6" onClick={clickHandler}>6</button>
                <button value="-" onClick={clickHandler} className='commoncolor'>&ndash;</button>
                <button value="1" onClick={clickHandler}>1</button>
                <button value="2" onClick={clickHandler}>2</button>
                <button value="3" onClick={clickHandler}>3</button>
                <button value="+" onClick={clickHandler} className='commoncolor'>+</button>
                <button value="0" onClick={clickHandler}>0</button>
                <button value="." onClick={clickHandler}>.</button>
                <button id='result'  className='commoncolor' onClick={results}>=</button>

            </div>
        </div>
        </div>
    )
}

export default Button