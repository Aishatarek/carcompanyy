import React from 'react'
import emailjs from 'emailjs-com';
import Footer from './Footer';
import { FiPhoneCall} from 'react-icons/fi';
import { ImLocation2} from 'react-icons/im';
import { GiTrophyCup} from 'react-icons/gi';
import { HiOutlineKey} from 'react-icons/hi';
import { AiOutlineSetting} from 'react-icons/ai';
import {Container, Row, Col   } from 'reactstrap';

 
    export default function Contactus() {
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_jqnwkye', 'template_gfxy6kl', e.target, 'user_g1irYNKVOuewluAX01nOK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
 e.target.reset();   }
      return (
        <div>
       
                <header className="home">
        <video autoPlay loop muted>
          <source src="images/WhatsApp Video 2021-04-29 at 22.00.12.mp4" />
        </video>
        <div className="hometext">
          <p>contact us </p>
          <h3>The best theme for creating a website for the sale and rental of cars</h3>
        </div>
      </header>
   
      <section>
<Container className="sectioncard">
<Row className="sectionrow">
 <Col lg="3" sm="12" className="cardicon"><FiPhoneCall className="icon1" /> <h3>+ 7 100 234 7892 34</h3><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p></Col>
 <Col lg="3" sm="12" className="cardicon"> <ImLocation2 className="icon1" /> <h3>685 Lane Drive St. California</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p></Col>
 <Col lg="3" sm="12" className="cardicon"><GiTrophyCup className="icon1" />  <h3> info@quattro.com</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium vel repellendus inventore, eveniet, repudiandae aliquid fugit cum corrupti accusamus pariatur perferendis adipisci aspernatur, laboriosam magni voluptas ipsam omnis harum.</p></Col>
</Row>
</Container>
</section>
<section className="forma">
<Container >
<Row >
 <Col lg="4" sm="12"><div><h3><HiOutlineKey className="iconx"/>Monday to Friday: <span>9:00 AM to 6:00 PM</span></h3><h3>Saturday: <span>9:00 AM to 5:00 PM</span></h3><h3>Sunday: <span>Closed</span></h3></div><div><h3><ImLocation2 className="iconx"/>Office location : <span> – our office consists of three buildings and is located in the heart of the city. You can easily reach us by metro or by land transport</span></h3></div><div><h3><AiOutlineSetting  className="iconx"/>Address: <span>685 Lane Drive St. California</span></h3><h3>Phone: <span>+010 234 7892 34</span></h3><h3>Fax: <span>+010 435 5798982</span></h3><h3>Email: <span>info@quattro.com</span></h3></div></Col>
 <Col lg="8" sm="12"><form className=" contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <h3>contact us</h3>
      <div>
        <label>subject:</label><input type="text" name="subject"/>
        <label>Name:</label><input type="text" name="name" /></div>
        <br /><div>
        <label>Email:</label><input type="email" name="user_email" />
        <label>Phone:</label><input type="number" name="phone" />
        </div> 
      <div><p>Message:</p><textarea name="message" /></div> 
      <input type="submit" value="Send" /> 

          
    </form> </Col>
</Row>
</Container>
</section>
        
<Footer />
          
        </div>
      )
    }
   
    

