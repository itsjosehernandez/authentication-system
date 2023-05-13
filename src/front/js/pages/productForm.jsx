import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductForm = () => {
  const { store, actions } = useContext(Context);
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: 0,
    product_img: "https://i.imgur.com/v6zm8qS.png",
    status: "",
  });

  const handleChange = (event) => {
    setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
  };

  function createproduct(event) {
    event.preventDefault();
    actions.handleCreateProduct(productInfo);
}

  toast("Producto Creado", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return (
    <div className="container">
      <div className="card m-5">
        <div className="card-body m-5">
          <h2 className="mb-5 mt-4">Publica tu Producto</h2>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
            Nombre del Producto
            </label>
            <input
            type="text"
            name="name"
            className="form-control"
            value={productInfo.name}
            onChange={(event) => {
                handleChange(event);
              }}
              placeholder="Este será el título. Ten en cuenta que cuando tengas ventas, no podrás editarlo."
            />
          </div>

          <div className=" mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Estado del producto
            </label>

            <input
              className="form-control"
              name="status"
              value={productInfo.status}
              onChange={(event) => {
                handleChange(event);
              }}
              aria-label="With textarea"
            ></input>
          </div>

          <label htmlFor="formGroupExampleInput" className="form-label">
            Precio
          </label>

          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              name="price"
              value={productInfo.price}
              onChange={(event) => {
                handleChange(event);
              }}
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
              Agregar una foto del articulo
            </label>
            {/* <input
              className="form-control"
              name="product_img"
              value={productInfo.product_img}
              onChange={(event) => {
                handleChange(event);
              }}
              type="file"
              multiple
            /> */}
          </div>
          <button
            type="button"
            onClick={(event) => {
              createproduct(event);
            }}
            className="btn btn-primary"
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};
