import React from "react";

const maquiagemRosto=[
    {
        id:1,
        name:"Soul",
        image:"./public/baseeudora.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte",
        category:"Maquiagens",
      },
      {
        id:2,
        name:"Niina Secrets",
        image:"./public/baseNiinaSecrests.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte",
        category:"Maquiagens",
      },
      {
        id:3,
        name:"Glam",
        image:"./public/baseGlamSkin.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte",
        category:"Maquiagens",
      },
      {
        id:4,
        name:"Soul",
        image:"./public/baseeudora.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte",
        category:"Maquiagens",
      },
      {
        id:5,
        name:"Niina Secrets",
        image:"./public/baseNiinaCores.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte",
        category:"Maquiagens",
      },
      {
        id:5,
        name:"GLAM",
        image:"./public/basePo.webp",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte",
        category:"Maquiagens",
      },
]


const Rosto = () => {
    return ( 
        <>
        <img className="logo-rosto" src="./public/makesRosto-logo.jpg" alt="imagem"></img>
        <h2>
        MAQUIAGEM PARA O ROSTO
        </h2>
        <span>
        Eudora conta com muitos produtos de maquiagem para o rosto. Base, pó, primer, blush e iluminador são algumas das opções para uma preparação de pele incrível. As bases possuem uma gama extensa de cores, para todos os tons de pele. Além disso, são bases de diversos tipos e tecnologias. As opções de blush também são para todos os agrados, desde tons mais frios a tons mais quentes. Confira a lista completa de produtos de maquiagem para o rosto e escolha os seus favoritos!
        </span>

        <div className="text-glam">
            <h2>
            MAQUIAGEM PARA ROSTO EM PROMOÇÃO
            </h2>
        </div>

        <div id="produtos-container">
          {
            maquiagemRosto.map((produto)=>(
              <div key={produto.id} className="produto">
                 <img src={produto.image} alt={produto.name}></img>
                 <p> {produto.name}</p>
                 <span> {produto.description}  </span>
                 <img className="avaliacoes"
                 src={produto.avaliacao} alt={produto.name}></img>
                 <p> {produto.price}  </p>
                 <button>comprar</button>
                </div>
            ))
          }
        </div>

        <div className="container-cards-produtos">
            <div className="content-cards">
                <img className="card-base"
                  src="./public/card-base.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="./public/card-corretivo.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="./public/card-Po-facial.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="./public/card-iiluminador.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="./public/card-blush.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="./public/card-primer.webp" alt="imagem"></img>
            </div>
        </div>


        </>
     );
}
 
export default Rosto;