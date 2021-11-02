import React from "react";
import Itemcard from "./Itemcard";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1 className="text_container_cards"> Telefoane </h1>
        <div className="cards_container">
          <div className="cards_wrapper">
            <div className="items_cards">
              <Itemcard
                src="images/img1.jpg"
                text="Telefon APPLE iPhone 13 5G, 128GB, Blue"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img2.jpg"
                text="Telefon APPLE iPhone 13 5G, 512GB, Blue"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img3.jpg"
                text="Telefon APPLE iPhone 12 5G, 64GB, Green"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img4.jpg"
                text="Telefon APPLE iPhone 12 Pro 5G, 128GB, Gold"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img5.jpg"
                text="Telefon APPLE iPhone 12 mini 5G, 128GB, Blue"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />

              <Itemcard
                src="images/img6.jpg"
                text="Telefon APPLE iPhone 12 Pro Max 5G, 256GB, Pacific Blue"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img7.jpg"
                text="Telefon SAMSUNG Galaxy S21+ 5G, 256GB, 8GB RAM, Dual SIM, Phantom Silver"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img9.png"
                text="Telefon APPLE iPhone 12 Pro Max 5G, 256GB, Pacific Blue"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img9.png"
                text="Telefon SAMSUNG Galaxy S21+ 5G, 128GB, 8GB RAM, Dual SIM, Phantom Silver"
                label="Asd"
                path="/info"
                text_stoc="în stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img10.jpg"
                text="Telefon SAMSUNG Galaxy S21+ 5G, 256GB, 8GB RAM, Dual SIM, Phantom Black"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img11.png"
                text="Telefon SAMSUNG Galaxy S21+ 5G, 256GB, 8GB RAM, Dual SIM, Phantom Black"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
              <Itemcard
                src="images/img12.png"
                text="Telefon SAMSUNG Galaxy S21+ 5G, 256GB, 8GB RAM, Dual SIM, Phantom Black"
                label="Asd"
                path="/info"
                text_stoc="in stoc"
                text_pret="24, 23 lei"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
