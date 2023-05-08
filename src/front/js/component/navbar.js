import React from "react";
import { Link } from "react-router-dom";
import logoNavBar from "../../img/OP2.png";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  bg-dark" >
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <img src={logoNavBar} alt="Bootstrap" width="55" height="55"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse d-flex " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Boton1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Boton2</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Boton3</a>
                        </li>


                    </ul>

                    <form className="d-flex justify-content-center" role="search">
                        <input className="form-control me-1" type="search" placeholder="Buscar..." aria-label="Search" />
                        <button className="btn btn-outline-light me-3 " type="submit">Buscar</button>
                    </form>
                    <span className="navbar-text ">



                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#">Deals</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="#">Login <i className="fa-regular fa-user"></i></a>
                            </li>





                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" >   </a>
                            </li>

                        </ul>


                    </span >


                    <button className="btn btn-primary gap-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars"></i></button>



                </div>
            </div>





        </nav>


    );
};




