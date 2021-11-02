import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="items_footer">
          <div className="coloana">
            <h3 className="h3_footer"> Despre Noi</h3>
            <hr className="hr1" />
            <div className="liste_footer">
              <p> S.C. Bertus S.R.L </p>
              <p> Str. Margineanu, nr.1, Oradia </p>
              <p> office@amanet.ro </p>
              <p> 0374 - 508 509f </p>
              <p> J24/790/2003 </p>
            </div>
          </div>

          <div className="coloana  ">
            <h3 className="h3_footer"> INFORMATII</h3>
            <hr className="hr1" />
            <div className="liste_footer informatii">
              <p> Despre noi </p>
              <p> Modalitati de plata </p>
              <p> Livrare si transport </p>
              <p> Service & Garantii </p>
              <p> Retururi </p>
            </div>
          </div>

          <div className="coloana ">
            <h3 className="h3_footer "> CATEGORII</h3>
            <hr className="hr1" />
            <div className="liste_footer categorii  ">
              <p> Contul meu </p>
              <p> Date personale </p>
              <p> Adrese </p>
              <p> Istoric comenzi </p>
              <p> Urmarire comenzi </p>
            </div>
          </div>

          <div className="coloana ">
            <h3 className="h3_footer"> URMARITI-NE </h3>
            <hr className="hr2" />
            <div className="liste_footer">
              <div className="icons_social_media fa-lg">
                <i className="fab fa-facebook "></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-twitter-square"></i>
              </div>
              <p> tell:0677352833 </p>
              <p> Program: </p>
              <p> Luni-Vineri: 08:20 </p>
              <p> Sâmbătă:10-14 </p>
              <p> Duminică: Inchis </p>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer_copiright">
        <div className="copiright">
          <p> © 2021 Ionce Adela Maria. All rights reserved. </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
