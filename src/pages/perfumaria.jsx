import React from "react";


const menuPerfumaria=[
  {
    id:1,
    name:"Eudora",
    image:"./public/perfume-rose.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:2,
    name:"Eudora",
    image:"./public/creme-desodorante-hidratante-corporal-rose-250-g-frontal.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:3,
    name:"Eudora",
    image:"./public/combo-rose.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:4,
    name:"Eudora",
    image:"./public/perfume-rose.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:5,
    name:"Eudora",
    image:"./public/perfume-rose.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
]


const produtosPerfumaria=[
  {
    id:1,
    name:"Eudora",
    image:"./public/perfume-rose.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:2,
    name:"Eudora",
    image:"./public/EudoraFlor.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:3,
    name:"Eudora",
    image:"./public/EudoraDelux.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:4,
    name:"Eudora",
    image:"./public/EudoraFlor.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:5,
    name:"Eudora",
    image:"./public/EudoraMasculinoazul.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },

  {
    id:6,
    name:"Eudora",
    image:"./public/EUDORA-ROYAL.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:7,
    name:"Eudora",
    image:"./public/EudoraFlor.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:8,
    name:"Eudora",
    image:"./public/EudoraDelux.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id: 9,
    name:"Perfume",
    image:"./public/perfume01.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:199.99,
    description:"Eudora Bad Intention Desodorante Colônia",
    categoria:"masculino"
},
{
    id: 10,
    name:"Perfume",
    image:"./public/perfume02.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:199.99,
    description:"Eudora Bad Intention Desodorante Colônia",
    categoria:"masculino"
},
{
    id: 11,
    name:"Perfume",
    image:"./public/perfume03.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:199.99,
    description:"Eudora Bad Intention Desodorante Colônia",
    categoria:"masculino"
},
{
    id: 12,
    name:"Perfume",
    image:"./public/perfume04.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:199.99,
    description:"Eudora Bad Intention Desodorante Colônia",
    categoria:"masculino"
},
]


const Perfumaria = () => {
    return (
        <>
         <h2>
         PERFUMARIA EUDORA: EAU DE PARFUM E DESODORANTE COLÔNIA
         </h2>
         <p>
         Conheça a Perfumaria de Eudora e encontre produtos das linhas
          disponíveis com fragrâncias únicas para deixar a sua marca!
         </p>
         <img className="logo-perfume" src="./public/header-edp-rosa.webp" alt="logo"></img>


         <div id="produtos-container">
          {
            menuPerfumaria.map((produto)=>(
               <div key={produto.id} className="produto">
                <img src={produto.image} alt={produto.name}></img>
                <p> {produto.name} </p>
                <span>{produto.description}  </span>
                <img className="avaliacoes"
                src={produto.avaliacao} alt={produto.name}></img>
                <p>{produto.price}  </p>
                <button>comprar agora</button>
                </div>
            ))
          }
         </div>
          
          <h2>Perfumaria em Oferta</h2>

          <img className="logo-pef" 
          src="./public/header-perfumaria-20.webp" alt="logo"></img>

        <div id="produtos-container">
          {
            produtosPerfumaria.map((produto)=>(
               <div key={produto.id} className="produto">
                <img src={produto.image} alt={produto.name}></img>
                <p> {produto.name} </p>
                <span>{produto.description}  </span>
                <img className="avaliacoes"
                src={produto.avaliacao} alt={produto.name}></img>
                <p>{produto.price}  </p>
                <button>comprar agora</button>
                </div>
            ))
          }
         </div>




        </>
      );
}
 
export default Perfumaria;