import React from 'react'
import "./AbautContent.css"

function AbautContent() {
    return (
        <div className="abaut_content">
            <h2 className="despre_noi"> Despre noi </h2>
            <p> Suntem liderul pietei de amanet din Romania* ce are o echipa de peste 450 specialisti, motivata si preocupata sa-ti ofere servicii foarte bune de amanet, schimb valutar si transfer de bani prin Western Union.
                 In Maramures de unde suntem noi, corectitudinea si respectul fata de client sunt litera de lege si asa ne-am propus sa fie si relatia cu toti clientii nostri. </p>
                 <img className="colet_img" src="images/colet.png" alt="" />
                 <div className="container_paragraf">
                   <h4> Serviciile oferite clientilor sunt:</h4>
                   <p> - Telefoane la cele mai bune preturi</p> 
                   <p> - Calitate garantata</p>
                   <p> - Telefoane de ultima generatie</p>
                </div>
                 <div className="container_paragraf">
                   <h4>La noi gasesti: </h4>
                   <p> Telefoane Mobile, marci variate.</p>
                   <p> De asemenea la noi puteti vinde telefonaele pe care nu le mai folositi.</p>
                 </div>
                 <div className="container_paragraf">
                   <h4>1.Evaluează produsul </h4>
                   <p> - Pentru telefoane și tablete, accesază softul nostru de evaluare pe www.totalconvert.ro/eval și află cât poți primi pe produsul tău.</p>
                   <p> * Pentru alte categorii de produse îți stăm la dispoziție cu evaluari telefonice, pe WhatsApp sau pe mail.</p>
                   <p> Telefoane Mobile, marci variate.</p>
                   <p> - Selectează obiectiv opțiunile ce descriu mai bine starea produsului și rezervă prețul pentru 48 de ore</p>
                   <p> - Un consultant te va suna pentru confirmare.</p>
                 </div>
                 <div className="container_paragraf">
                   <h4>2. Trimite produsul prin curier </h4>
                   <p> - Destinantar: "Continental Consulting SRL, Bdul Camil Ressu, nr 4, Sector 3, Bucuresti (magazin TotalConvert), contact: 0775 33 44 55</p>
                   <p>- fără ramburs (plătim după verificarea tehnică a telefonului)</p>
                   <p> - poți comanda singur curierul sau îl trimitem noi. Oricum ar fi, facem cinste cu transportul :)</p>
                   <p> * Nu acceptăm prin curier televizoare sau alte produse voluminoase.</p>
                 </div>
                 <div className="container_paragraf">
                   <h4>3. Testăm produsul </h4>
                   <p>- ne rezervăm maxim 24 de ore să testăm produsul</p>
                   <p>- testăm semi-automat peste 30 de aspecte, filmând tot procesul din momentul desigilării coletului</p>
                   <p> - dacă ceva nu este în regulă, îți propunem o nouă evaluare sau returnăm produsul (transportul retur va fi în sarcina ta)</p>
                   <p> - dacă produsul este așa cum l-ai descris, te sunăm pentru confirmare și-ți solicităm contul bancar</p>
                 </div>
        </div>
    )
}

export default AbautContent
