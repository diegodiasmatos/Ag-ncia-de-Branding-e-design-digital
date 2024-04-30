import './style.css';
import Logo from "../../assets/logo.png";
import ImageButton from '../../assets/moon.png'
import imagemButtonblack from '../../assets/sun.png'


export default function Topo(props){

    return(
        <header className={props.mudarCor ? "black-topo":"Topo"}>
            

       <img className="LOGO" src={ Logo } />

       <div>
        <button className={props.mudarCor ? 'botao-bleck':'botao'} onClick={props.alterarcor}><img  className="icone" src={props.mudarCor ? imagemButtonblack: ImageButton} alt="imagemdobuton"/></button>
       </div>

        </header>

    )
}