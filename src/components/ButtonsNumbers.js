import React from 'react'

const ButtonsNumbers = (props) => {
    return (
        <div id="buttons_numbers">
            <div>
                <input  onClick={props.numberPressed} className={props.numbers.includes("1") ? "numberClicked" : "number"} type="button" value="1" />
                <input onClick={props.numberPressed} className="number" type="button" value="2" className={props.numbers.includes("2") ? "numberClicked" : "number"} />
                <input onClick={props.numberPressed} className="number" type="button" value="3"  className={props.numbers.includes("3") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="4"  className={props.numbers.includes("4") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="5"  className={props.numbers.includes("5") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="6"  className={props.numbers.includes("6") ? "numberClicked" : "number"}/>
            </div>
            <div>
                <input onClick={props.numberPressed} className="number" type="button" value="7"  className={props.numbers.includes("7") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="8"  className={props.numbers.includes("8") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="9"  className={props.numbers.includes("9") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="10"  className={props.numbers.includes("10") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="11"  className={props.numbers.includes("11") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="12"  className={props.numbers.includes("12") ? "numberClicked" : "number"}/>
            </div>
            <div>
                <input onClick={props.numberPressed} className="number" type="button" value="13"  className={props.numbers.includes("13") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="14"  className={props.numbers.includes("14") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="15"  className={props.numbers.includes("15") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="16"  className={props.numbers.includes("16") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="17"  className={props.numbers.includes("17") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="18"  className={props.numbers.includes("18") ? "numberClicked" : "number"}/>
            </div>
            <div>
                <input onClick={props.numberPressed} className="number" type="button" value="19"  className={props.numbers.includes("19") ? "numberClicked" : "number"}/>
                <input onClick={props.numberPressed} className="number" type="button" value="20"  className={props.numbers.includes("20") ? "numberClicked" : "number"}/>
                <input onClick={props.CashPressed} className="opt" type="button" value="Cash" />
                <input onClick={props.ClearPressed} className="opt" type="button" value="Clear" />
            </div>
            <div id="random-div">
                <input onClick={props.RandomPressed} id="Random" type="button" value="Random" />
            </div>
        </div>

    )
}

export default ButtonsNumbers
