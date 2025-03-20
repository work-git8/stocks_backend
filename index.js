const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

//Endpoint 1 : Calculate the Returns of the Stocks added.Create an endpoint that takes three variables as query parameters and returns total Return Value of the stocks.Write an Express code snippet.Declare an endpoint calculate-returns using the get keyword.Declare three variables boughtAt, marketPrice, and quantity to take the input.Parse the boughtAt and marketPrice inputs as a float to calculate the return value.Return the result as a string.API Call: <http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2>. Expected Output: 200//
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let returnValue = (marketPrice - boughtAt) * quantity;
  res.send(returnValue.toString());
});

//Endpoint 2 : Create an endpoint that takes four variables as query parameters and returns total return value of all the stocks.Write an Express code snippet.Declare an endpoint total-returns using the get keyword.Declare four variables stock1, stock2, stock3, and stock4 to take the inputs.Parse all the inputs as a float to calculate the total returns.Return the result as a string.API Call: <http://localhost:3000/total-returns?stock1=100&stock2=200&stock3=200&stock4=400>.Expected Output: 900//
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
});

//Endpoint 3 : Create an endpoint that takes two variables as query parameters and returns total ReturnPercentage of the stocks.Write an Express code snippet.Declare an endpoint calculate-return-percentage using the get keyword.Declare three variables boughtAt and returns to take the input.Parse the boughtAt and returns as inputs as a float to calculate the return percentage.Return the result as a string.API Call: <http://localhost:3000/calculate-return-percentage?boughtAt=400&returns=200>. Expected Output: 50//
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

//Endpoint 4 : Create an endpoint that takes four variables as query parameters and returns total return percentage of all the stocks.Write an Express code snippet.Declare an endpoint total-return-percentage using the get keyword.Declare four variables stock1, stock2, stock3, and stock4 to take the inputs.Parse all the inputs as a float to calculate the total return percentage.Return the result as a string.API Call: <http://localhost:3000/total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40>. Expected Output: 90//
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send((stock1 + stock2 + stock3 + stock4).toString());
});

//Endpoint 5 : Create an endpoint that takes returnPercentage as query parameter and returns the stock status.Write an Express code snippet.Declare an endpoint status using the get keyword.Declare a variable returnPercentage to take the input.Apply an if condition to identify if the final stock is in “Profit” or “Loss” based on the return percentage.If returnPercentage is greater than 0 then its profit otherwise loss.API Call: <http://localhost:3000/status?returnPercentage=90>.Expected Output: profit//
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  if (returnPercentage > 0) {
    res.send('Profit');
  } else {
    res.send('Loss');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
