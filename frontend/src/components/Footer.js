import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (           
    <div style={{ backgroundColor: "#ffffff", width: "auto"}}>
    <footer style={{ position: "fixed-center", left: "0", bottom: "0", width: "100", padding: "10px 10px", textAlign: "center", color: "black", fontSize: "12px", backgroundImage: "linear-gradient(to right, #cb2d3e, #e65337)", }}> 
    <Link
    to="/Login">  
    <a style={{ color: '#FFF' }}>&copy;Copyright 2019 | foodQ</a>
    </Link>
    </footer>
    </div>
  );
};

export default Footer;
