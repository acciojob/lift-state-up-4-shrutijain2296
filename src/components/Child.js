import React from "react";


const Child = ({cartItems, onRemove}) =>{



    return(
        <div className="child">
            <h2>Child Component</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key = {item.id}>
                        <span>{item.name}</span> - <span>${item.price}</span>
                        <button onClick = {() => onRemove(item.id)}>Remove</button>
                    </li>
))}
            </ul>

        </div>
    )
}
export default Child;