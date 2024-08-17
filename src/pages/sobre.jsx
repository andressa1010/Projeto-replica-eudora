import React from "react";
import Menu from "../components/menu";

const Sobre = () => {
  return (
    <>
      <Menu />

       <div className="container-sobre">
        <img src="/img.andressa3.jpg" alt="Descrição da Imagem" className="image"></img>
        <div className="text">
          <h2>Olá! Meu nome é Andressa, e sou desenvolvedora web.</h2>
        <p>Este site é uma
          réplica do site da Eudora, criado como parte do meu portfólio para
          demonstrar minhas habilidades em desenvolvimento front-end. Tenho
          experiência em JavaScript React Html Css e estou sempre em busca de
          novos desafios e oportunidades para crescer profissionalmente.</p>

          <img src="/icons8-javascript-48.png" alt="logo"></img>
        <img src="/icons8-react-48.png" alt="logo"></img>
        <img src="/icons8-html-48.png" alt="logo"></img>
        <img src="/icons8-css-48.png" alt="logo"></img>
        </div>
        </div>
   
      
    </>
  );
};

export default Sobre;
