import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Inicio } from "./pages/paginainicio.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./pages/home";
import { ProductForm } from "./pages/productForm.jsx";
import { Register } from "./pages/register";
import { ProductDetails } from "./pages/ProductDetails.jsx";
import { ProductSearch } from "./pages/ProductSearch.jsx";
import { Prueba} from "./pages/prueba.jsx";
import { ToastContainer } from "react-toastify";
import { About } from "./pages/about.jsx";



//create your first component
const Layout = () => {


    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <ToastContainer />
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Inicio />} path="/" />
                        <Route element={<ProductForm/>} path="/productform" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Home/>} path="/pages/home"/>
                        <Route element={<Register/>} path="/register"/>
                        <Route element={<ProductDetails/>} path="/productdetails/:id"/>
                        <Route element={<ProductSearch/>} path="/productsearch"/>
                        <Route element={<Prueba/>} path="/prueba"/>
                        <Route element={<About/>} path="/about"/>



                    </Routes>
                    
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );

};

export default injectContext(Layout);
