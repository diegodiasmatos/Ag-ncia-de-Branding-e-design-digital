import React from "react";
import './style.css';
import logo from '../../assets/logo.png';
import fecebook from '../../assets/facebook.png';
import x from '../../assets/twitter.png';
import linkdim from '../../assets/linkedin.png';
import dribble from '../../assets/dribble.png';
import behance from '../../assets/behance.png';
export default function Rodape(props) {
    return(
        <footer className={props.mudarCor ? "rodape-black":"rodpe"}>
            <img className="logorodape" src={logo} alt="logo rodape"/>

            <div className="texto-rodape"> <p className={props.mudarCor ? "p-text-rodape_branco":"p-text-rodape" }>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.</p> 
        </div> 
           
        <nav className="icones">
        <a href="https://www.facebook.com/diego.diasmatos.5/" target="_blank"><img src={fecebook} alt="loho-fecebook"/> </a>
        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" target="_blank"><img src={x} alt="x"/></a>
        <a href="https://www.linkedin.com/in/diego-dias-matos-1a105a252/" target="_blank"> <img  src={linkdim} alt="logo-link"/></a>
        <a href="https://dribbble.com/" target="_blank"><img src={dribble} alt="logodribre"/></a>
        <a href="https://www.behance.net/" target="_blank"><img src={behance} alt="logo-behance"/></a>
        </nav>
        <p>Copyright 2022 <span>Diego dias matos</span></p>
        </footer>
    )
        


    
    
}