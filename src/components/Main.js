import React from 'react';
import NumberSelected from './NumberSelected';
import CostSelected from './CostSelected';
import ButtonsNumbers from './ButtonsNumbers';
import ButtonsPrice from './ButtonsPrice';
const Main = (props) => {
    return (
        <main>
            <ButtonsPrice addMoneyPressed={props.addMoneyPressed} />
            <ButtonsNumbers  numbers={props.numbers}  numberPressed={props.numberPressed}  ClearPressed={props.ClearPressed}  RandomPressed={props.RandomPressed} CashPressed={props.CashPressed} ></ButtonsNumbers>
            <div id="results">
                <NumberSelected numbers={props.numbers} randomNumber={props.randomNumber} wonGame={props.wonGame} ></NumberSelected>
                <CostSelected money={props.money}></CostSelected>
            </div>

            <div className="clear"></div>
        </main>
    )
}

export default Main
