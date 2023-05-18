import React from "react";
import "../../styles/home.css";
import nintendo from"../../img/nintendo-logo.png"
import pc from"../../img/pc.png"





export const Inicio = () => {

    
	return (

<div className="d-flex flex-column">

<div className="jumbotron">

    <div className="container-fluid px-0 main ">
        <div className="container cards ">
          <div className="row mt">
            <div className="col col-12 col-lg-3">
              <div className="card " >
                <img src="https://as01.epimg.net/meristation/imagenes/2021/07/15/noticias/1626364677_049220_1626364866_noticia_normal.jpg" className=" img-cards card-img-top " alt="..."/>

              </div>
            </div>     
            <div className="col col-12 col-lg-3">
            <div className="card " >
                <img src="https://assets.xboxservices.com/assets/4a/1a/4a1a5edf-de58-4313-80f2-fec439936ecb.jpg?n=Power-On_Content-Placement-0_1_788x444.jpg" className="  img-cards card-img-top" alt="..."/>

              </div>
              </div>
              <div className="col col-12 col-lg-3">
            <div className="card " >
                <img src= {nintendo}  className="card-img-top  img-cards " alt="..."/>

              </div>
              </div>  
              <div className="col col-12 col-lg-3">
            <div className="card " >
                <img src={pc} className="card-img-top img-cards " alt="..."/>

              </div>
              </div>   
          </div>
          </div>
        </div>

        </div>


<div className="mtdescription ">
<div><h2 className="text-center">Que es TradeaTodo?</h2> </div>


<hr></hr>




<div className="container text-center mt-5 mb-5">

  <div className="row align-items-start">
    <div className="col ">
    <h5  className="mb-3"> <i className="fa-solid fa-users-between-lines icon"></i>Trade Finder</h5>
  TradeaTodo es un buscador de comercio. Brindamos la forma más segura y rápida de encontrar los intercambios que desea con otros grandes jugadores. ¡Tenemos millones de jugadores en juegos como Roblox, Animal Crossing, Diablo y más!
    </div>
    <div className="col ">
    <h5 className="mb-3"><i className="fa-solid fa-handshake-simple icon"></i>¿Como funciona?</h5>
    <p>Primero, elige un juego en nuestra página de inicio. ¿Buscas vender algo? Ponga una lista y lo que está buscando a cambio. ¿Tratando de encontrar algo? Encuentre lo que está buscando y haga una oferta en el listado. Encuéntrense en el juego para intercambiar. Es fácil.</p>
    </div>
    <div className="col ">
    <h5  className="mb-3"><i className="fa-solid fa-truck-ramp-box icon"></i>NO es un mercado negro</h5>
    ¿Cuál es la diferencia entre Traderie y los sitios del mercado negro? NO permitimos ningún tipo de transacciones con dinero real en nuestro sitio. La venta de elementos del juego por dinero real es ilegal. Su seguridad es nuestra prioridad, solo intercambie artículos del juego por otros artículos del juego.
        </div>
  </div>
</div>
</div>
    
    </div>
    
















	);


};

