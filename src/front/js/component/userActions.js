import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/offcanvas.css";
import Productsoffcanvas from  "../component/productoffcanvas.jsx"

export const UserActions = () => {

	const { actions, store } = useContext(Context)
	const navigate = useNavigate()
	useEffect(() => {
		console.log ("por favor")
		actions.getUserProducts()
	},[])
	return (
		<div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
			<div className="offcanvas-header" >

				<h5 className="offcanvas-title text-center" id="offcanvasRightLabel">Perfil</h5>
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>


			</div>
			<div className="offcanvas-body">
				<div className="d-flex justify-content-center ">
					<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className="img-thumbnail rounded-circle userimagen " alt="..." />
				</div>
				{/* <h4 className="text-center">Name</h4> */}
				<h4 className="text-center">{store.user}</h4>



				<ul className="navbar-nav flex-grow-1 pe-3 text-start py-3">

					<div className="container text-center">
						<div className="row">
							{/* <div className="col"> */}
								{/* <li className="nav-item">
									<Link to={"/pages/home"} className="nav-link active " aria-current="page" >Tienda <i className="fa-solid fa-store"></i></Link>
								</li>
							</div> */}
							<div className="col">

								<li className="nav-item ">
									<button className="btn btn-success " data-bs-toggle="offcanvas" onClick={() => { navigate("/productform") }} aria-expanded="page">
										Vender<i className="fa-solid fa-up"></i>
									</button>
								</li>
							</div>
							<div className="col">
								<li className="nav-item">

									<button type="button" className="btn btn-danger" data-bs-toggle="offcanvas" onClick={() => { actions.handleLogout() ? navigate("/") : "" }} >Logout<i className="fa-solid fa-right-from-bracket"></i></button>

								</li>
							</div>
						</div>
					</div></ul>
                        <hr></hr>

						<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li className="nav-item" role="presentation">
						<button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="fa-regular fa-bell"></i></button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Mis productos</button>
					</li>
					
					</ul>
					
						<div className="tab-content" id="pills-tabContent">
					<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">

					<div><h6>Notificaciones</h6></div>
					{store.transacciones.map((transaccion)=>{
					return (
						<div key={transaccion.id}>
							{transaccion.transaccion_status}
						</div>
					)
				})}

					</div>
					<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">					
					<div ><h6>Mis productos</h6></div>
					{store.user_products && store.user_products.map((product) => {
                	return <Productsoffcanvas key={product.id} product={product}></Productsoffcanvas>})}
					</div>
					</div>
					</div>
					
				</div>
	)
}
