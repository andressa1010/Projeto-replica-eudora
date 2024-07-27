import React from "react";


const produtosSkinCare=[
  {
    id:1, 
    name:"Niina Skin",
    image:"./public/skin01.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:52.99,
    description:"Gel de Limpeza Eudora Skin,Chegou Niina Skin, a linha perfeita para todos os tipos de pele",
    category:"batom"
},
{
  id:2, 
  name:"Niina Skin",
  image:"./public/Combo-Niina-Skin-Rotina-de-Cuidados-Completa_6-itens_.webp",
  avaliacao:"./public/estrelinhas-avaliacao.png",
  price:52.99,
  description:"Gel de Limpeza Eudora Skin,Chegou Niina Skin, a linha perfeita para todos os tipos de pele",
  category:"batom"
},
{
  id:3, 
  name:"Niina Skin",
  image:"./public/Combo-Niina-Skin-Rotina-de-Cuidados-Completa_6-itens_conceito.webp",
  avaliacao:"./public/estrelinhas-avaliacao.png",
  price:52.99,
  description:"Gel de Limpeza Eudora Skin,Chegou Niina Skin, a linha perfeita para todos os tipos de pele",
  category:"batom"
},
{
  id:4, 
  name:"Niina Skin",
  image:"./public/skin04.webp",
  avaliacao:"./public/estrelinhas-avaliacao.png",
  price:52.99,
  description:"Gel de Limpeza Eudora Skin,Chegou Niina Skin, a linha perfeita para todos os tipos de pele",
  category:"batom"
},
{
  id:5, 
  name:"Niina Skin",
  image:"./public/Combo-Niina-Skin_Serum_Creme-Overnight_.webp",
  avaliacao:"./public/estrelinhas-avaliacao.png",
  price:52.99,
  description:"Gel de Limpeza Eudora Skin,Chegou Niina Skin, a linha perfeita para todos os tipos de pele",
  category:"batom"
},
]




const Skincare = () => {
    return (
        <>
          <div className="container-skin">
          <img className="logo-skincare" src="./public/banner-skincare-desk.webp" alt="logo"></img>
          </div>

         <div className="text-glam">
         <h2> SKINCARE EUDORA: CUIDADOS PARA PELE</h2>
         </div>
        <span>
        Cuidar da pele do rosto é super importante e deve fazer parte
         do nosso dia a dia. Pensando nesse cuidado, Eudora desenvolveu 
         a linha Neo, que dispõe de diversos produtos de skincare voltados 
         a todas as necessidades e todos os tipos de pele. 
         Dentre os itens estão os de limpeza facial, esfoliação, 
         antiacne, hidratação, proteção solar e muito mais.
          Ah, e você ainda pode contar com a linha completa de 
          skincare de Niina Secrets, que contém gel de limpeza, 
          esfoliante facial, cleasing oil e mais!
        </span>


        <div className="container-cuidados">
          <div className="content-cuidados">
            <img className="cuidados"
             src="./public/card-rugas.webp" alt="imagem"></img>
          </div>
          <div className="content-cuidados">
            <img className="cuidados"
             src="./public/card-pele-hidratacao.webp" alt="imagem"></img>
          </div>
          <div className="content-cuidados">
            <img className="cuidados"
             src="./public/card-pele-limpeza.webp" alt="imagem"></img>
          </div>
          <div className="content-cuidados">
            <img className="cuidados"
             src="./public/card-pele-oleosidade.webp" alt="imagem"></img>
          </div>
          <div className="content-cuidados">
            <img className="cuidados"
             src="./public/card-pele-olheiras.webp" alt="imagem"></img>
          </div>
          <div className="content-cuidados">
            <img className="cuidados"
             src="./public/card-pele-protecao-solar.webp" alt="imagem"></img>
          </div>
        </div>

        <div id="produtos-container">
            {
                produtosSkinCare.map((produto)=>(
                    <div key={produto.id} className="produto">
                        <img src={produto.image} alt={produto.name}></img>
                        <h2>{produto.name}</h2>
                        <span> {produto.description} </span>
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
 
export default Skincare;