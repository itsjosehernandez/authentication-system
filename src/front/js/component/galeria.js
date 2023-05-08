import React, { Component } from "react";
import { Link } from "react-router-dom";


export const Fotos = (smallimg) =>

    {
        let fullimg = document.getElementById("imageBox");
            fullimg.src = smallimg.src;
    }

;

