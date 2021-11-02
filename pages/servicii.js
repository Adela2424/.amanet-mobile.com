import React from 'react';
import "../components/Servicii.css"
const Servicii = () => {
    return (
        <div className="servicii">
            <div className="text_servicii">
               <h2 className="h2"> Servicii Amanet Moile </h2>
               <div className="container_paragraf">
                   <h4 className="h4_subtitlu"> Vindem si cumparam telefoane mobile! </h4>
                   <h4>Produse acceptate !  </h4>
                   <p>- telefoane cu Android (peste versiunea 5) și IOS (peste versiunea 7)</p>
                   <p> * nu acceptam orice model, deoarece unele sunt greu vandabile sau recunoscute cu probleme.
                     Dorim să oferim spre vânzare doar produse de calitate, cu adevărat funcționale.</p>
                 </div>
                 <div className="container_paragraf">
                   <h4>Produse pe care NU le acceptăm?</h4>
                   <p>- cu display crăpat, carcasa deteriorată sau îndoită</p>
                   <p>- stare generală estetică foarte proastă </p>
                   <p>- produse ce prezintă contact cu lichide</p>
                   <p>- telefoane/tablete cu windows/Blackbery OS</p>
                   <p>- dungi pe display, pete evidente sau parțial nefuncțional</p>
                   <p>- probleme de sunet</p>
                   <p>- telefoane și tablete cu baterie foarte slabă</p>
                   <p>- având camere defecte</p>
                   <p>- probleme încărcare </p>
                   <p>- wifi, gps, bluetooth defect </p>
                   <p>- nu citesc sim </p>
                   <p>- blocat în rețea externă, blacklisted, declarate furate, cu icloud sau alte conturi</p>
                   <p>- componente lipsă sau parți care se desprind, dezlipite, sau nu sunt fixate ferm</p>
                   <p>* facem anumite excepții, deci ne poți întreba dacă ai telefoane cu mici probleme</p>
                 </div>
               <div className="text">
                   <p> </p>
                   <img className="amanet_telefoane" src="images/amanet_telefoane.png" alt="" />
               </div>
            </div>
        </div>
        
    );
};

export default Servicii;
