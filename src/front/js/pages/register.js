import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [userInfo, setUSerInfo] = useState({
        "email": "",
        "password": "",
        "pay": ""
    })

    // definimos una funcion para manejar los cambios en los valores de los inputs y definirlas en el estado
    // [event.target.name] = email, password o pay
    const handleChange = (event) => {
        setUSerInfo({ ...userInfo, [event.target.name]: event.target.value })
    }

    return (
        <div className="card m-5 text-bg-light">
            <div className="card-body py-5 ">


                <ul className="nav nav-pills mb-3 mt-3 d-flex justify-content-center " id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active  " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Iniciar Sesion</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Registrate</button>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">

                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

                        <div className="container">
                            <div className="row">


                                <div className="card m-5 text-bg-light">
                                    <div className="card-body py-5">
                                        <h5 className="card-title text-center">Iniciar Sesion</h5>
                                        <p className="card-text">




                                            <div className="container d-flex justify-content-center mt-5 ">
                                                <form>
                                                    <div className="mb-3 ">
                                                        <label for=" validationCustom01" className="form-label">Correo Electronico:</label>
                                                        <input name="email_login" type="email" className="form-control" id="validationCustom01" aria-describedby="emailHelp" required />
                                                        <div className="valid-feedback">Looks good! </div>
                                                        <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="exampleInputPassword1 validationCustom01" className="form-label">Contraseña</label>
                                                        <input name="password_login" type="password" className="form-control" id="validationCustom01" required />
                                                    </div>

                                                    <div className="mb-3 form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" for="exampleCheck1">Mantener mi sesion iniciada</label>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Ingresar</button>
                                                </form>
                                            </div>
                                        </p>

                                    </div>
                                </div>






                            </div>
                        </div>
                    </div>



                    {/* Inicia el registro */}

                    <div className="tab-pane fade d-flex flex-column align-items-center " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">


                        <div className="card m-5 text-bg-light">
                            <div className="card-body py-5">
                                <h5 className="card-title text-center">Registrate!</h5>
                                <p className="card-text">




                                    <div className="container d-flex justify-content-center mt-5 ">
                                        <form>
                                            <div className="mb-3 ">
                                                <label for=" validationCustom01" className="form-label">Email address</label>
                                                {/*  */}
                                                <input name="email" type="email" value={userInfo.email} onChange={(event) => handleChange(event)} className="form-control" aria-describedby="emailHelp" required />
                                                <div className="valid-feedback">Looks good! </div>
                                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleInputPassword1 validationCustom01" className="form-label">Password</label>
                                                <input name="password" type="password" value={userInfo.password} onChange={(event) => { handleChange(event) }} className="form-control" id="validationCustom01" required />
                                            </div>

                                            <div className="mb-3">
                                                <label for="exampleInputEmail1 validationCustom01" className="form-label">Email Paypal</label>
                                                <input name="pay" type="email" value={userInfo.pay} onChange={(event) => { handleChange(event) }} className="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" required />
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div>
                                            <button id="registro" onClick={(event) => { actions.handleRegister(userInfo.email, userInfo.password, userInfo.pay, event) }} className="btn btn-primary">Submit</button>
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