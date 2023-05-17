import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoNavBar from "../../img/OP2.png";
import { Context } from "../store/appContext";
import { UserActions } from "../component/userActions";
import { Button } from "react-bootstrap";


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [query, setQuery] = useState("")
    const accessToken = store.token;
    const handleChange = (event) => {
        setQuery(event.target.value)
    }
    const handleSearch = async () => {
        const response = await actions.handleSearch(query)
        if (response) {
            navigate("/productsearch")
        }
    }
    return (<>
        <nav className="navbar navbar-expand-lg  bg-dark" >
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <img src={logoNavBar} alt="Bootstrap" width="80" height="60"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse d-flex " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active text-light" aria-current="page" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/pages/home"} className="nav-link text-light" href="#">Tienda</Link>
                        </li>

                        {/* <li className="nav-item">
                            <a className="nav-link text-light" href="#">User</a>
                        </li> */}


                    </ul>


                    <div className="d-flex justify-content-center" role="search">
                        <input className="form-control me-1" type="search" value={query} onChange={handleChange} placeholder="Buscar..." aria-label="Search" />
                        <button className="btn btn-outline-light me-3 " type="button" onClick={() => { handleSearch() }}>Buscar</button>
                    </div>
                    <span className="navbar-text ">



                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                            <li className="nav-item ">
                            <Link to={"/about"} className="nav-link text-light " href="#">About </Link>
                            </li>


                            {!accessToken && <li className="nav-item">
                                <Link to={"/register"} className="nav-link text-light" href="#">Login <i className="fa-regular fa-user"></i></Link>
                            </li>}





                            {/* <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" >   </a>
                            </li> */}

                        </ul>


                    </span >


                    {accessToken && <button className="btn btn-primary gap-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars"></i></button>}



                </div>
            </div>





        </nav>
        <UserActions />
    </>

    );
};




