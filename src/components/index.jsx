import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cupom from "./cupom";


const produtosEudora=[
  {
    id: 1,
    name:"Siage",
    image:"./public/img-combo_eudora_siage_cachos_shampoo_condicionador_mascara.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiágeCondicionador 200ml + Shampoo",
    category:"cosmeticos",
  },
  {
    id: 2,
    name: "Siáge",
    image:"./public/img-shampoo-e-condicionador.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo ",
    categoria: "cabelos",
  },
  {
    id: 3,
    name: "Siáge",
    image:"./public/img-combo_eudora_siage_cachos_shampoo_condicionador_mascara.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo",
    categoria: "cabelos",
  },
  {
    id: 4,
    name: "Siáge",
    image:"./public/img-combo-siage-shampoo-condicionador-mascara.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo ",
    categoria: "cabelos",
  },
  {
    id: 5,
    name: "Siáge",
    image:"./public/img-combo-siage-shampoo-condicionador-mascara.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo ",
    categoria: "cabelos",
  },
  {
    id: 6,
    name: "Siáge",
    image:"./public/img-liso-cauterização.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo ",
    categoria: "cabelos",
  },
  {
    id: 7,
    name: "Siáge",
    image:"./public/img-liso-cauterização.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo ",
    categoria: "cabelos",
  },
  {
    id: 8,
    name: "Siáge",
    image:"./public/siage-combo-mascaras.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo Siàge Cronograma Capilar: Nutri Óleos Poderosos 250g + Cica-Therapy 250g + Hidratação Micelar 250g ",
    categoria: "cabelos",
  },
  {
    id: 9,
    name: "Siáge",
    image:"./public/combo-siage-pro-cronology.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo Siàge Cronograma Capilar: Nutri Óleos Poderosos 250g + Cica-Therapy 250g + Hidratação Micelar 250g ",
    categoria: "cabelos",
  },
  {
    id: 10,
    name: "Siáge",
    image:"./public/siage-hair.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo Siàge Cronograma Capilar: Nutri Óleos Poderosos 250g + Cica-Therapy 250g + Hidratação Micelar 250g ",
    categoria: "cabelos",
  },
  {
    id: 11,
    name: "Siáge",
    image:"./public/siage-recupera.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo Siàge Cronograma Capilar: Nutri Óleos Poderosos 250g + Cica-Therapy 250g + Hidratação Micelar 250g ",
    categoria: "cabelos",
  },
  {
    id: 12,
    name: "Siáge",
    image:"./public/img-combo-siage-shampoo-condicionador-mascara.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:149.99,
    description:"Combo SiàgeCondicionador  200ml + Shampoo ",
    categoria: "cabelos",
  },

 

]



const maquiagemEmDestaque=[
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
    name:"Soul",
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
    name:"Soul",
    image:"./public/MascaraDeCiliosEudora.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte",
    category:"Maquiagens",
  },
  {
    id:6,
    name:"Soul",
    image:"./public/baseNiinaCores.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte",
    category:"Maquiagens",
  },
  {
    id:7,
    name:"Soul",
    image:"./public/batomVinho.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7g",
    category:"Maquiagens",
  },
  {
    id:8,
    name:"Soul",
    image:"./public/batomVermelhoKiss.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7g",
    category:"Maquiagens",
  },
  {
    id:9,
    name:"Soul",
    image:"./public/batomLiquidoVinho.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7g",
    category:"Maquiagens",
  },
  {
    id:10,
    name:"Soul",
    image:"./public/batomVinho.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7g",
    category:"Maquiagens",
  },
  {
    id:11,
    name:"Soul",
    image:"./public/batomEudoraMarron.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7g",
    category:"Maquiagens",
  },
  {
    id:12,
    name:"Soul",
    image:"./public/kitBatomliquido.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Batom Mate Vinho Cabernet SOUL Kiss Me 3,7g",
    category:"Maquiagens",
  },
]


const batonsGlam=[
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
    image:"./public/glam-batom-malva-frontal.png",
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
  {
    id: 6,
    name:"Glam",
    image:"./public/glam-batom-vinho.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:44.99,
    description:"Combo Glamourosa e Incomparável: Batom Malva 3,4g + Case",
    category:"Maquiagens",
  },
]


const produtosMaisVendidos=[
  {
    id: 1, 
    name:"GLAM",
    image:"./public/kitsBatomRosaVermelho.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:109.99,
    description:"Combo Batom Eudora Microplastia: Rose Delicado 3,3g + Nude Rosado 3,3g",
    category:"Maquiagens"
  },
  {
    id: 2, 
    name:"GLAM",
    image:"./public/MASC-CIL-SOUL-VOLUMACO.webp",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:109.99,
    description:"Máscara Para Cílios Eudora Volume 8,5g, A máscara de cílios ideal é aquela que realça a beleza do seu olhar",
    category:"Maquiagens"
  },
  {
    id:3,
    name:"Glam",
    image:"./public/baseGlamSkin.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte , A Base Líquida Soul Ultra Matte proporciona uma make à prova de fotos e uma pele sequinha o dia todo!",
    category:"Maquiagens",
  },
  {
    id:4,
    name:"Soul",
    image:"./public/baseeudora.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base liquida ultra matte , A Base Líquida Soul Ultra Matte proporciona uma make à prova de fotos e uma pele sequinha o dia todo!",
    category:"Maquiagens",
  },
  {
    id:5,
    name:"Niina Secrets",
    image:"./public/baseNiinaSecrests.png",
    avaliacao:"./public/estrelinhas-avaliacao.png",
    price:59.99,
    description:"Base Líquida Daily , a Base Líquida Daily Tint Cream Niina Secrets é o tratamento diário 24h na primeira etapa da make que vai deixar a sua pele radiante! ",
    category:"Maquiagens",
  },

]


