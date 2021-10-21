import React, { useState } from "react";
import {
  FaPinterest,
  FaSearch,
  FaBell,
  FaCommentDots,
  FaAngleDown,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const HeaderLayout = () => {
  const [hoyButton, setHoyButton] = useState("white");
  const [buscarButton, setBuscarButton] = useState("EFEFEF");
  const [iconos, setIconos] = useState("transparent");

  const _stylesHeader = {
    header: {
      display: "flex",
      padding: 5,
      margin: 23,
      alignItems: "center",
      backgroundColor: "white",
      boxSizing: "border-box",
      height: "5vh",
    },

    buscar: {
      display: "flex",
      margin: "10px",
      padding: "12px",
      backgroundColor: `${buscarButton}`,
      alignItems: "center",
      borderRadius: 40,
      height: "3vh",
      width: "80%",
      cursor: "text",
      opacity: "0.4",
      fontWeigth: "bolder",
    },

    inicio: {
      display: "flex",
      padding: 14,
      marginLeft: 10,
      borderRadius: "30px",
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold",
      width: "3.2%",
    },

    hoy: {
      display: "flex",
      padding: 13,
      borderRadius: 30,
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: `${hoyButton}`,
      color: "black",
      fontWeight: "bold",
      width: "2.5%",
    },

    icons: {
      display: "flex",
      padding: 7,
      margin: 2,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: `${iconos}`,
      borderRadius: 50,
      height: "3.5vh",
      width: "2%",
      cursor: "pointer",
    },

    iconDown: {
      display: "flex",
      padding: 3,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: `${iconos}`,
      borderRadius: 50,
      height: "3.5vh",
      width: "2%",
      cursor: "pointer",
    },

    iconsHover: {
      backgroundColor: "lightgrey",
    },
  };
  return (
    <div className="header">
      <div style={_stylesHeader.header}>
        <FaPinterest size={25} color="red" />
        <div style={_stylesHeader.inicio}>Inicio</div>
        <div
          style={_stylesHeader.hoy}
          onMouseEnter={() => {
            setHoyButton("#efefef");
          }}
          onMouseOut={() => {
            setHoyButton("white");
          }}
        >
          Hoy
        </div>

        <div
          style={_stylesHeader.buscar}
          onMouseEnter={() => {
            setBuscarButton("#a5a5a5");
          }}
          onMouseLeave={() => {
            setBuscarButton("#d2d2d2");
          }}
        >
          <FaSearch />
          Buscar
        </div>

        <div
          style={_stylesHeader.icons}
          onMouseOver={() => {
            setIconos("#EFEFEF");
          }}
          onMouseLeave={() => {
            setIconos("transparent");
          }}
        >
          <FaBell size={25} color="#767676" />
        </div>

        <div
          style={_stylesHeader.icons}
          onMouseOver={() => {
            setIconos("#EFEFEF");
          }}
          onMouseLeave={() => {
            setIconos("transparent");
          }}
        >
          <FaCommentDots size={25} color="#767676" />
        </div>

        <div
          style={_stylesHeader.icons}
          onMouseOver={() => {
            setIconos("#EFEFEF");
          }}
          onMouseLeave={() => {
            setIconos("transparent");
          }}
        >
          <CgProfile size={25} color="#767676" />
        </div>

        <div
          style={_stylesHeader.iconDown}
          onMouseOver={() => {
            setIconos("#EFEFEF");
          }}
          onMouseLeave={() => {
            setIconos("transparent");
          }}
        >
          <FaAngleDown size={20} color="#767676" />
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
