import React, { useState } from "react";
import "../assets/SelectForm.css"


const SelectForm = () => {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [IsNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false);



const Dropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
}

const toggleOpen = () => {
  setIsNestedDropdownOpen(!IsNestedDropdownOpen);
}

 
  // const deleteItem = (id) => {
  //   setItems(items.filter(item => item.id !== id));
  // };





  return (


    
    
     
    <div className="dropdown" style={{marginTop:"20px",marginLeft:"auto",marginRight:"auto"}}>
    <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown"style={{backgroundColor:"yellow"}} onClick={Dropdown}>На чекање
    </button>
    {
isDropdownOpen &&(

  <ul style={{listStyle:"none"}}>
      
     <li>
      Товарено
     </li>
     <li>
      <button onClick={toggleOpen} style={{border:"none",position:"absolute"}} className="dropdown-content"><span className="caret" ></span>Одбиј</button>
      {
        IsNestedDropdownOpen && (
          <ul style={{listStyle:"none"}} className="dropdown-button">
            <li >причина на одбивањето</li>
            <li>Дефект на возилото</li>
            <li>Непочитување процедура</li>
            <li>Откажан од транспортерот</li>
            <li>Откажан дел од тонажа</li>
          </ul>
        )
      }
     </li>
    </ul>
)
    }


  </div>
    
  );
};

export default SelectForm;
