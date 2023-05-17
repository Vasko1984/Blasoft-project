import React from 'react'
import "../assets/DropDown.css"
const DropDown = () => {
  return (
    <div>
<nav>
  <ul id='menu'>
   
    <li><a class='prett' href='#' title='Menu'>На Чекање</a>
      <ul class='menus'>
        <li class='has-submenu'><a class='prett' href='Dropdown 1' title='Dropdown 1'>Товарено</a></li>
        <li class='has-submenu'><a class='prett' href='Dropdown 1' title='Dropdown 1'>Одбиј</a>
          <ul class='submenu'>
            <li><a href="#" title="Sub Menu">Причина на одбивањето</a></li>
            <li><a href="#" title="Sub Menu">Дефект на возилото</a></li>
            <li><a href="#" title="Sub Menu">Непочитување на процедура</a></li>
            <li><a href="#" title="Sub Menu">Откажан од транспортерот</a></li>
            <li><a href="#" title="Sub Menu">откажан ден од тонажа</a></li>
          </ul>
        </li>
      
      </ul>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default DropDown