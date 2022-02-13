import React, { Component } from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { Container, Row, Col } from 'reactstrap';
import "../App.css";
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container >
                    <Row>
                        <Col lg="4" sm="12"><h3>About Us</h3><p>Address: 685 Lane Drive St. California, Auto club 33020 <br />Phone: +010 234 7892 34<br />Fax: +010 234 7892 34<br />E-mail: info@quattro.com<br /> </p>
                            <div><FiYoutube className="iconso"/> <FiFacebook className="iconso"/> <FiTwitter className="iconso"/> <AiOutlineInstagram className="iconso"/></div></Col>
                        <Col lg="4" sm="12"><h3>pages</h3><ul><li>Home</li><li>Cars Listing</li><li>Shop</li><li>Blog</li><li>Contacts</li></ul></Col>
                        <Col lg="4" sm="12"><h3>Question</h3><input placeholder="Name*" type="text"/><input type="phone" placeholder="Phone"/><textarea placeholder="Enter Message"/><input  type="submit"/></Col>
                    </Row>
                </Container>
                <div className="copyright">© 2020–2021 aisha tarek</div>
            </div>
        )
    }
}

export default Footer



