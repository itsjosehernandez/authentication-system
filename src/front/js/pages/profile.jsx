import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/galeriaproductos.css";
import "../../styles/profile.css";






export const Profile = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container text-center py-5 ">
            <div className="row ">
                
            <div class="col">
            
                
                <div class="product d-flex align-items-start ">

                            <div class="product-small-img">

                                <img src="https://picsum.photos/id/0/200/200" onClick="fotico(this)"></img>
                                <img src="https://picsum.photos/id/1/200/200" onClick="fotico(this)"></img>
                                <img src="https://picsum.photos/id/2/200/200" onClick="fotico(this)"></img>
                                <img src="https://picsum.photos/id/3/200/200" onClick="fotico(this)"></img>
                                <img src="https://picsum.photos/id/4/200/200" onClick="fotico(this)"></img>
                            </div>    
                            <div class="img-fluid col-sd-1 col-md-6 col-lg p-2 float-end ">
                                <img id="imageBox" src="https://picsum.photos/id/0/200/200"></img>
                                <fotico></fotico>
                            </div>
                </div>



                </div>


                <div className="col flex-column  mb-3 ">

                    <div className="float-start d-flex align-items-start flex-column">

                        <div className="p-2"><h1 className=" float-start">Titulo</h1></div>

                        <div className="p-2 float-start">
                            <i className="fa-regular fa-star iconstar"></i>
                            <i className="fa-regular fa-star iconstar"></i>
                            <i className="fa-regular fa-star iconstar"></i>
                            <i className="fa-regular fa-star iconstar"></i>
                            <i className="fa-regular fa-star iconstar"></i>
                        </div>


                        <div className="p-2"><h2 className="float-start">$00.00</h2></div>
                        <div className="p-2"><h6 className="float-start">Vendedor: Ridex</h6></div>
                        <div className="p-2"><h6 className="float-start">Tipo de producto: Juegos</h6></div>
                        <div className="p-2"><h6 className="float-start">Agregar a lista de deseo</h6></div>

                        <div className="p-2"><h6 className="float-start">Cantidades:</h6></div>
                        <div className="d-flex float-start">
                            <div className="p-2 cuadrado ">+</div>
                            <div className="p-2 lines">2</div>
                            <div className="p-2 cuadrado">-</div>

                        </div>

                        <div className="flex-column">

                            <div className="p-2 rectangulo">Comprar Ahora!</div>
                        </div>


                        <div class="card card-personalizada ">
                            <div class="card-body ">

                                <div class="container text-center ">

                                    <div class="row row-cols-2">





                                        <div class="col-md d-flex justify-content-start gap-1 mb-4  py-3">
                                            <i class="fa-solid fa-box icon  "></i>


                                            <div><h6 className="text-start">Delivery Gratis.<p class="fs-6 text-secondary">Lorem Ipsum dummy</p></h6></div>




                                        </div>





                                        <div class="col  d-flex justify-content-start gap-1 mb-4 py-3">
                                            <i class="fa-solid fa-headset icon"></i>
                                            <div><h6 className="text-start">Atención al cliente.<p class="fs-6 text-secondary">Lorem Ipsum dummy</p></h6>


                                            </div>


                                        </div>
                                        <div class="col d-flex justify-content-start gap-1">
                                            <i class="fa-solid fa-circle-dollar-to-slot icon"></i>
                                            <div><h6 className="text-start">Grandes ahorros.<p class="fs-6 text-secondary">Lorem Ipsum dummy</p></h6>

                                            </div>

                                        </div>
                                        <div class="col d-flex justify-content-start gap-1"><i class="fa-solid fa-gift icon"></i>
                                            <div><h6 className="text-start"> Gift Voucher.<p class="fs-6 text-secondary">Lorem Ipsum dummy</p></h6>


                                            </div>
                                        </div>
                                    </div>
                                </div>







                            </div>
                        </div>









                    </div>

                    <div>

                    </div>
                </div>
            </div>

            <div class="card mt-5">
                <div class="card-body">

                    <ul className="nav nav-tabs  d-flex justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Descripcion</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Politicas</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="warranty-tab" data-bs-toggle="tab" data-bs-target="#warranty-tab-pane" type="button" role="tab" aria-controls="warrantytab-pane" aria-selected="true">Garantia</button>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                        <div className="tab-pane fade" id="warranty-tab-pane" role="tabpanel" aria-labelledby="warranty-tab" tabindex="0">...</div>

                    </div>

                </div>
            </div>

        </div>






    );
};

