import { useState } from 'react';
import './App.css';
import Topo from'./componentes/topo';
import Banner from'./componentes/Banner';
import  Eperiencia from'./componentes/esperienciadetrabalho';
import  Rodape from'./componentes/rodape';

function App() {
  const[mudarCor,setMudarcor] = useState(false)
const alterarcor = () => {
    setMudarcor(!mudarCor)
}

  return (
    <div className="App">
      <Topo alterarcor={alterarcor} mudarCor={mudarCor} />
      <Banner alterarcor={alterarcor} mudarCor={mudarCor} />
      <Eperiencia alterarcor={alterarcor} mudarCor={mudarCor}  />
      <Rodape alterarcor={alterarcor} mudarCor={mudarCor} />
     
    </div>
  );
}

export default App;
