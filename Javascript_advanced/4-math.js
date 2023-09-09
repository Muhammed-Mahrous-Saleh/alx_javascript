#!/usr/bin/node

function divideBy(firstNumber) {
    return (secondNumber) => secondNumber / firstNumber;
}

function addBy(firstNumber) {
    return (secondNumber) => secondNumber + firstNumber;
}

var addBy100 = (secondNumber) => addBy(100)(secondNumber)
var addBy1000 = (secondNumber) => addBy(1000)(secondNumber)
var divideBy10 = (secondNumber) => divideBy(10)(secondNumber)
var divideBy100 = (secondNumber) => divideBy(100)(secondNumber)