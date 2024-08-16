import React from "react";
import Menu from "../components/menu";


const Contato = () => {
    return ( 
        <>
        <Menu/>
        <div>
      <p>Você pode entrar em contato comigo através dos links abaixo:</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/andressa-nunes-27847a281/" target="_blank" rel="noopener noreferrer">
            <img className="logo-contato"
             src="/logotipo-do-linkedin.jpg" alt="logo"></img>
          </a>
        </li>
        <li>
          <a href="https://wa.me/seu-numero-completo" target="_blank" rel="noopener noreferrer">
          <img className="logo-contato"
             src="/logo-whas.webp" alt="logo"></img>
          </a>
        </li>
      </ul>
    </div>
        </>
     );
}
 
export default Contato;