﻿import { useState } from "react";

function Contador() {
  
  //const [nome_estado, função_setState] = useState(valor_inicial_do_estado)
  
//Estado valor (React) 
  const [valor, setValor] = useState(0);

//Function (TypeScript)
  function handleClick(){
    setValor(valor + 1);
  }

//Html
  return (
  <div>
    <h2>Componente Contador</h2>

    <p>O valor atual do meu estado é: {valor}</p>

    <button onClick={handleClick}>Adicionar +1</button>  
      
  </div>
  )
}

export default Contador