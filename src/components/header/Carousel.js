import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
import girl_1 from "../../assets/images/girl1.png";
import girl_2 from "../../assets/images/girl2.png";
import girl_3 from "../../assets/images/girl3.png";
import header_table from "../../assets/images/Table.png";
import shadow from "../../assets/images/CryptoSlut-img/Shadow.png";


export const Carousel = () => {
    return (
        <div className="table_shadow">
        <div className="container texture-top position-relative slider_section">

          <OwlCarousel className="owl-theme" loop margin={5} nav autoplay>
            <div class="item">
            <img src={girl_1} />
            </div>
            <div class="item">
            <img src={girl_2} />
            </div>
            <div class="item">
            <img src={girl_3} />
            </div>
            <div class="item">
            <img src={girl_2} />
            </div>
            <div class="item">
            <img src={girl_3} />
            </div>
          </OwlCarousel>


        </div>

        <img src={header_table} className="img-fluid header_table" />
      </div>
    )
}
