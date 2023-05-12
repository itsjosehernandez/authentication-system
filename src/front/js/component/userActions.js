import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const UserActions = () => {
    const {actions} = useContext(Context)
    const navigate = useNavigate()
    
    return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">Perfil</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-start">
            <li className="nav-item">
                <Link to = {"/pages/home"} className="nav-link active " aria-current="page" >Tienda</Link>
            </li>
            <li className="nav-item">
                <button className="nav-link" onClick={()=>{actions.handleLogout() ? navigate("/"):""}}>Logout</button>
            </li>
            <li className="nav-item ">
                <button className="nav-link active" onClick={()=>{navigate("/productform")}} data-bs-dismiss="offcanvas" aria-expanded="page">
                    Publica tu producto
                </button>
            </li>
        </ul>
        <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </div>
    )
}