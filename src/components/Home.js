import React, { useState } from 'react'
import { GiCarWheel ,GiCarSeat } from 'react-icons/gi';
import { IoCarSport } from 'react-icons/io5';
import { AiFillPlayCircle } from 'react-icons/ai';
import {Container, Row, Col , Button , Modal, ModalHeader, ModalBody } from 'reactstrap';
import Slide from "./Slide";
import Card from "./Card";
import Slide2 from "./Slide2";
import Footer from "./Footer";
import "../App.css";
import {Link } from "react-router-dom";


function Home(props) {
  const [active, setActive] = useState("Firstcard");
  const {

    className
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <header className="home">
        <video autoPlay loop muted>
          <source src="images/WhatsApp Video 2021-04-29 at 22.00.12.mp4" />
        </video>
        <div className="hometext">
          <p>Best Auto Theme </p>
          <h3>The best theme for creating a website for the sale and rental of cars</h3>
          <Link to="/Aboutus" exact > <Button color="danger b1" > About us</Button></Link>
        </div>
      </header>
      <section>
        <Container className="section">
          <Row>
            <Col lg="4" sm="12"><IoCarSport className="icon1" /> <h3>Official Dealer</h3><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p><Link to="/Aboutus" exact > <Button color="danger b1" >About us</Button></Link></Col>
            <Col lg="4" sm="12"> <GiCarSeat className="icon1" /> <h3>Fast Clearance</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p><Link to="/Aboutus" exact > <Button color="danger b1" >About us</Button></Link></Col>
            <Col lg="4" sm="12"><GiCarWheel className="icon1" />  <h3>Warranty Service</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p><Link to="/Aboutus" exact > <Button color="danger b1" >About us</Button></Link></Col>
          </Row>
        </Container>
      </section>
      <section className="section2">
        <h3>Special Cars</h3>
        <p>Rutrum ante tempus mauris facilisi, leo faucibus, egestas diamlorem malesu, vitae mauris.</p>
        <Slide />
      </section>
      <section className="section3">
        <Container >
          <Row>
            <Col lg="6" sm="10" className="colsec31">
              <p>By the readable content</p>
              <h3>It is a long established fact that a reader will bedistracted by the readable</h3> 
               <div  >
                 <button className="colsec3" onClick={() => setActive("Firstcard")}>Concept</button>
               <button className="colsec3" onClick={() => setActive("Secondcart")}>Design</button>
               <button className="colsec3" onClick={() => setActive("Thirdcart")}>Deployment</button>
               <button className="colsec3" onClick={() => setActive("fourthcart")}>Support</button>
               </div>
              <div>{active === "Firstcard" && <Card  title="Metus quam cras vehicula ante, potenti eget. Vel est integer, vivamus proin torquent, sodales aliquam tincidunt laoreet est, at in sollicitudin laoreet etiam sit suspendisse, ligula ut vestibulum dapibus et neque. Nibh et risus ipsum amet pede, eros arcu non, velit ridiculus elit, mauris cursus et. Vel cursus sagittis sem nullam odio pede." />}</div>
              <div>{active === "Secondcart" && <Card title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />}</div>
              <div>{active === "Thirdcart" && <Card  title="Nibh et risus ipsum amet pede, eros arcu non, velit ridiculus elit, mauris cursus et. Vel cursus sagittis sem nullam odio pede. Metus quam cras vehicula ante, potenti eget. Vel est integer, vivamus proin torquent, sodales aliquam tincidunt laoreet est, at in sollicitudin laoreet etiam sit suspendisse, ligula ut vestibulum dapibus et neque." />}</div>
              <div>{active === "fourthcart" && <Card  title="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />}</div>
              <Button style={{marginLeft:'100px'}} color="danger b1" >read more</Button>

            </Col>
            <Col  className="colsec32" lg="6" sm="12"><img width="100%" src="images/t1-300x300.jpg" alt="" />  <Button color="danger" onClick={toggle}><AiFillPlayCircle className="icony1"/> </Button></Col>
          </Row>
        </Container>

        <div>

          <Modal  isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
              <video autoPlay controls loop muted  className="modalvid">
                <source src="images/WhatsApp Video 2021-04-29 at 22.00.12.mp4" />
              </video>      </ModalBody>

          </Modal>
        </div>





      </section>
    
    <section className="section4">
<h2>Testimonials</h2>
      <p>Rutrum ante tempus mauris facilisi, leo faucibus,
egestas diamlorem malesu, vitae mauris.</p>

      <Slide2 />
   
    </section>
  
  <section className="section5">
    <h3>Choose a Сlass</h3>
    <p>Rutrum ante tempus mauris facilisi, leo faucibus,
egestas diamlorem malesu, vitae mauris.</p>
<Container >
          <Row>
            <Col lg="6" sm="12"><div className="proddiv"><p>Business Class</p><img src="images/sedan.png " alt=""/></div></Col>
            <Col lg="6" sm="12"><div className="proddiv"><p>Commercial</p><img src="images/minivan.png " alt=""/></div> </Col>
          </Row>
          <Row>
            <Col lg="6" sm="12"><div className="proddiv"><p>Electrical</p><img src="images/sport2.png " alt=""/></div></Col>
            <Col lg="6" sm="12"><div className="proddiv"><p>Meddle Class</p><img src="images/coupe2.png " alt=""/></div> </Col>
          </Row>
          <Row>
            <Col lg="6" sm="12"><div className="proddiv"><p>Vip Cars</p><img src="images/suv2.png" alt=""/></div></Col>
            <Col lg="6" sm="12"><div className="proddiv"><p>Meddle Class</p><img src="images/super4.png" alt=""/></div> </Col>
          </Row>
        </Container>
  </section>
  
  <Footer />
  
    </div>
  )
}

export default Home


