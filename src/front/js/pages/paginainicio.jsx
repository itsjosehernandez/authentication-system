import React from "react";
import logo from "../../img/ps.jpg";
import "../../styles/home.css";
import jumbo from "../../img/103616.jpg";




export const Inicio = () => {

	return (<>

<div className="jumbotron ">


        <img src={jumbo} className="img-fluid img-size" alt="..."/>
  
  <div className="cards">


  <div className="row row-cols-1 row-cols-md-4  gx-5 ">
  <div className="col gap-4 ">
      <img src={logo} className="card-img-top cardshome" alt="..."/>
      <div className="card-body">

    </div>
  </div>
  <div className="col ">
      <img src={logo} className="card-img-top cardshome" alt="..."/>
      <div className="card-body">

    </div>
  </div>
  <div className="col  gap-4">

      <img src={logo} className="card-img-top cardshome" alt="..."/>
      <div className="card-body">


    </div>
  </div>
  <div className="col gap-4">

      <img src={logo} className="card-img-top cardshome" alt="..."/>
      <div className="card-body">

      </div>
    </div>
  </div>
  </div>

</div>


<div><h2 className="text-center style">Que es TradeaTodo?</h2></div>  

<hr></hr>


<div className="container text-center mt-5 mb-5">
  <div className="row align-items-start">
    <div className="col">
    <h5  className="mb-3"> <i className="fa-solid fa-users-between-lines icon"></i>Trade Finder</h5>
  TradeaTodo es un buscador de comercio. Brindamos la forma más segura y rápida de encontrar los intercambios que desea con otros grandes jugadores. ¡Tenemos millones de jugadores en juegos como Roblox, Animal Crossing, Diablo y más!
    </div>
    <div className="col">
    <h5 className="mb-3"><i className="fa-solid fa-handshake-simple icon"></i>¿Como funciona?</h5>
    <p>Primero, elige un juego en nuestra página de inicio. ¿Buscas vender algo? Ponga una lista y lo que está buscando a cambio. ¿Tratando de encontrar algo? Encuentre lo que está buscando y haga una oferta en el listado. Encuéntrense en el juego para intercambiar. Es fácil.</p>
    </div>
    <div className="col">
    <h5  className="mb-3"><i className="fa-solid fa-truck-ramp-box"></i>NO es un mercado negro</h5>
    ¿Cuál es la diferencia entre Traderie y los sitios del mercado negro? NO permitimos ningún tipo de transacciones con dinero real en nuestro sitio. La venta de elementos del juego por dinero real es ilegal. Su seguridad es nuestra prioridad, solo intercambie artículos del juego por otros artículos del juego.
        </div>
  </div>
</div>
</>


















	);


};

