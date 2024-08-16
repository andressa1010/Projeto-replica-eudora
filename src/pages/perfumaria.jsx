import React from "react";
import Menu from "../components/menu";


const menuPerfumaria=[
  {
    id:1,
    name:"Eudora",
    image:"/perfume-rose.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:2,
    name:"Eudora",
    image:"/creme-desodorante-hidratante-corporal-rose-250-g-frontal.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:3,
    name:"Eudora",
    image:"/combo-rose.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:4,
    name:"Eudora",
    image:"/perfume-rose.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:5,
    name:"Eudora",
    image:"/perfume-rose.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:6,
    name:"Eudora",
    image:"/creme-desodorante-hidratante-corporal-rose-250-g-frontal.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:259.80,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
]


const produtosPerfumaria=[
  {
    id:1,
    name:"Eudora",
    image:"/perfume-rose.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:2,
    name:"Eudora",
    image:"/EudoraFlor.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:3,
    name:"Eudora",
    image:"/EudoraDelux.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:4,
    name:"Eudora",
    image:"/EudoraFlor.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:5,
    name:"Eudora",
    image:"/EudoraMasculinoazul.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },

  {
    id:6,
    name:"Eudora",
    image:"/EUDORA-ROYAL.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum ",
    category:"Perfumaria"
  },
  {
    id:7,
    name:"Eudora",
    image:"/EudoraFlor.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Eudora Eau De Parfum, o famoso eudora roxo",
    category:"Perfumaria"
  },
  {
    id:8,
    name:"Eudora",
    image:"/EudoraDelux.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:189.99,
    description:"Rosé Eau de Parfum, o famoso eudora ouro ",
    category:"Perfumaria"
  },
  {
    id: 9,
    name:"Perfume",
    image:"/perfume01.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:199.99,
    description:"Eudora Bad Intention Desodorante Colônia",
    categoria:"masculino"
},
{
    id: 10,
    name:"Perfume",
    image:"/perfume02.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:199.99,
    description:"Eudora Bad Intention Desodorante Colônia",
    categoria:"masculino"
},
{
    id: 11,
    name:"Perfume",
    image:"/perfume03.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:199.99,
    description:"Eudora Bad Intention Desodorante Colônia",
    categoria:"masculino"
},
{
    id: 12,
    name:"Perfume",
    image:"/perfume04.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:199.99,
    description:"Eudora Bad Intention Desodorante Colônia",
    categoria:"masculino"
},
]


const Perfumaria = () => {
    return (
        <>
        <Menu/>

        <div className="text-glam">
          <img className="logo-perfumaria"
           src="/perfumaria-logo.webp" alt="logo"></img>
        </div>

         <div className="text-glam">
         <h2>
         PERFUMARIA EUDORA
         </h2>
         </div>

         <p>
         Conheça a Perfumaria de Eudora e encontre produtos das linhas
          disponíveis com fragrâncias únicas para deixar a sua marca!
         </p>

         <div className="text-glam">
          <h2>  Você vai amar nossas sugestões exclusivas para você:</h2>
         </div>
         <img className="logo-perfume" src="/header-edp-rosa.webp" alt="logo"></img>


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
          src="/header-perfumaria-20.webp" alt="logo"></img>

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