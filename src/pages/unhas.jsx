import React from "react";

const produtosUnhas = [
  {
    id: 1,
    name: "GLAM",
    image: "./public/esmalte01.webp",
    avaliacao: "./public/estrelinhas-avaliacao.png",
    price: 14.99,
    description: "Esmalte Vinho Magnífico 7ml",
    category: "Perfumaria",
  },
  {
    id: 2,
    name: "GLAM",
    image: "./public/esmalte02.webp",
    avaliacao: "./public/estrelinhas-avaliacao.png",
    price: 14.99,
    description: "Esmalte Vinho Magnífico 7ml",
    category: "Perfumaria",
  },
  {
    id: 3,
    name: "GLAM",
    image: "./public/esmalte03.webp",
    avaliacao: "./public/estrelinhas-avaliacao.png",
    price: 14.99,
    description: "Esmalte Vinho Magnífico 7ml",
    category: "Perfumaria",
  },
  {
    id: 4,
    name: "GLAM",
    image: "./public/esmalte01.webp",
    avaliacao: "./public/estrelinhas-avaliacao.png",
    price: 14.99,
    description: "Esmalte Vinho Magnífico 7ml",
    category: "Perfumaria",
  },
  {
   id: 5,
   name: "GLAM",
   image: "./public/esmalte02.webp",
   avaliacao: "./public/estrelinhas-avaliacao.png",
   price: 14.99,
   description: "Esmalte Vinho Magnífico 7ml",
   category: "Perfumaria",
 },
 {
   id: 6,
   name: "GLAM",
   image: "./public/esmalte03.webp",
   avaliacao: "./public/estrelinhas-avaliacao.png",
   price: 14.99,
   description: "Esmalte Vinho Magnífico 7ml",
   category: "Perfumaria",
 },
];

const Unhas = () => {
  return (
    <>
      <div className="container-unhas">
        <div className="content-unhas">
          <h2>ESMALTE PARA AS UNHAS</h2>
        </div>
      </div>
      <span>
        Para cuidados com as unhas Eudora oferece esmaltes de alta qualidade,
        hipoalergênicos e com grande variedade de cores. São mais de 15 cores
        lindas para você cuidar das unhas e combiná-las de acordo com o seu look
        e ocasião. A união perfeita para unhas saudáveis e bonitas!
      </span>

      <div className="container-unhas">
        <h2>TODOS OS PRODUTOS</h2>
      </div>

      <div id="produtos-container">
        {produtosUnhas.map((produto) => (
          <div key={produto.id} className="produto">
            <img src={produto.image} alt={produto.name}></img>
            <p> {produto.name} </p>
            <span>{produto.description} </span>
            <img
              className="avaliacoes"
              src={produto.avaliacao}
              alt={produto.name}
            ></img>
            <p>{produto.price} </p>
            <button>comprar agora</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Unhas;
