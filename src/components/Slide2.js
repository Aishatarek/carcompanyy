import React, { Component } from "react";
import Slider from "react-slick";
import "../App.css";
export default class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slides2">
        
        <Slider {...settings}>
          <div  >
              <div className="divflex">
              <div>
             <h3>
             Linda Samuel 
             </h3>
             <p>Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.</p>
           </div>
            <img  src="images/t2-300x300.jpg" alt="" />
          
           </div>
          </div>
          <div >
          <div className="divflex">
          <div>
             <h3>
             sandy Mask
             </h3>
             <p>Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.</p>
           </div>
          <img  src="images/photo-1527593167147-e9c94a5883e6.jpg" alt="" />
           
          </div></div>
          <div >

          <div className="divflex">
          <div>
             <h3>
             Sandra Mask
             </h3>
             <p>Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.</p>
           </div>
       
          <img  src="images/t3-300x300.jpg" alt="" />
          </div>
          </div>
        <div>
          <div className="divflex">
          <div>
             <h3>
             mark Samuel 
             </h3>
             <p>Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.</p>
           </div>
          <img  src="images/t4-300x300.jpg" alt="" />
       
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}