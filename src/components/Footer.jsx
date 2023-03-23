import React from "react";
import ReactDOM from "react-dom/client";

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (
    <footer>
      <p>Copyright Skawiks {year}</p>
    </footer>
    )
}   
export default Footer;