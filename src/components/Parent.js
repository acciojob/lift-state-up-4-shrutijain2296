import React, { useState } from "react";
import Child from "./Child";


const Parent = () =>{
    let[cartItems, setCartItems] = useState([
        {id: 1, name: 'Item 1', price: 10},
        { id: 2, name: 'Item 2', price: 20},
        {id: 3, name: 'Item 3', price: 15}
    ]);

    let[itemName, setItemName] = useState("");
    let[itemPrice, setItemPrice] = useState("");
 
    function addList(event){
        if(itemName && itemPrice > 0){
            const newItem = {
                id : cartItems.length+1,
                name: itemName,
                price: parseFloat(itemPrice) 
            }
            setCartItems([...cartItems, newItem]);
            setItemName("");
            setItemPrice("");
        };
       
      

    }

    function onRemove(itemId){
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <label htmlFor = "itemName">Item Name: </label>
            <input type = "text" id = "itemName"  value = {itemName} onChange = {(event) => setItemName(event.target.value)}/>
            <label htmlFor = "itemPrice">Item Price: </label>
            <input type = "number" id = "itemPrice"  value = {itemPrice} onChange = {(event) => setItemPrice(event.target.value)}/>
            <button onClick = {addList}>Add Item</button>

            <Child cartItems = {cartItems} onRemove = {onRemove}/>

        </div>
    )
}
export default Parent;