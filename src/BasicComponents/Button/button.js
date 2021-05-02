import React from 'react';
//     importing css files
import "./button.css";
export const Buttons =(props) =>{
    return(
        <button className="buttons">
            {props.children}
        </button>
    )
}
export const RadioButton = (props) =>{
return(
    <label class="containerss">
  <input type="radio"  name="radio"/>
  <span class="checkmarks"></span>
</label>
)
}