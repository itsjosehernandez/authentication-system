import React from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const ProductForm = () => {

	return (

		<div className="container">


			<div className="card m-5">
				<div className="card-body m-5">
					<h2 className="mb-5 mt-4">Publica tu Producto</h2>

					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">Nombre del Producto</label>
						<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Este será el título. Ten en cuenta que cuando tengas ventas, no podrás editarlo." />
					</div>

					

					<div className=" mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">Estado del producto</label>

						<input className="form-control" aria-label="With textarea"></input>
					</div>

					<label htmlFor="formGroupExampleInput" className="form-label">Precio</label>

					<div className="input-group mb-3">

						<span className="input-group-text">$</span>
						<input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
					</div>

					<div className="mb-3">
						<label htmlFor="formFileMultiple" className="form-label">Agregar una foto del articulo</label>
						<input className="form-control" type="file" id="formFileMultiple" multiple />
					</div>
					<button type="button" className="btn btn-primary">Cargar..</button>

				</div>

			</div>

		</div>





	);


};