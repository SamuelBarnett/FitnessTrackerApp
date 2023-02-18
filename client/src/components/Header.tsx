import React from "react";
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileWaveform} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    // changes header based on which page yu are on
    <div className="mx-5 my-5 flex">
      <FontAwesomeIcon icon={faFileWaveform} className="fa-3x"/>
      <h1 className="mx-6 text-4xl">Header</h1>
      <h1 className="text-xl text-gray-500">SubHeader</h1>
    </div>
  );
};

export default Header;
