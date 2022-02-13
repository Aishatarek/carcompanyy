import React ,{useState} from 'react';
import {Container, Row, Col , Button , Modal, ModalHeader, ModalBody } from 'reactstrap';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { GiCarWheel  ,GiCutDiamond ,GiCarSeat ,GiCarDoor ,GiCarKey} from 'react-icons/gi';
import { IoCarSportOutline } from 'react-icons/io5';
import { AiFillPlayCircle } from 'react-icons/ai';
import Slider from "react-slick";
import Footer from "./Footer";
import {Link } from "react-router-dom";
function Aboutus(props) {

    const {
  
      className
    } = props;
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
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
        <div>
        <header className="home">
<video autoPlay loop muted>
<source src="images/WhatsApp Video 2021-04-29 at 22.00.12.mp4" />
</video>
<div className="hometext">
<p>About US</p>
<h3>The best theme for creating a website for the sale and rental of cars</h3>
<Link to="/" exact > <Button color="danger b1" > Home </Button></Link>
</div>
</header>
<section>
<Container className="sectioncard">
<Row className="sectionrow">
 <Col lg="3" sm="12" className="cardicon"><GiCutDiamond className="icon1" /> <h3>Official Dealer</h3><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p><Link to="/Contactus" ><Button color="danger b1" >Ask a question</Button></Link></Col>
 <Col lg="3" sm="12" className="cardicon"> <IoCarSportOutline className="icon1" /> <h3>Fast Clearance</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p><Link to="/Contactus" ><Button color="danger b1" >Ask a question</Button></Link></Col>
 <Col lg="3" sm="12" className="cardicon"><GiCarWheel className="icon1" />  <h3>Warranty Service</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p><Link to="/Contactus" ><Button color="danger b1" >Ask a question</Button></Link></Col>
</Row>
</Container>
</section>
<section className="secinform">
<Container fluid>
<Row >
<Col lg="6" sm="12" >
  
        <p>Basic auto security systems</p>
        <h3>It is a long established fact that a reader will bedistracted by the readable</h3>
<img src="images/modal.jpg" alt=""/>

    </Col>
    <Col lg="6" sm="12" >
    <div>
        <div>
            <h3><GiCarSeat style={{color: '#ff3837'}}/> Active passenger protection with 18 airb</h3>
            <p>Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis, nunc leo eu maecenas nascetur duis viverra nam vitaemauris erat rutrum deserunt sed ratione voluptatem sequi nesciunt</p>
        </div>
        <div>
            <h3><GiCarDoor style={{color: '#ff3837'}}/> Active passenger protection with 18 airb</h3>
            <p>Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis, nunc leo eu maecenas nascetur duis viverra nam vitaemauris erat rutrum deserunt sed ratione voluptatem sequi nesciunt</p>
        </div>
        <div>
            <h3><GiCarKey style={{color: '#ff3837'}}/> Active passenger protection with 18 airb</h3>
            <p>Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis, nunc leo eu maecenas nascetur duis viverra nam vitaemauris erat rutrum deserunt sed ratione voluptatem sequi nesciunt</p>
        </div>
    </div>
    </Col>
   </Row>
   </Container> </section>
<section className="slidecard">
<Slider {...settings}>

 <div className="cardtest">

 <img  src="images/t2-300x300.jpg" alt="" />

  <h3>
  Linda Samuel 
  </h3>
  <p>Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectusDapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus..</p>
  <div><FiYoutube className="iconso"/> <FiFacebook className="iconso"/> <FiTwitter className="iconso"/> <AiOutlineInstagram className="iconso"/></div>

</div>

<div  className="cardtest">


<img  src="images/photo-1527593167147-e9c94a5883e6.jpg" alt="" />

  <h3>
  sandy Mask
  </h3>
  <p>Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.</p>
  <div><FiYoutube className="iconso"/> <FiFacebook className="iconso"/> <FiTwitter className="iconso"/> <AiOutlineInstagram className="iconso"/></div> 

</div>


<div className="cardtest">


<img  src="images/t3-300x300.jpg" alt="" />

  <h3>
  Sandra Mask
  </h3>
  <p>Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.</p>
  <div><FiYoutube className="iconso"/> <FiFacebook className="iconso"/> <FiTwitter className="iconso"/> <AiOutlineInstagram className="iconso"/></div>

</div>


<div  className="cardtest">

<img  src="images/t4-300x300.jpg" alt="" />

  <h3>
  mark Samuel 
  </h3>
  <p>Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.Dapien accumsan arcu. Id aliquet porta posuere massa libero, dui laoreet in ultricies id. Nascetur wisi senectus.</p>
  <div><FiYoutube className="iconso"/> <FiFacebook className="iconso"/> <FiTwitter className="iconso"/> <AiOutlineInstagram className="iconso"/></div>


</div>

</Slider>
</section>
<section>

<div  className="colsec33" lg="6" sm="12"><img src="images/55994_1619527366.png" alt="" /> <h3>Our video</h3> <Button color="danger" onClick={toggle}><AiFillPlayCircle className="icony1"/> </Button></div>




<Modal  isOpen={modal} toggle={toggle} className={className}>
 <ModalHeader toggle={toggle}></ModalHeader>
 <ModalBody>
   <video autoPlay controls loop muted  className="modalvid">
     <source src="images/test4-1542298376.mp4" />
   </video>      
   </ModalBody>

</Modal>


</section>



<Footer />
 </div>
    )
}

export default Aboutus


