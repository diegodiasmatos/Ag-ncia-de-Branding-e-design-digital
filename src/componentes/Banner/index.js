import React from "react";
import './style.css';
export default function Banner(props) {
    return(
        <section className="banner-1">
            
        <div className={props.mudarCor ? 'banner-black':'banner'}> 
        </div>
        <div className="container-banner1">
            <div className="conteudo-textual">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
               
            </div>
        </div>
        </section>
    )
    
}