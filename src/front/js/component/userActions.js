import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/offcanvas.css";

export const UserActions = () => {

	const { actions, store } = useContext(Context)
	const navigate = useNavigate()
	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
			<div className="offcanvas-header">

				<h5 className="offcanvas-title text-center" id="offcanvasRightLabel">Perfil</h5>
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>


			</div>
			<div className="offcanvas-body">
				<div className="d-flex justify-content-center ">
					<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className="img-thumbnail rounded-circle userimagen " alt="..." />
				</div>
				<h4 className="text-center">Name</h4>
				<h6 className="text-center">{store.user}</h6>

				<ul className="navbar-nav flex-grow-1 pe-3 text-start py-3">

					<div className="container text-center">
						<div className="row">
							<div className="col">
								<li className="nav-item">
									<Link to={"/pages/home"} className="nav-link active " aria-current="page" >Tienda <i className="fa-solid fa-store"></i></Link>
								</li>
							</div>
							<div className="col">
								<li className="nav-item ">
									<button className="btn btn-success btn-sm" data-bs-dismiss="offcanvas" onClick={() => { navigate("/productform") }} aria-expanded="page">
										Vender<i className="fa-solid fa-up"></i>
									</button>
								</li>
							</div>
							<div className="col">
								<li className="nav-item">

									<button type="button" className="btn btn-danger btn-sm " onClick={() => { actions.handleLogout() ? navigate("/") : "" }} >Logout<i className="fa-solid fa-right-from-bracket"></i></button>

								</li>
							</div>
						</div>
					</div>
                        <hr></hr>
                        <div><h6>Notificaciones</h6></div>
					<div className="card mb-3">
						<img src="https://i.blogs.es/352301/switch/1366_2000.webp" className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">Para concretar tu compra debes realizar el pago.</p>
							<button className="btn btn-success btn-sm"> Reportar pago
							</button>
						</div>
					</div>

					<div className="card mb-3">
						<img src="https://i.blogs.es/885597/ps5apfinal/1366_2000.jpg" className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">Para concretar tu compra debes realizar el pago.</p>
							<button className="btn btn-success btn-sm"> Reportar pago
							</button>
						</div>
					</div>
				</ul>
				{store.transacciones.map((transaccion)=>{
					return (
						<div key={transaccion.id}>
							{transaccion.transaccion_status}
						</div>
					)
				})}
				</div>

		</div>
	)
}
