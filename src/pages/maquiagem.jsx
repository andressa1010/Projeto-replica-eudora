import React from "react";
import Menu from "../components/menu";

const produtosMaquiagem=[
  {
    id: 1,
    name:"Glam",
    image:"/glam-batom-vinho.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
    category:"Maquiagens",
  },
  {
    id: 2,
    name:"Glam",
    image:"/glam-batom-vinho.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
    category:"Maquiagens",
  },
  {
    id: 3,
    name:"Glam",
    image:"/glam-batom-vinho.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
    category:"Maquiagens",
  },
  {
    id: 4,
    name:"Glam",
    image:"/glam-batom-vinho.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
    category:"Maquiagens",
  },
  {
    id: 5,
    name:"Glam",
    image:"/glam-batom-vinho.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
    category:"Maquiagens",
  },

]


const produtosbaseebatom=[
  {
    id:1,
    name:"Soul",
    image:"/baseeudora.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte",
    category:"Maquiagens",
  },
  {
    id:2,
    name:"Soul",
    image:"/baseNiinaSecrests.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte",
    category:"Maquiagens",
  },
  {
    id:3,
    name:"Soul",
    image:"/baseGlamSkin.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte",
    category:"Maquiagens",
  },
  {
    id:4,
    name:"Soul",
    image:"/baseeudora.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte",
    category:"Maquiagens",
  },
  {
    id:5,
    name:"Soul",
    image:"/MascaraDeCiliosEudora.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte",
    category:"Maquiagens",
  },
]



const Maquiagem = () => {
    return (
        <>
        <Menu/>
        <div className="logo-container-make">
        <img className="logo-maquiagem" 
        src="/bannercategoria-linha-maquiagem (1).webp"
         alt="logo"></img>
        </div> 
        <h2>PRODUTOS DE MAQUIAGEM EUDORA</h2>
        <p>
        Bases, blushes, sombras, pincéis de maquiagem, máscaras para cílios, 
        esponja de maquiagem, corretivo, iluminadores, demaquilantes, 
        CC creams e todas as infinitas opções de produtos de maquiagem 
        Eudora são e sempre serão desenvolvidas para serem impulsionadoras 
        do seu sucesso, 
        seja para uma maquiagem simples ou super completa. Conheça todas as linhas!
        </p>
        <h3>
        CONHEÇA OS NOVOS BATONS GLAM AMULIPS
        </h3>


        <div id="produtos-container">
          {
            produtosMaquiagem.map((produto)=>(
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

        <img className="logo-make" src="/eud-lp-maquiagem-branding-desk.webp" alt="logo"></img>

        <div className="container-makeup">
          <div className="container-make">
            <img className="makeup-log" src="/card-eud-lp-maquiagem-01.webp" alt="logo"></img>
          </div>
          <div className="container-make">
            <img className="makeup-log" src="/card-eud-lp-maquiagem-03.webp" alt="logo"></img>
          </div>
          <div className="container-make">
            <img className="makeup-log" src="/card-eud-lp-maquiagem-02.webp" alt="logo"></img>
          </div>
        </div>

        <p>
        Eudora ajuda você a realçar seu brilho único com nossas makes
        </p>
        <span>Encontre itens de maquiagem com excelente performance e tecnologia!</span>

        <div className="container-cads">
          <div className="content-cads">
            <img className="img-logo-cards" src="/card-lp-maquiagem-eud-rosto.webp" alt="imagem"></img>
          </div>
          <div className="content-cads">
            <img className="img-logo-cards" src="/card-lp-maquiagem-eud-boca.webp" alt="imagem"></img>
          </div>
          <div className="content-cads">
            <img className="img-logo-cards" src="/card-lp-maquiagem-eud-olhos.webp" alt="imagem"></img>
          </div>
          <div className="content-cads">
            <img className="img-logo-cards" src="/card-maquiagem-eud-paletas.webp" alt="imagem"></img>
          </div>
          <div className="content-cads">
            <img className="img-logo-cards" src="/card-lp-maquiagem-eud-pinceis.webp" alt="imagem"></img>
          </div>
          <div className="content-cads">
            <img className="img-logo-cards" src="/card-lp-maquiagem-eud-acessarios.webp" alt="imagem"></img>
          </div>
          <div className="content-cads">
            <img className="img-logo-cards" src="/card-lp-maquiagem-eud-unha.webp" alt="imagem"></img>
          </div>
        </div>

        <div className="container-avaliacao">
          <div className="content-avaliacao">
            <img className="avaliacao-cliente" src="/card-lp-maquiagem-review-01.webp" alt="imagem"></img>
          </div>
          <div className="content-avaliacao">
            <img className="avaliacao-cliente" src="/card-lp-maquiagem-review-02.webp" alt="imagem"></img>
          </div>
          <div className="content-avaliacao">
            <img className="avaliacao-cliente" src="/card-lp-maquiagem-review-03.webp" alt="imagem"></img>
          </div>
        </div>


        <div id="produtos-container">
          {
            produtosbaseebatom.map((produto)=>(
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

        </>
      );
}
 
export default Maquiagem;