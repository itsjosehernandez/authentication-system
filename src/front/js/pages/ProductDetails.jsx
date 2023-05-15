import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/galeriaproductos.css";
import "../../styles/productDetails.css";
import onizuka from "../../img/onizuka.jpg";
import logo from "../../img/OP2.png";
import {useParams} from "react-router-dom";

export const ProductDetails = () => {
  const { store, actions } = useContext(Context);
  const [bigPicture, setBigPicture] = useState("");
  const { id } = useParams();
  const [productDetail, SetProductDetail] = useState({});
  const imgDisplay = (event) => {
    console.log(event);
  };
  // filtro store por mis products buscando un id igual a el de los parametros lo va a guardar en product
  const getProduct = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/product/${id}`); //<-- ruta dinamica creada//
      const data = await response.json();
      SetProductDetail(data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    // const product = store.products.find(product =>product.id==id)
    // SetProductDetail(product)
    // console.log(product)
    getProduct();
  }, []);
  console.log(id);
  console.log(store.products);
  return (
    <div className="container text-center py-5 ">
      <div className="row ">
        <div className="col">
          <div className="product d-flex justify-content-end ">
            <div className="product-small-img">
              <img src={logo} onClick={imgDisplay}></img>
              <img src={logo} onClick={imgDisplay}></img>
              <img src={logo} onClick={imgDisplay}></img>
              <img src={logo} onClick={imgDisplay}></img>
              <img src={logo} onClick={imgDisplay}></img>
            </div>
            <div className="img-container col-sd-1 col-md-6 col-lg p-2 float-end ">
              <img id="imageBox" className="size"src={productDetail.product_img}></img>
            </div>
          </div>
        </div>

        <div className="col flex-column  mb-3 ">
          <div className="float-start d-flex align-items-start flex-column">
            <div className="p-2">
              <h1 className=" float-start">{productDetail.name}</h1>
            </div>

            <div className="p-2 float-start">
              <i className="fa-regular fa-star iconstar"></i>
              <i className="fa-regular fa-star iconstar"></i>
              <i className="fa-regular fa-star iconstar"></i>
              <i className="fa-regular fa-star iconstar"></i>
              <i className="fa-regular fa-star iconstar"></i>
            </div>

            <div className="p-2">
              <h2 className="float-start">{productDetail.price}</h2>
            </div>
            <div className="p-2">
              <h6 className="float-start">{productDetail.user_id}</h6>
            </div>
            <div className="p-2">
              {/* <h6 className="float-start">Tipo de producto: Juegos</h6> */}
            </div>
            <div className="p-2">
              {/* <h6 className="float-start">Agregar a lista de deseo</h6> */}
            </div>

            {/* <div className="p-2">
              <h6 className="float-start">Cantidades:</h6>
            </div>
            <div className="d-flex float-start">
              <div className="p-2 cuadrado ">+</div>
              <div className="p-2 lines">2</div>
              <div className="p-2 cuadrado">-</div>
            </div> */}

            <div className="flex-column">

            <button variant="primary" onClick={()=>actions.handleTransaccion(product.id, product.status)}>Buy now!</button>

            </div>

            <div className="card card-personalizada ">
              <div className="card-body ">
                <div className="container text-center ">
                  <div className="row row-cols-2">
                    <div className="col-md d-flex justify-content-start gap-1 mb-4  py-3">
                      <i className="fa-solid fa-box icon  "></i>

                      <div>
                        <h6 className="text-start">
                          Delivery Gratis.
                          <p className="fs-6 text-secondary">
                            Lorem Ipsum dummy
                          </p>
                        </h6>
                      </div>
                    </div>

                    <div className="col  d-flex justify-content-start gap-1 mb-4 py-3">
                      <i className="fa-solid fa-headset icon"></i>
                      <div>
                        <h6 className="text-start">
                          Atención al cliente.
                          <p className="fs-6 text-secondary">
                            Lorem Ipsum dummy
                          </p>
                        </h6>
                      </div>
                    </div>
                    <div className="col d-flex justify-content-start gap-1">
                      <i className="fa-solid fa-circle-dollar-to-slot icon"></i>
                      <div>
                        <h6 className="text-start">
                          Grandes ahorros.
                          <p className="fs-6 text-secondary">
                            Lorem Ipsum dummy
                          </p>
                        </h6>
                      </div>
                    </div>
                    <div className="col d-flex justify-content-start gap-1">
                      <i className="fa-solid fa-gift icon"></i>
                      <div>
                        <h6 className="text-start">
                          {" "}
                          Gift Voucher.
                          <p className="fs-6 text-secondary">
                            Lorem Ipsum dummy
                          </p>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <div className="card mt-5">
        <div className="card-body">
          <ul
            className="nav nav-tabs  d-flex justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Descripcion
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Politicas
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="warranty-tab"
                data-bs-toggle="tab"
                data-bs-target="#warranty-tab-pane"
                type="button"
                role="tab"
                aria-controls="warrantytab-pane"
                aria-selected="true"
              >
                Garantia
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="warranty-tab-pane"
              role="tabpanel"
              aria-labelledby="warranty-tab"
              tabIndex="0"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
