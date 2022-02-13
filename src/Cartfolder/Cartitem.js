import React, { useState } from 'react';
import { connect } from "react-redux";
import { Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { removefromcart } from "./action/Action";
import emailjs from 'emailjs-com';

function Cartitem(props) {
  const { item, index } = props;
  const { newcar } = item;
  const [modal, setModal] = useState(false);
  const {

    className
  } = props;
  const toggle = () => setModal(!modal);
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_jqnwkye', 'template_gfxy6kl', e.target, 'user_g1irYNKVOuewluAX01nOK')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }
  return (


    <Col lg="4" md="5" >
      <Card className="producty">
        <CardBody style={{ display: 'flex' }}>
          <CardImg height="200px" className="img1234" src={newcar.img} />
          <div>
            <CardTitle >{newcar.name}</CardTitle>

            <CardSubtitle tag="h6" className="mb-2 text-muted"> {newcar.description} <br /> <br />{newcar.price + newcar.price * (3 / 100) + newcar.price * (1.5 / 100)}EGP
              </CardSubtitle>
              <Button className="buttonx" outline color="success" onClick={toggle}>Buy </Button>
           
            <Button className="buttonx" onClick={() => props.removefromcart(index)} outline color="danger"> Remove</Button>
            
            <div>

              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                  <div className="formbuy">
                  <form className=" contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <div><input type="text" disabled placeholder="subject" name="subject" value={newcar.name}/></div>
                    <div><input type="text" placeholder="First Name" name="name" /><input placeholder="Second Name" type="text" name="name2" /> </div>  
                    <div><input placeholder="Email" type="email" name="user_email" /><input placeholder="Phone" type="phone" name="phone" /></div>
                    <div><input name="choice" disabled  type="text" className="inputchoice" value={`your choice: ${newcar.name}, Brand:${newcar.description}, price: ${newcar.price} `}/></div>
                    <div><textarea placeholder="Message" name="message"/></div>
                    <input type="submit" value="Send" />
                  </form>
                  </div>
                </ModalBody>

              </Modal>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>




  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removefromcart: (index) => dispatch(removefromcart(index))
  }
}
export default connect(null, mapDispatchToProps)(Cartitem);