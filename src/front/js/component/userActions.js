import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/offcanvas.css";

export const UserActions = () => {

	const { actions, store } = useContext(Context)
	const navigate = useNavigate()
	return (
		<div className="offcanvas offcanvas-end" data-bs-dismiss="offcanvas" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
			<div className="offcanvas-header">

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
									<button className="btn btn-success " onClick={() => { navigate("/productform") }} aria-expanded="page">
										Vender<i class="fa-solid fa-up"></i>
									</button>
								</li>
							</div>
							<div className="col">
								<li className="nav-item">

									<button type="button" className="btn btn-danger  " onClick={() => { actions.handleLogout() ? navigate("/") : "" }} >Logout<i class="fa-solid fa-right-from-bracket"></i></button>

								</li>
							</div>
						</div>
					</div></ul>
                        <hr></hr>

						<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa-regular fa-bell"></i></button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Mis productos</button>
					</li>
					
					</ul>
					
						<div class="tab-content" id="pills-tabContent">
					<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

					<div><h6>Notificaciones</h6></div>
					<div class="card mb-3 ">
						<img src="https://i.blogs.es/352301/switch/1366_2000.webp" class="card-img-top" alt="..." />
						<div class="card-body">
							<p class="card-text">Para concretar tu compra debes realizar el pago.</p>
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

					</div>
					<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">					
					
					
					<div><h6>Mis productos</h6></div>
					</div>
					</div>
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
