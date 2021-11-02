import React from 'react'
import "./Oferte.css"

function Oferte() {
    return (
        <>
        <div className="oferte">
            <div className="oferte_items">
                <div className="oferte_item">
                      <div className="img_oferte">
                         <i className="fas fa-car fa-3x"></i>
                       </div>   
                       <div className="titlu_oferte">
                           <h4> Oferim transport gratuit</h4>
                       </div>      
                </div>
                <p className="paragraf_oferte">    Transportul este gratuit oriunde in tara in limita ariilor de acoperire </p>
            </div>

            <div className="oferte_items">
                <div className="oferte_item">
                      <div className="img_oferte">
                      <i className="fas fa-money-check-alt fa-3x"></i>
                       </div>   
                       <div className="titlu_oferte">
                           <h4> Oferim transport gratuit</h4>
                       </div>      
                </div>
                <p className="paragraf_oferte" >    Puteti plati produsele online sau ramburs, la primirea coletului</p>
            </div>

            <div className="oferte_items">
                <div className="oferte_item">
                      <div className="img_oferte">
                          <i className="fas fa-box-open fa-3x"></i>
                       </div>   
                       <div className="titlu_oferte">
                           <h4 > Oferim transport gratuit</h4>
                       </div>      
                </div>
                <p className="paragraf_oferte" >   Posibilitatea verificarii coletului inainte de a plati </p>
            </div>

            <div className="oferte_items">
                <div className="oferte_item">
                      <div className="img_oferte">
                          <i className="fas fa-undo-alt fa-3x"></i>
                       </div>   
                       <div className="titlu_oferte">
                           <h4> Oferim transport gratuit</h4>
                       </div>      
                </div>
                <p className="paragraf_oferte">   Puteti returna produsele in 15 zile de la primire </p>
            </div>
        </div>
        
        </>
    )
}

export default Oferte