const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(prevShow => !prevShow);
  };

  const cupomImages = [
    '/public/semana-do-batom-desk.webp',
    '/public/escolha-seu-cupom-2.webp',
    '/public/cupomEudora.webp',
    '/public/siage-logo.webp'
  ];

    return ( 
        <>
             <div className="app">
      <div className="nav">
        <div className="conteudo-interno">
        <h1 className='logo'>
          EUDORA 
        </h1>
    
        <nav className={`nav ${show ? "show" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/produtos">Produtos</Link> </li>
            <li><Link to="/sobre">Sobre</Link> </li>
            <li><Link to="/contato">Contato</Link> </li>
          </ul>
        </nav>
        <div className="nav-icons-container">
            <div className="search-input-container">
                <input type="search" placeholder="procurar"  />
                <FontAwesomeIcon icon={faSearch} />
                </div>
                <button className="shopping-cart">
                    <FontAwesomeIcon icon={faShoppingCart}  />
                    <div className="produtos-disconto">0</div>
                </button>
                <button className="menu-button">
                    <FontAwesomeIcon  icon={faBars} onClick={toggleMenu}   />
                </button>
        </div>
        </div>
      </div>
      </div>
      

      <div className="desainer-logo">
        <Cupom images={cupomImages} 
         />
        </div>     

         <div className="desainer-rotas">
            <div className="container-rotas">
                <Link to="/cabelos"> 
                  <img className="img-rotas"   src="/public/cabelos.webp" alt="imagem"></img>
                </Link>
            </div>
            <div className="container-rotas">
                <Link to="/produtos-masculino"> 
                  <img className="img-rotas"
                  src="/public/produtos-masculino.webp" alt="imagem"></img>
                </Link>
            </div>
            <div className="container-rotas">
                <Link to="/maquiagem"> 
                  <img className="img-rotas"
                  src="/public/maquiagem.webp" alt="imagem"></img>
                </Link>
            </div>
            <div className="container-rotas">
                <Link to="/perfumaria"> 
                  <img 
                    className="img-rotas"
                   src="/public/perfumaria.webp" alt="imagem"></img>
                </Link>
            </div>
            <div className="container-rotas">
                <Link to="/presentes"> 
                  <img className="img-rotas"
                  src="/public/presentes.webp" alt="imagem"></img>
                </Link>
            </div>
            <div className="container-rotas">
                <Link to="/corpoebanho"> 
                  <img  className="img-rotas"
                   src="/public/corpo-e-banho.webp" alt="imagem"></img>
                </Link>
            </div>
            <div className="container-rotas">
                <Link to="/skincare"> 
                  <img  className="img-rotas"
                  src="/public/skincare.webp" alt="imagem"></img>
                </Link>
            </div>
         </div>

         <div className="container-imgs">
          <div className="content-imgs">
            <img className="logo-destaque" 
            src="./public/logo-cupons.webp" alt="imagem"></img>
          </div>
          <div className="content-imgs">
            <img className="logo-destaque"
             src="./public/1-compra.webp" alt="imagem"></img>
          </div>
          <div className="content-imgs">
            <img className="logo-destaque"
            src="./public/promocoes.webp" alt="imagem"></img>
          </div>
          <div className="content-imgs">
            <img className="logo-destaque" 
            src="./public/lancamentos.webp" alt="imagem"></img>
          </div>
         </div>

         <div id="produtos-container">
          {
            produtosEudora.map((produto)=>(
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


       <div className="logo-makups">
       <img className="logo-makup" src="./public/maquiagem-em-destaque.webp" alt="logo"></img>
       </div>

       <div id="produtos-container">
          {
            maquiagemEmDestaque.map((produto)=>(
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

        <div className="text-glam">
        <h2>
        CONHEÇA OS NOVOS BATONS GLAM AMULIPS
        </h2>
        </div>

        <div id="produtos-container">
          {
            batonsGlam.map((produto)=>(
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

        
        <div className="text-glam">
        <h2>
          OS MAIS VENDIDOS
        </h2>
        </div>
 

        <div id="produtos-container">
          {
            produtosMaisVendidos.map((produto)=>(
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

        
        <div className="text-glam">
        <h2>Novas Makes de Glam para um olhar marcante</h2>
        </div>

        <div className="container-rotas-destaque">
          <div className="content-rotas">
            <Link to="/boca">
             <img className="destaque-make"
              src="./public/card-categ-boca.webp" alt="imagem"></img>
            </Link>
          </div>
          <div className="content-rotas">
            <Link to="/rosto">
             <img className="destaque-make"
             src="./public/card-categ-rosto.webp" alt="imagem"></img>
            </Link>
          </div>
          <div className="content-rotas">
            <Link to="/olhos">
             <img className="destaque-make"
             src="./public/card-categ-olhos.webp" alt="imagem"></img>
            </Link>
          </div>
          <div className="content-rotas">
            <Link to="/paletas">
             <img className="destaque-make"
             src="./public/card-categ-paletas.webp" alt="imagem"></img>
            </Link>
          </div>
          <div className="content-rotas">
            <Link to="/unhas">
             <img className="destaque-make"
             src="./public/card-categ-unhas.webp" alt="imagem"></img>
            </Link>
          </div>
        </div>

        </>
     );
}
 
export default Header;