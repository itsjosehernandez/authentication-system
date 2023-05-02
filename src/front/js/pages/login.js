import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
    const { store, actions } = useContext(Context);

    return (




        <div class="card m-5 text-bg-light">
            <div class="card-body py-5">
                <h5 class="card-title text-center">Iniciar Sesion</h5>
                <p class="card-text">




                    <div className="container d-flex justify-content-center mt-5 ">
                        <form>
                            <div class="mb-3 ">
                                <label for=" validationCustom01" class="form-label">Correo Electronico:</label>
                                <input type="email" class="form-control" id= "validationCustom01" aria-describedby="emailHelp" required/>
								<div class="valid-feedback">Looks good! </div>
                                <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1 validationCustom01" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id= "validationCustom01" required/>
                            </div>

                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Mantener mi sesion iniciada</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Ingresar</button>
                        </form>
                    </div>
                </p>

            </div>
        </div>


    );
};

