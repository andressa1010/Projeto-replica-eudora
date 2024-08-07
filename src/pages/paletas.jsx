import React from "react";
import Menu from "../components/menu";


const ProdutosMaquiagem=[
    {
        id:1,
        name:"Eudora",
        image:"/paleta01.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:2,
        name:"Eudora",
        image:"/paleta02.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:3,
        name:"Eudora",
        image:"/paleta03.jpg",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:4,
        name:"Eudora",
        image:"/paleta04.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:5,
        name:"Eudora",
        image:"/paleta05.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:6,
        name:"Eudora",
        image:"/paleta06.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:7,
        name:"Eudora",
        image:"/paleta01.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:8,
        name:"Eudora",
        image:"/paleta02.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:9,
        name:"Eudora",
        image:"/paleta03.jpg",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:10,
        name:"Eudora",
        image:"/paleta04.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:11,
        name:"Eudora",
        image:"/paleta05.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
      {
        id:12,
        name:"Eudora",
        image:"/paleta06.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:189.99,
        description:"Palette de Sombras",
        category:"Perfumaria"
      },
]


const Paletas = () => {
    return ( 
        <>
        <Menu/>
        <img className="logo-camila" src="/logo-glam-camila.jpg" alt="imagem"></img>
        <div className="text-glam">
        <h2>
            PALETAS DE MAQUIAGEM
        </h2>
        </div>

        <p>
        Quem não ama uma paleta de maquiagem completa para produzir makes incríveis?! 
        Com as Paletas Eudora você conquista a mulher que gosta de estar sempre
         produzida e preparada para colocar o seu protagonismo em primeiro lugar. 
        Compre online e brilhe muito! 
        </p>
       
       <div className="text-glam">
        <h2> Todas as Paletas Eudora 💜
        De sombras e multifuncional para qualquer ocasião!</h2>
       </div>




        <div id="produtos-container">
          {
            ProdutosMaquiagem.map((produto)=>(
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
 
export default Paletas;