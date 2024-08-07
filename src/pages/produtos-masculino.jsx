import React from "react";
import Menu from "../components/menu";

const linhaMasculino=[
    {
        id: 1,
        name:"Perfume",
        image:"/perfume01.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 2,
        name:"Perfume",
        image:"/perfume02.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 3,
        name:"Perfume",
        image:"/perfume03.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 4,
        name:"Perfume",
        image:"/perfume04.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 5,
        name:"Perfume",
        image:"/perfume05.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 5,
        name:"Perfume",
        image:"/perfume06.webp",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    
    
    
    

]



const ProdutosMasculino = () => {
    return ( 
        <>
        <Menu/>
        <img className="logo-masculino"
         src="/banner-produtosmasculinos-eud.webp" 
         alt="imagem"></img>
        <h2>
        PRODUTOS MASCULINOS EUDORA
        </h2>
        <p>
        Um espaço especialmente reservado para você que busca produtos e cosméticos
         masculinos para completar sua rotina de beleza e tratamento. 
         Conheça todas as nossas linhas!
        Se você busca algum produto Eudora para dar de presente,
         vá até o fim da página e confira um passo a passo simples 
         e perfeito para surpreender aquela pessoa especial!
        </p>


         <div className="container-cards-masculino">
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-impression.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-carbon.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-club6.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-eudorah.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-pulse.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-forlife.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-rummo.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-volpe.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-intention.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="/perfum-masc-club6.webp" alt="imagem"></img>
            </div>

         </div>




         <div id="produtos-container">
            {
                linhaMasculino.map((produto)=>(
                    <div key={produto.id} className="produto">
                        <img src={produto.image} alt={produto.name}></img>
                        <span> {produto.description} </span>
                        <img className="avaliacoes"
                        src={produto.avaliacao} alt={produto.name}></img>
                        <p> {produto.price}   </p>
                        <button>comprar agora</button>
                        </div>
                ))
            }
         </div>



        </>
     );
}
 
export default ProdutosMasculino;