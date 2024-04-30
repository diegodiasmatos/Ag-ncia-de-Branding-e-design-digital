import React  from "react";
import './style.css';
import Card from '../card';

export default function Experiencia(props) {
    return(
        <section className={props.mudarCor ? "container-ex-black":"container-EX"}>
            <div className="conteudo-textual-ex ">
                <h2> Experiências De Trabalho</h2>
                <p> Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>
            </div>

            <div className="ex-cards">

            <Card/>
            
            </div>

       
        </section>

    )
    
}