import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Register = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container py-5">


            <div class="card d-flex justify-content-center ">
                <div class="card-body">

                    <ul class="nav nav-tabs  d-flex justify-content-center" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Iniciar Sesion</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Registrate</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="myTabContent">





                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                            <div class="card m-5 text-bg-light">
                                <div class="card-body py-5">
                                    <h5 class="card-title text-center">Iniciar Sesion</h5>
                                    <p class="card-text">




                                        <div className="container d-flex justify-content-center mt-5 ">
                                            <form>
                                                <div class="mb-3 ">
                                                    <label for=" validationCustom01" class="form-label">Correo Electronico:</label>
                                                    <input type="email" class="form-control" id="validationCustom01" aria-describedby="emailHelp" required />
                                                    <div class="valid-feedback">Looks good! </div>
                                                    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1 validationCustom01" class="form-label">Contraseña</label>
                                                    <input type="password" class="form-control" id="validationCustom01" required />
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






                        </div>






                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

                            <div class="card m-5 text-bg-light ">

                                <div class="card-body py-5 ">
                                    <h5 class="card-title text-center">Registrate!</h5>
                                    <p class="card-text">




                                        <div className="container d-flex justify-content-center mt-5 ">
                                            <form>
                                                <div class="mb-3 ">
                                                    <label for=" validationCustom01" class="form-label">Correo electronico</label>
                                                    <input type="email" class="form-control" id="validationCustom01" aria-describedby="emailHelp" required />
                                                    <div class="valid-feedback">Looks good! </div>
                                                    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1 validationCustom01" class="form-label">Contraseña</label>
                                                    <input type="password" class="form-control" id="validationCustom01" required />
                                                </div>

                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1 validationCustom01" class="form-label">Correo Paypal</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" required />
                                                </div>
                                                <div class="mb-3 form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                    </p>

                                </div>







                            </div>

                        </div>

                    </div>
                </div>




            </div>
        </div>



);
};

