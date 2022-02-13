import React, { Component } from 'react'
import { getById } from "./api/Usedcars";
import Slider from "react-slick";
import Footer from "./components/Footer";
import { addToCart } from "./Cartfolder/action/Action";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import { Button } from "reactstrap";
class Usedcardetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      quantity: 1,
      quantity3: '',
      quantity2: '',
     
      usedcar: {},

    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;


    getById(parseInt(id))
      .then(usedcar => {
        this.setState({
            usedcar
        });
      })
    
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  calc = (event) => {
    const value = event.target.value;

    this.setState({
      quantity3: value
    })
  }
  addToCart = (usedcar) => {
    this.props.addToCart(usedcar, this.state.quantity);
}
  calc2 = (event) => {
    const value2 = event.target.value;

    this.setState({
      quantity2: value2
    })
  }

  render() {
    const usedcar = this.state.usedcar;
    const quantity3 = this.state.quantity3;
    const quantity2 = this.state.quantity2;

    return (
      <div >

        <header className="datailcar">
          <img src={usedcar.img} className="mainimg" alt="" />
          <div className="datailcartext">
            <p>{usedcar.description}</p>
            <h3>{usedcar.name}</h3>

          </div>
        </header>
        <Container fluid>
  <Row>
        <Col lg="4" sm="12">       

          <div className="carddetail">
            
            <h5>{usedcar.name}</h5>
            <p>{usedcar.description}</p>
            <p >price : {usedcar.price}EGP</p>
     
          <select onChange={this.calc} >
              <option value=" دفعه المقدم"  >
                دفعه المقدم
                          </option>
              <option value=" 25  "  >
                25%
                          </option>
              <option value=" 40 "  >
                40%
                          </option>
              <option value=" 50 "  >
                50%
                          </option>
            </select>
            <label>   دفعه المقدم</label>  
   <br />    
            <select onChange={this.calc2}>
              <option value="عدد السنوات "  >

                عدد السنوات
                            </option>
              <option value=" 1 "  >
                1
                          </option>
              <option value=" 2 "  >
                2
                          </option>
              <option value=" 3 "  >
                3
                          </option>
              <option value=" 4 "  >
                4
                          </option>
              <option value=" 5 "  >
                5
                          </option>
              <option value=" 6 "  >
                6
                          </option>
              <option value=" 7 "  >
                7
            </option>
            </select>       
            <label> عددالسنوات</label>  
            <p>{usedcar.price + usedcar.price * (3 / 100) + usedcar.price * (1.5 / 100)}الاجمالى</p>
            <p>{usedcar.price * 3 / 100} EGP:تامين</p>
            <p>{usedcar.price * 1.5 / 100}EGP:رسوم اداريه</p>
            <p>المقدم:{(usedcar.price + usedcar.price * (3 / 100) + usedcar.price * (1.5 / 100)) * quantity3 / 100}</p>
            <p>شهريا:{(usedcar.price + usedcar.price * (3 / 100) + usedcar.price * (1.5 / 100)) / (quantity2 * 12)} </p>
            
            <Button onClick={() => this.addToCart(usedcar)} outline color="danger">Add to compare</Button>
          </div>
        </Col>  <Col lg="4" sm="12">  
          <div className="detainewcar">

            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
            >
              <div>
                <img src={usedcar.img} className="shownimg" alt="" />
              </div>
              <div>
                <img src={usedcar.img2} className="shownimg" alt="" />
              </div>
              <div>
                <img src={usedcar.img3} className="shownimg" alt="" />
              </div>
              <div>
                <img src={usedcar.img4} className="shownimg" alt="" />
              </div>
              <div>
                <img src={usedcar.img5} className="shownimg" alt="" />
              </div>

            </Slider>

            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <img src={usedcar.img} alt="" />
              </div>
              <div>
                <img src={usedcar.img2} alt="" />
              </div>
              <div>
                <img src={usedcar.img3} alt="" />
              </div>
              <div>
                <img src={usedcar.img4} alt="" />
              </div>
              <div>
                <img src={usedcar.img5} alt="" />
              </div>
            </Slider>
          </div>

</Col>
    
   </Row>
   </Container>   
        <Footer />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity))
  }
}
export default connect(null, mapDispatchToProps)(Usedcardetail)


