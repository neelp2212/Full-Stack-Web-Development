/*Your task is to implement a data structure for a product catalog and create queries to retrieve data.

step 1: Create four items, each having the properties of name, model, cost, and quantity (e.g name: item1: {"phone",    model: "android", cost: 299, qty: 51})

step 2: Create an array to hold an inventory of store items (e,g inventory = [])

step 3: Add all four objects to the main array using an array method,

step 4: log the inventory array to the console.

step 5: Access the quantity element of your second item, and log it to the console.  

You can use the following HTML template and provide your answer as the completed script element:*/

let item1 = { 
    name: "phone",
    model: "android",
    cost: 299,
    qty: 59
}
let item2 = { 
    name: "phone",
    model: "android",
    cost: 299,
    qty: 59
}

let item3 = { 
    name: "phone",
    model: "android",
    cost: 299,
    qty: 59
}

let item4 = { 
    name: "phone",
    model: "android",
    cost: 299,
    qty: 59
}

let inventory = [item1[1]];
inventory.push(item1, item2, item3, item4);
console.log(inventory[1].qty);

