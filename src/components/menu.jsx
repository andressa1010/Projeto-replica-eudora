import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Menu = () => {
    const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(prevShow => !prevShow);
  };
    return ( 
        <>
            <div className="app">
      <div className="nav">
        <div className="conteudo-interno">
        <h1 className='logo'>
          EUDORA 
        </h1>
    
        <nav className={`nav ${show ? "show" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/produtos">Produtos</Link> </li>
            <li><Link to="/sobre">Sobre</Link> </li>
            <li><Link to="/contato">Contato</Link> </li>
          </ul>
        </nav>
        <div className="nav-icons-container">
            <div className="search-input-container">
                <input type="search" placeholder="procurar"  />
                <FontAwesomeIcon icon={faSearch} />
                </div>
                <button className="shopping-cart">
                    <FontAwesomeIcon icon={faShoppingCart}  />
                    <div className="produtos-disconto">0</div>
                </button>
                <button className="menu-button">
                    <FontAwesomeIcon  icon={faBars} onClick={toggleMenu}   />
                </button>
        </div>
        </div>
      </div>
      </div>
        </>
     );
}
 
export default Menu;