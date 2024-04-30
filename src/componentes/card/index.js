import React from "react";
import './style.css';

export default function Card(props){
    return(
        <section className={props.mudarCor ? "card-black" : "card"}>
            <div className={props.mudarCor ? "card-black" : "card"}>
                <div className="cards">                
                    <p>JUNHO 2012 - 2016</p>
                    <h2> Web Designer </h2>
                    <p>Pied Piper StartUp</p>
                    <p>Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>               
              </div>
              <div className="cards">
                <p>
                    <p>AGOSTO 2016 - 2019</p>
                    <h2>Product Designer</h2>
                    <p>E Corp</p>
                    <p>Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"</p>                    
                </p>
              </div>
              <div className="cards">
                <p> FEVEREIRO 2019 - 2021</p>
                <h2>Digital Consulting</h2> 
                <p>Arasaka Inc.</p>
                <p>Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução</p>

              </div>
              

            </div>


        </section>

    )
}