import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/offcanvas.css";

export const UserActions = () => {

	const { actions } = useContext(Context)
	const navigate = useNavigate()
	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
			<div className="offcanvas-header">

				<h5 className="offcanvas-title text-center" id="offcanvasRightLabel">Perfil</h5>
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>


			</div>
			<div className="offcanvas-body">
				<div className="d-flex justify-content-center ">
					<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class="img-thumbnail rounded-circle userimagen " alt="..." />
				</div>
				<h4 className="text-center">Name</h4>
				<h6 className="text-center">user@gmail.com</h6>

				<ul className="navbar-nav flex-grow-1 pe-3 text-start py-3">

					<div class="container text-center">
						<div class="row">
							<div class="col">
								<li className="nav-item">
									<Link to={"/pages/home"} className="nav-link active " aria-current="page" >Tienda <i class="fa-solid fa-store"></i></Link>
								</li>
							</div>
							<div class="col">
								<li className="nav-item ">
									<button className="btn btn-success btn-sm" onClick={() => { navigate("/productform") }} aria-expanded="page">
										Vender<i class="fa-solid fa-up"></i>
									</button>
								</li>
							</div>
							<div class="col">
								<li className="nav-item">

									<button type="button" className="btn btn-danger btn-sm " onClick={() => { actions.handleLogout() ? navigate("/") : "" }} >Logout<i class="fa-solid fa-right-from-bracket"></i></button>

								</li>
							</div>
						</div>
					</div>
                        <hr></hr>
                        <div><h6>Notificaciones</h6></div>
					<div class="card mb-3">
						<img src="https://i.blogs.es/352301/switch/1366_2000.webp" class="card-img-top" alt="..." />
						<div class="card-body">
							<p class="card-text">Para concretar tu compra debes realizar el pago.</p>
							<button className="btn btn-success btn-sm"> Reportar pago
							</button>
						</div>
					</div>

					<div class="card mb-3">
						<img src="https://i.blogs.es/885597/ps5apfinal/1366_2000.jpg" class="card-img-top" alt="..." />
						<div class="card-body">
							<p class="card-text">Para concretar tu compra debes realizar el pago.</p>
							<button className="btn btn-success btn-sm"> Reportar pago
							</button>
						</div>
					</div>



				</ul></div>

		</div>
	)
}
