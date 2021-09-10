import React from "react";



class Recordatorio extends React.Component{
  render(){
//this.props.eleccion.slice(0,-1).map((item,i)=> <li key={i}>{item}</li>)


         return(
            <div className="recordatorio">
                    <h3>Seleccion anterior: {this.props.seleccionAnterior}</h3>
                    <h4>Historial de opciones elegidas:  </h4>
                    <ul> {this.props.eleccion.map((item,i)=> <li key={i}>{item}</li>)}</ul>
                    
                    

            </div>
        )
    }


}
export default Recordatorio;