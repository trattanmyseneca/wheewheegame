import React from 'react';
import NumbersSelectedItem from './NumbersSelectedItem';
import { useState, useEffect } from 'react';


const NumberSelected = (props) => {

    return (
        <div id="numbers">
            <h4>Numbers Selected</h4>
            {props.numbers.map((number) => (<NumbersSelectedItem number={number} />))}

            {props.randomNumber.length > 0 ? (<><h4>Random Numbers Generated:</h4><p>
                {props.randomNumber.map((rn) => (<span> [{rn}] </span>))}
            </p>{props.wonGame === true ? (<><p>Won the game:</p></>) : (<p>Loss the game</p>)}</>) : ""}
            
           

        </div>
    )
}

export default NumberSelected
