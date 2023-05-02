import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Register = () => {
    const { store, actions } = useContext(Context);

    return (
        <div class="card m-5 text-bg-light">
            <div class="card-body py-5 ">


                <ul class="nav nav-pills mb-3 mt-3 d-flex justify-content-center " id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active  " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Iniciar Sesion</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Registrate</button>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">

                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

                        <div class="container">
                            <div class="row">


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
                        </div>
                    </div>





                    <div class="tab-pane fade d-flex flex-column align-items-center " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">


                        <div class="card m-5 text-bg-light">
                            <div class="card-body py-5">
                                <h5 class="card-title text-center">Registrate!</h5>
                                <p class="card-text">




                                    <div className="container d-flex justify-content-center mt-5 ">
                                        <form>
                                            <div class="mb-3 ">
                                                <label for=" validationCustom01" class="form-label">Email address</label>
                                                <input type="email" class="form-control" id="validationCustom01" aria-describedby="emailHelp" required />
                                                <div class="valid-feedback">Looks good! </div>
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1 validationCustom01" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="validationCustom01" required />
                                            </div>

                                            <div class="mb-3">
                                                <label for="exampleInputEmail1 validationCustom01" class="form-label">Email Paypal</label>
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





    );
};