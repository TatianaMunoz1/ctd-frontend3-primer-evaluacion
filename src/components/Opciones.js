import React from "react";


class Opciones extends React.Component{


  

    render(){
        return(
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" value="A" onClick={this.props.handleClick}>A</button>
                    <h2>{this.props.opcA}</h2>
                </div>
                <div className="opcion">
                    <button className="botones" value="B" onClick={this.props.handleClick}>B</button>
                  <h2>  {this.props.opcB}</h2>
                </div>
            </div>


        )
    }
   



    
    


}

export default Opciones;