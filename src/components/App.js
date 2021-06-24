import React from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { useState, useEffect } from 'react';
const App = () => {
  const [money, addMoney] = useState(0);
  const [randomNumber, getRandomNumber] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [wonGame, checkGameStatus] = useState("");
  const CashPressed = () => {
    if (numbers.length == 0) {
      alert("Please select 5 numbers first");
    }
    else if (money == 0) {
      alert("Please add money to the ticket first");
    }
    else if (randomNumber.length == 0) {
      alert("Please generate random numbers first");
    }
    if (wonGame === false) {
      alert("You have lost the game so you cannot cash the money");
      ClearPressed();
      return;
    }
    else if (wonGame == true) {
      alert("you have won $" +  (parseInt(money)+parseInt(money)) + " Congratulations");
      ClearPressed();
    }
  }
  const ClearPressed = () => {
    const newNumbers = [];
    const newMoney = 0;
    const newRandonNumbers = [];
    const newGameStatus = "";
    setNumbers(newNumbers);
    addMoney(newMoney);
    getRandomNumber(newRandonNumbers);
    checkGameStatus(newGameStatus);
  }
  const RandomPressed = (event) => {
    if (numbers.length < 5) {
      alert("Please select 5 numbers");
      return;
    }
    else if (money === 0) {
      alert("Please add money to the ticket");
      return;
    }
    else if (randomNumber.length > 0) {
      alert("Random Numbers already generated");
      return;
    }
    var arr = [];
    while (arr.length < 5) {
      var r = Math.floor(Math.random() * 20) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    // alert(arr.toString(","));
    var gameWon = true;
    for (let i = 0; i < numbers.length; i++) {
      if (!arr.includes(parseInt(numbers[i]))) {
        gameWon = false;
        break;
      }
    }
    arr.includes()

    getRandomNumber(arr);
    checkGameStatus(gameWon);
  }

  const addMoneyPressed = (event) => {
    if (numbers.length < 5) {
      alert("Please select 5 numbers before entering money");
      return;
    }
    var price = event.target.id.split("_")[1];
    const newMoney = parseInt(money) + parseInt(price);
    addMoney(newMoney);
  }

  const numberPressed = (event) => {
    var number = event.target.defaultValue;
    var newNumbers;
    // alert(event.target.defaultValue);
    if (numbers.includes(number)) {
      newNumbers = numbers.filter(function (value, index, arr) {
        return value != number;
      });
    }
    else {
      if (numbers.length >= 5) {
        alert("Can not add more than 5 numbers");
        return;
      }
      newNumbers = [...numbers, number]
    }//newNumbers.push(number);
    setNumbers(newNumbers);
  }
  const numberInList = (event) => {
  }
  useEffect(() => {
    const fakeDb = []
    setNumbers(fakeDb);
  }, [])
  useEffect(() => {
    const fakeDb = 0
    addMoney(fakeDb);
  }, 0)
  useEffect(() => {
    const fakeDb = []
    getRandomNumber(fakeDb);
    checkGameStatus("");
  }, [])
  return (<div id="main-div">

    <Header />
    <Main numbers={numbers} money={money} wonGame={wonGame} randomNumber={randomNumber} numberPressed={numberPressed} addMoneyPressed={addMoneyPressed} ClearPressed={ClearPressed} RandomPressed={RandomPressed} CashPressed={CashPressed} />
    <Footer></Footer>
  </div>)
}

export default App;
