import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
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
    function registro(event) {
        event.preventDefault()
        actions.handleRegister(userInfo.email, userInfo.password, userInfo.pay)
    }
    function ingresar(event) {
        event.preventDefault()
        const response = actions.handleLogin(userInfo.email, userInfo.password,)
        if (response) navigate("/pages/home")
    }
    return (

        <div className="container py-5">


            <div className="card d-flex justify-content-center ">
                <div className="card-body">

                    <ul className="nav nav-tabs  d-flex justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Iniciar Sesion</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Registrate</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="myTabContent">





                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">

                            <div className="card m-5 text-bg-light">
                                <div className="card-body py-5">
                                    <h5 className="card-title text-center">Iniciar Sesion</h5>
                                    <p className="card-text">




                                        <div className="container d-flex justify-content-center mt-5 ">
                                            <form>
                                                <div className="mb-3 ">
                                                    <label htmlFor=" validationCustom01" className="form-label">Correo Electronico:</label>
                                                    <input name="email" value={userInfo.email} onChange={(event) => { handleChange(event) }} type="email" className="form-control" id="validationCustom01" aria-describedby="emailHelp" required />
                                                    <div className="valid-feedback">Looks good! </div>
                                                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor
                                                        ="exampleInputPassword1 validationCustom01" className="form-label">Contraseña</label>
                                                    <input name="password" value={userInfo.password} onChange={(event) => { handleChange(event) }} type="password" className="form-control" id="validationCustom01" required />
                                                </div>

                                                <div className="mb-3 form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor
                                                        ="exampleCheck1">Mantener mi sesion iniciada</label>
                                                </div>
                                                <button onClick={(event) => { ingresar(event) }} type="submit" className="btn btn-primary">Ingresar</button>
                                            </form>
                                        </div>
                                    </p>








                                </div>
                            </div>






                        </div>






                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">

                            <div className="card m-5 text-bg-light ">

                                <div className="card-body py-5 ">
                                    <h5 className="card-title text-center">Registrate!</h5>
                                    <p className="card-text">




                                        <div className="container d-flex justify-content-center mt-5 ">
                                            <form>
                                                <div className="mb-3 ">
                                                    <label htmlFor=" validationCustom01" className="form-label">Correo electronico</label>
                                                    <input name="email" value={userInfo.email} onChange={(event) => { handleChange(event) }} type="email" className="form-control" id="validationCustom01" aria-describedby="emailHelp" required />
                                                    <div className="valid-feedback">Looks good! </div>
                                                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputPassword1 validationCustom01" className="form-label">Contraseña</label>
                                                    <input name="password" value={userInfo.password} onChange={(event) => { handleChange(event) }} type="password" className="form-control" id="validationCustom01" required />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1 validationCustom01" className="form-label">Correo Paypal</label>
                                                    <input name="pay" value={userInfo.pay} onChange={(event) => { handleChange(event) }} type="email" className="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" required />
                                                </div>
                                                <div className="mb-3 form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                </div>
                                                <button onClick={(event) => { registro(event) }} type="submit" className="btn btn-primary">Submit</button>
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

