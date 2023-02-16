import React, { useState } from 'react';
import drinkCategories from '../Data/drinkCategories.json';
import MenuContent from './menuContent';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(true);

  const sideMenu = () => {
    if(menu === true) {
      setMenu(false);
    }
    if(menu === false) {
      setMenu(true);
    }
  }

  return (
    <header>
      <nav className='navbar'>
        <ul>
          <li><Link to="/">DRINKS&CHILL</Link></li>
          <li onClick={sideMenu} className={`${menu ? '' : 'close'}`}>Menu</li>
        </ul>
      </nav>
      <ul className={`menu ${menu ? '' : 'overlay'}`}>
        <button onClick={sideMenu} className={`menu-button ${menu ? '' : 'close'}`}>&#8629;</button>
        <li className='add-drink-link'><Link to="/addDrink">..füge einen eigenen Drink hinzu..</Link></li>
        {drinkCategories.map((item) => <MenuContent
          key = {item.id}
          title = {item.title}
          class = {item.class}
          api = {item.api}
        />)}
      </ul>
      <section className="title-section">
      <h1>Cocktails & Drinks!</h1>
      <p>HERZLICH WILLKOMMEN IN EINER WELT DER COCKTAILS UND GETRÄNKE!</p>
    </section>
    </header>
  );
}

export default Header;