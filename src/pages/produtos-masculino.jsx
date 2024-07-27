import React from "react";

const linhaMasculino=[
    {
        id: 1,
        name:"Perfume",
        image:"./public/perfume01.webp",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 2,
        name:"Perfume",
        image:"./public/perfume02.webp",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 3,
        name:"Perfume",
        image:"./public/perfume03.webp",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 4,
        name:"Perfume",
        image:"./public/perfume04.webp",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 5,
        name:"Perfume",
        image:"./public/perfume05.webp",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    {
        id: 5,
        name:"Perfume",
        image:"./public/perfume06.webp",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:199.99,
        description:"Eudora Bad Intention Desodorante Colônia",
        categoria:"masculino"
    },
    
    
    
    

]



const ProdutosMasculino = () => {
    return ( 
        <>
        <img className="logo-masculino"
         src="./public/banner-produtosmasculinos-eud.webp" 
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
                <img className="img-card" src="./public/perfum-masc-impression.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-carbon.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-club6.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-eudorah.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-pulse.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-forlife.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-rummo.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-volpe.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-intention.webp" alt="imagem"></img>
            </div>
            <div className="produtos-cards">
                <img className="img-card" src="./public/perfum-masc-club6.webp" alt="imagem"></img>
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