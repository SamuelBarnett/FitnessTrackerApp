"use strict";

import { axios } from "axios";
import { response } from "express";
import { HistoryRouterProps } from "react-router-dom";

const HandleLogin = (data) => {
  axios
    .post("/login", data)
    .then((response) => {
      if (response.data) {
        
      }
    })
    .catch();
};


export default HandleLogin;
