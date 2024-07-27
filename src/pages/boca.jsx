import React from "react";

const batomSoul=[
    {
        id:1, 
        name:"SOUL",
        image:"./public/batomVinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:32.99,
        description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7,Soul traz sua cor preferida de volta e um novo conceito totalmente repensado!",
        category:"batom"
    },
    {
        id:2, 
        name:"SOUL",
        image:"./public/batomVermelhoKiss.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:32.99,
        description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7,Soul traz sua cor preferida de volta e um novo conceito totalmente repensado!",
        category:"batom"
    },
    {
        id:3, 
        name:"SOUL",
        image:"./public/batomEudoraMarron.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:32.99,
        description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7,Soul traz sua cor preferida de volta e um novo conceito totalmente repensado!",
        category:"batom"
    },
    {
        id:4, 
        name:"SOUL",
        image:"./public/batomVinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:32.99,
        description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7,Soul traz sua cor preferida de volta e um novo conceito totalmente repensado!",
        category:"batom"
    },
    {
        id:5, 
        name:"SOUL",
        image:"./public/batomVinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:32.99,
        description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7,Soul traz sua cor preferida de volta e um novo conceito totalmente repensado!",
        category:"batom"
    },
]


const batomGlam=[
    {
        id: 1,
        name:"Glam",
        image:"./public/glam-batom-vinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:44.99,
        description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
        category:"Maquiagens",
      },
      {
        id: 2,
        name:"Glam",
        image:"./public/glam-batom-vinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:44.99,
        description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
        category:"Maquiagens",
      },
      {
        id: 3,
        name:"Glam",
        image:"./public/glam-batom-vinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:44.99,
        description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
        category:"Maquiagens",
      },
      {
        id: 4,
        name:"Glam",
        image:"./public/glam-batom-vinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:44.99,
        description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
        category:"Maquiagens",
      },
      {
        id: 5,
        name:"Glam",
        image:"./public/glam-batom-vinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:44.99,
        description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
        category:"Maquiagens",
      },
]

const todosOsProdutos=[
    {
        id:1, 
        name:"SOUL",
        image:"./public/batomVinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:32.99,
        description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7,Soul traz sua cor preferida de volta e um novo conceito totalmente repensado!",
        category:"batom"
    },
    {
        id:2, 
        name:"SOUL",
        image:"./public/batomVermelhoKiss.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:32.99,
        description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7,Soul traz sua cor preferida de volta e um novo conceito totalmente repensado!",
        category:"batom"
    },
      {
        id: 3, 
        name:"GLAM",
        image:"./public/kitsBatomRosaVermelho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:109.99,
        description:"Com o Combo Eudora Glam Microplastia você tem as cores mais lindas com efeito de plástica labial para ressaltar sua beleza e te deixar pronta para qualquer ocasião.",
        category:"Maquiagens"
      },
      {
        id:4,
        name:"Soul",
        image:"./public/kitBatomliquido.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:59.99,
        description:"O batom líquido mais vendido de Eudora de cara nova com 18 horas de duração, sem retoque e agora com ativos de tratamento!",
        category:"Maquiagens",
      },
      {
        id: 5,
        name:"Glam",
        image:"./public/glam-batom-vinho.png",
        avaliacao:"./public/estrelinhas-avaliacao.png",
        price:44.99,
        description:"Batom Matte Marrom, Apresentamos o Eudora Glam Batom Customizável Amulips, seu novo amuleto para uma autoconfiança poderosa.",
        category:"Maquiagens",
      },
]

const Boca = () => {
    return ( 
        <>
        <img className="logo-boca" src="./public/logoCoresBatom.jpg" alt="logo"></img>
        <h2>
        BATOM, BATOM LÍQUIDO E LIP TINT
        </h2>

         <span>
         O batom é um item indispensável na produção de uma make, não é mesmo? Ele dá o toque final e torna a produção ainda mais bonita. E Eudora está nessa com você também, trazendo uma linha de batons incrível de diversos tipos, cores e texturas, para todos os gostos. Batom líquido, batom matte, batom lápis e lip balm são alguns dos produtos que você encontra aqui. Escolha o seu tipo e cor ideal de batom e complete a sua make com muita cor e personalidade!
         </span>

         <div className="text-glam">
            <h2>
            CONHEÇA OS NOVOS BATONS GLAM AMULIPS
            </h2>
         </div>

         <div id="produtos-container">
            {
                batomGlam.map((produto)=>(
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



         <div className="text-glam">
            <h2>
            VOCÊ VAI AMAR NOSSAS SUGESTÕES EXCLUSIVAS PARA VOCÊ:
            </h2>
         </div>


         <div id="produtos-container">
            {
                batomSoul.map((produto)=>(
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


         <p>
         Escolha por acabamento
         </p>
         <span>Da textura aveludada ao brilho intenso</span>

         <div className="boca-acabamento">
          <div className="content-boca">
          <img  className="boca"
          src="./public/batomMatte.png" alt="imagem"></img>
          </div>
          <div className="content-boca">
          <img className="boca"
           src="./public/batomCremosoMarron.png" alt="imagem"></img>
          </div>
          <div className="content-boca">
          <img className="boca"
           src="./public/batomTint.png" alt="imagem"></img>
          </div>
          <div className="content-boca">
          <img className="boca"
          src="./public/batomGloss.png" alt="imagem"></img>
          </div>
          <div className="content-boca">
          <img className="boca"
          src="./public/batomBlam.png" alt="imagem"></img>
          </div>
         </div>

         <div className="text-glam">
            <h2>
              TODOS OS PRODUTOS
            </h2>
         </div>


         
         <div id="produtos-container">
            {
                todosOsProdutos.map((produto)=>(
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
 
export default Boca;