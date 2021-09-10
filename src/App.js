import React from "react";
import Recordatorio from "./components/Recordatorio";
import data from "./components/data.json"
import Opciones from "./components/Opciones"



class App extends React.Component {
  

constructor(props){
  super(props)
//Defino estado inicial de la clase
this.state = {
  contador: 0,
  seleccionAnterior: "",
  eleccion: []
}}

/* -------------------------------------------------------------------------- */
/* ---------------------------Evento click para los botones----------------------------------------------- */
/* -------------------------------------------------------------------------- */
handleClick = (event) => {
    const btn = event.target;
     
    if(this.state.contador>6){
      alert("Fin")
      this.setState({
        contador: 0,
        seleccionAnterior: " ",
      })
        
      
    }
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
    if(btn.value === "A" && this.state.seleccionAnterior !== "A"){
      this.setState({
        contador: this.state.contador + 1,
        seleccionAnterior: "A",
      });

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
    }else if(btn.value === "A" && this.state.seleccionAnterior === "A"){
      this.setState({
        contador: this.state.contador+2,
        seleccionAnterior: "A",

      })
    
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
    }else if (btn.value ==="B" && this.state.seleccionAnterior === "A"){
      this.setState({
        contador: this.state.contador+3,
        seleccionAnterior: "B"
      })
 
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
    }else if(btn.value === "B"){
      this.setState({
        contador: this.state.contador+2,
        seleccionAnterior: "B"
      })
    }
    console.log(this.state.eleccion)  //todo NO DA LO MISMO
  }

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* ---------------------- Ciclo de vida -- ---------------------------------- */
componentDidUpdate(prevProps,postProps){
  if(prevProps.contador !== this.props.contador){
 this.state.eleccion.push(this.state.seleccionAnterior)};

}

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
render(){
  return(
  <div className="layout">
      <h1 className="historia">{data[this.state.contador].historia} </h1>
      <Opciones
      handleClick={this.handleClick}
       opcA = {data[this.state.contador].opciones.a}
       opcB = {data[this.state.contador].opciones.b} />


     <Recordatorio
     seleccionAnterior = {this.state.seleccionAnterior} 
      eleccion = {this.state.eleccion}
        
      

      />
  </div>

  )

}

}

export default App;
