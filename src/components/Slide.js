import React, { Component } from "react";
import Slider from "react-slick";
import { Button } from 'reactstrap';
import {Link } from "react-router-dom";
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
      <div className="slides">
        
        <Slider {...settings}>
          <div>
            <img  src="images/13477_1521709191.png" alt="" />
            <Link  to={"/Newcars/" + 7} > <Button  color="danger"> view</Button></Link>
          </div>
          <div>
          <img  src="images/24442_1599051992.png" alt="" />
          <Link  to={"/Newcars/" + 80} > <Button  color="danger"> view</Button></Link>
          </div>
          <div>
          <img  src="images/46088_1522252424.png" alt="" />
          <Link  to={"/Newcars/" + 22} > <Button  color="danger"> view</Button></Link>
          </div>
          <div>
          <img  src="images/53352_1522250390.png" alt="" />
          <Link  to={"/Newcars/" + 28} > <Button  color="danger"> view</Button></Link>
          </div>
          <div>
          <img  src="images/72503_1536834647.png" alt="" />
          <Link  to={"/Newcars/" + 40} > <Button  color="danger"> view</Button></Link>
         </div>
          <div>
          <img  src="images/98333_1612104948.png" alt="" />
          <Link  to={"/Newcars/" + 67} > <Button  color="danger"> view</Button></Link>  
            </div>
        </Slider>
      </div>
    );
  }
}