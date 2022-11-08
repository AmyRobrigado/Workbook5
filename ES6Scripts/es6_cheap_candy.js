"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    
    ];

    // Which candies cost less than $4.00?

  let allUnder4 = products.filter((arrayValue)=> arrayValue.price < 4.00);

    console.log(allUnder4);
   

    // Which candies had "M&M" in its name?
  let findAllMM = products.filter((arrayValue)=> arrayValue.product == 2.89);

  function displayCandy(candyName){
      return candyName.product;
  }
  
  products.forEach(displayCandy); 


    // Do we carry "Swedish Fish"?