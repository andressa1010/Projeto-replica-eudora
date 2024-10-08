import React from "react";
import Menu from "../components/menu";

const maquiagemRosto=[
    {
        id:1,
        name:"Soul",
        image:"/baseeudora.png",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte , para dar aquela realçada na sua beleza",
        category:"Maquiagens",
      },
      {
        id:2,
        name:"Niina Secrets",
        image:"/baseNiinaSecrests.png",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte, para dar aquela realçada na sua beleza",
        category:"Maquiagens",
      },
      {
        id:3,
        name:"Glam",
        image:"/baseGlamSkin.png",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte, para dar aquela realçada na sua beleza",
        category:"Maquiagens",
      },
      {
        id:4,
        name:"Soul",
        image:"/baseeudora.png",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte, para dar aquela realçada na sua beleza",
        category:"Maquiagens",
      },
      {
        id:5,
        name:"Niina Secrets",
        image:"/baseNiinaCores.png",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte,para dar aquela realçada na sua beleza ,",
        category:"Maquiagens",
      },
      {
        id:6,
        name:"Soul",
        image:"/baseeudora.png",
        avaliacao:"/estrelinhas-avaliacao.png",
        price:59.99,
        description:"Base liquida ultra matte, para dar aquela realçada na sua beleza",
        category:"Maquiagens",
      },
    
]


const Rosto = () => {
    return ( 
        <>
        <Menu/>
        <img className="logo-rosto" src="/makesRosto-logo.jpg" alt="imagem"></img>
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
                 <button>comprar agora</button>
                </div>
            ))
          }
        </div>

        <div className="container-cards-produtos">
            <div className="content-cards">
                <img className="card-base"
                  src="/card-base.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="/card-corretivo.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="/card-Po-facial.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="/card-iiluminador.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="/card-Blush.webp" alt="imagem"></img>
            </div>
            <div className="content-cards">
                <img className="card-base"
                  src="/card-Primer.webp" alt="imagem"></img>
            </div>
        </div>


        </>
     );
}
 
export default Rosto;