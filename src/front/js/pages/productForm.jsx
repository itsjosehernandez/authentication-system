import React from "react";



export const ProductForm = () => {

	return (

		<div className="container">


			<div class="card m-5">
				<div class="card-body m-5">
					<h2 className="mb-5 mt-4">Empecemos completando algunos datos....</h2>

					<div class="mb-3">
						<label for="formGroupExampleInput" class="form-label">Titulo</label>
						<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Este será el título. Ten en cuenta que cuando tengas ventas, no podrás editarlo." />
					</div>

					

					<div class=" mb-3">
						<label for="formGroupExampleInput" class="form-label">Descripcion</label>

						<textarea class="form-control" aria-label="With textarea"></textarea>
					</div>

					<label for="formGroupExampleInput" class="form-label">Precio</label>

					<div class="input-group mb-3">

						<span class="input-group-text">$</span>
						<input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
					</div>

					<div class="mb-3">
						<label for="formFileMultiple" class="form-label">Agregar una foto del articulo</label>
						<input class="form-control" type="file" id="formFileMultiple" multiple />
					</div>
					<button type="button" class="btn btn-primary">Cargar..</button>

				</div>

			</div>

		</div>





	);


};