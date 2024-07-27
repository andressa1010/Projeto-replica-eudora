import React from "react";

const produtosCabelos=[
  {
    id: 1,
    name: "Siáge",
    image:"/img-liso-cauterização.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo 250ml",
    categoria: "cabelos",
  },
  {
    id: 2,
    name: "Siáge",
    image:"/img-shampoo-e-condicionador.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo 250ml",
    categoria: "cabelos",
  },
  {
    id: 3,
    name: "Siáge",
    image:"/img-combo_eudora_siage_cachos_shampoo_condicionador_mascara.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo 250ml",
    categoria: "cabelos",
  },
  {
    id: 4,
    name: "Siáge",
    image:"/img-combo-siage-shampoo-condicionador-mascara.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo 250ml",
    categoria: "cabelos",
  },
  {
    id: 5,
    name: "Siáge",
    image:"/img-combo-siage-shampoo-condicionador-mascara.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo 250ml",
    categoria: "cabelos",
  },
  {
    id: 6,
    name: "Siáge",
    image:"/img-shampoo-e-condicionador.png",
    avaliacao:"/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo 250ml",
    categoria: "cabelos",
  },
]

const Cabelos = () => {

   
    return ( 
        <>

        <div className="desainer-logo">
         <img className="logo-cabelos" src="/logo-cabelos.webp" alt="imagem-logo"></img>
         </div>
         <h2> PRODUTOS EUDORA PARA CABELOS | SHAMPOO, CONDICIONADOR E KITS</h2>
          <p>
          Com a união perfeita entre tecnologia e natureza, Eudora Cabelo conta com linhas
           completas e extremamente eficazes para garantir tratamento aos seus cabelos 
           com performance profissional. Cada shampoo e condicionador desenvolvido,
            além de atenderem a todos os tipos de cabelos, carregam em suas fórmulas 
            tecnologias exclusivas da marca, que proporcionam resultados desde a primeira 
            aplicação.
          Com objetivo de estimular a prática do cronograma capilar, 
          Eudora oferece ainda, por meio de Siàge e Instance, máscaras para cabelo, 
          leave-in, creme para pentear e outros produtos para um tratamento capilar completo.
          </p>
         
          <div className="cards-container">
            <div className="card-content">
              <img className="card" src="/card-siage-pro-cronology.webp" alt="imagem"></img>
            </div>
            <div className="card-content">
              <img className="card" src="/card-2-siage-pro-cronology.webp" alt="imagem"></img>
            </div>
            <div className="card-content">
              <img className="card" src="/card-3siage-pro-cronology.webp" alt="imagem"></img>
            </div>
            <div className="card-content">
              <img className="card" src="/card-4-siage-pro-cronology.webp" alt="imagem"></img>
            </div>
            <div className="card-content">
              <img className="card" src="/card-5-siage-pro-cronology.webp" alt="imagem"></img>
            </div>
            <div className="card-content">
              <img className="card" src="/card-6-siage-pro-cronology.webp" alt="imagem"></img>
            </div>
            <div className="card-content">
              <img className="card" src="/card-7-siage-pro-cronology.webp" alt="imagem"></img>
            </div>
          </div>


         <div id="produtos-container">
            {
              produtosCabelos.map((produto)=>(
                <div key={produto.id} className="produto">
                   <img src={produto.image} alt={produto.name}></img>
                   <p>{produto.name}</p>
                    <span> {produto.description} </span>
                   <img className="avaliacoes"
                   src={produto.avaliacao} alt={produto.name}></img>
                   <p> {produto.price}   </p>
                   <button>comprar agora</button>
                  </div>
              ))
            }
          </div>

          <div className="img-logo-desainer">
            <img className="logo" src="/header-guia-da-beleza-lp-siage-desk.webp" alt="imagem"></img>
          </div>
          <div className="cards-container">
            <div className="card-content">
              <img className="card-img"
              src="/card-cabelos-eud-shampoo.webp"></img>
            </div>
            <div className="card-content">
              <img className="card-img"
              src="/card-cabelos-eud-coindicionador.webp"></img>
            </div>
            <div className="card-content">
              <img className="card-img"
               src="/card-cabelos-eud-mascaradetratamento.webp"></img>
            </div>
            <div className="card-content">
              <img className="card-img"
              src="/card-cabelos-eud-leave-in.webp"></img>
            </div>
            <div className="card-content">
              <img className="card-img"
              src="/card-cabelos-eud-finalizador.webp"></img>
            </div>
            <div className="card-content">
              <img className="card-img"
              src="/card-cabelos-eud-modelador.webp"></img>
            </div>
          </div>
 
         <h4>
         Conheça as linhas de tratamento capilar Eudora
         </h4>
         <span>Produtos novos feitos para as necessidades do seu cabelo</span>
          
          <div className="cards-container">
            <div className="content-card">
              <img className="card-log" src="/card-cabelos-eud-siage.webp"></img>
            </div>
            <div className="content-card">
              <img className="card-log" src="/card-cabelos-eud-instance.webp"></img>
            </div>
            <div className="content-card">
              <img className="card-log" src="/card-cabelos-eud-siage-men.webp"></img>
            </div>
            <div className="content-card">
              <img className="card-log" src="/card-cabelos-eud-kids.webp"></img>
            </div>
            <div className="content-card">
              <img className="card-log" src="/cardcabelos-eud-baby.webp"></img>
            </div>
          </div>
          <h2>Descubra o produto especializado para o seu tipo de cabelo!</h2>
           <div className="cards-destaque">
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-secos.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-secos.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-queda.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-danificados.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-frizzados.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-cacheados.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-lisos.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-loirosgrisalhos.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-quimicamentetratados.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-equilibrados.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-coloridos.webp"></img>
             </div>
             <div className="card-content">
             <img className="card-logo" src="/painel-cabelos-caspas.webp"></img>
             </div>
           </div>


        </>
     );
}
 
export default Cabelos;