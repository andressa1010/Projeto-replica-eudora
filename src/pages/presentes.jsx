import React from "react";
import Menu from "../components/menu";

const produtosPresentes=[
       {
        id:1,
            name:"Eudora",
            image:"/presente1.webp",
            avaliacao:"/estrelinhas-avaliacao.png",
            price:189.99,
            description:"kit presente ",
            category:"Perfumaria"
          },
          {
            id:2,
            name:"Eudora",
            image:"/presente2.webp",
            avaliacao:"/estrelinhas-avaliacao.png",
            price:259.80,
            description:"kit presente  ",
            category:"Perfumaria"
          },
          {
            id:3,
            name:"Eudora",
            image:"/presente3.webp",
            avaliacao:"/estrelinhas-avaliacao.png",
            price:259.80,
            description:"kit presente",
            category:"Perfumaria"
          },
          {
            id:4,
            name:"Eudora",
            image:"/presente4.webp",
            avaliacao:"/estrelinhas-avaliacao.png",
            price:259.80,
            description:"kit presente ",
            category:"Perfumaria"
          },
          {
            id:5,
            name:"Eudora",
            image:"/presente5.webp",
            avaliacao:"/estrelinhas-avaliacao.png",
            price:259.80,
            description:"kit presente",
            category:"Perfumaria"
          },
    
]


const Presentes = () => {
    return ( 
        <>
        <Menu/>
        <img className="logo-presente" 
        src="/bannercategoria-presentes .webp" alt="logo"></img>

        <h2>
        PRESENTEAR EUDORA
        </h2>

        <p>
          O Presentear com Eudora agora está diferente e revolucionado.
          É isso mesmo! Mudamos o nosso jeito de te ajudar com os presentes,
          porque queremos estar cada vez mais próximos dos nossos consumidores,
         principalmente, em momentos especiais, sendo a sua Loja de Presentes 
         Bem Avaliada. Vá até o fim da página e confira um passo a passo 
        completo para garantir uma experiência única de compra para presentear! 🎁
        </p>

        <h2> TOP MAIS PRESENTEADOS</h2>
   
        <div id="produtos-container">
            {
                produtosPresentes.map((produto)=>(
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
 
export default Presentes;