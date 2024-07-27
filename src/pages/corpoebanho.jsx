import React from "react";


const produtosBanho=[
 {
    id: 1,
    name:"INSTANCE",
    image:"/sabonete1.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Sabonete Vegetal em Barra Perfumado Cereja e Amêndoas 4x80g",
    category:"Maquiagens",
 }, 
 {
    id: 2,
    name:"INSTANCE",
    image:"/sabonete2.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Sabonete Vegetal em Barra Perfumado Maracujá 4x80g",
    category:"Maquiagens",
 }, 
 {
    id: 3,
    name:"INSTANCE",
    image:"/sabonete3.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Sabonete Vegetal em Barra Perfumado Algodão e Jasmim 4x80g",
    category:"Maquiagens",
 }, 
 {
    id: 4,
    name:"INSTANCE",
    image:"/sabonete4.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Sabonete Vegetal em Barra Perfumado Cereja e Amêndoas 4x80g",
    category:"Maquiagens",
 }, 
 {
    id: 5,
    name:"INSTANCE",
    image:"/sabonete6.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Sabonete Líquido Íntimo Frutas Vermelhas,  higiene e cuidado para a sua região íntima. ",
    category:"Maquiagens",
 }, 
 {
    id: 7,
    name:"INSTANCE",
    image:"/sabonete7.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 }, 
 {
    id: 8,
    name:"INSTANCE",
    image:"/hidratante1.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 }, 
 {
    id: 9,
    name:"INSTANCE",
    image:"/hidratante2.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 10,
    name:"INSTANCE",
    image:"/hidratante3.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 11,
    name:"INSTANCE",
    image:"/hidratante4.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 12,
    name:"INSTANCE",
    image:"/hidratante5.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 13,
    name:"INSTANCE",
    image:"/hidratante6.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 14,
    name:"INSTANCE",
    image:"/hidratante7.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 15,
    name:"INSTANCE",
    image:"/hidratante8.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 16,
    name:"INSTANCE",
    image:"/hidratante2.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 17,
    name:"INSTANCE",
    image:"/hidratante3.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 18,
    name:"INSTANCE",
    image:"/hidratante2.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
 {
    id: 19,
    name:"INSTANCE",
    image:"/hidratante7.webp",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Creme Hidratante Desodorante Corporal Karité 400ml",
    category:"Maquiagens",
 },
    
]



const CorpoeBanho = () => {
    return ( 
        <>
        <div className="container-banho">
          <div className="content-banho">
           <img className="logo-banho"
           src="/banner-abertura-lp-corpo-e-banho.jpg"
           alt="imagem"></img>
           </div>
        </div>
        <h2>
            HIDRATANTES, SABONETES, PROTETOR SOLAR | CORPO & BANHO EUDORA
            </h2>
            <p>
            Hidratantes, sabonetes, gel, óleo corporal, esfoliantes corporais 
            e protetor solar são alguns dos produtos de cuidados para corpo
             e banho de Eudora. Compre online!
            </p>

            <div id="produtos-container">
                {
                    produtosBanho.map((produto)=>(
                        <div key={produto.id} className="produto">
                        <img src={produto.image} alt={produto.name}></img>
                        <p>{produto.name}</p>
                        <span> {produto.description} </span>
                        <img className="avaliacoes"
                        src={produto.avaliacao} alt={produto.name}></img>
                        <p>{produto.price}  </p>
                        <button>comprar agora</button>
                        </div>
                    ))
                }
            </div>

            <p>O que você está precisando hoje?</p>

            <div className="container-cuidados">
                <div className="content-banho">
                    <img className="cuidados"
                      src="/corpo-e-banho-01-sabonete.webp" alt="imagem"></img>
                </div>
                <div className="content-banho">
                    <img className="cuidados"
                      src="/corpo-e-banho-02-esfoliante.webp" alt="imagem"></img>
                </div>
                <div className="content-banho">
                    <img className="cuidados"
                      src="/corpo-e-banho-03-hidratante.webp" alt="imagem"></img>
                </div>
                <div className="content-banho">
                    <img className="cuidados"
                      src="/corpo-e-banho-04-aleo-corporal.webp" alt="imagem"></img>
                </div>
                <div className="content-banho">
                    <img className="cuidados"
                      src="/corpo-e-banho-05-desodorante.webp" alt="imagem"></img>
                </div>
            </div>

        </>
     );
}
 
export default CorpoeBanho;