import React ,{useState} from 'react';
import UsedCars from "./api/usedcars.json";
import Usedcaritem from "./Usedcaritem";
import {Col,Container ,Row }from "reactstrap";
import Footer from "./components/Footer";

 function Usedcars() {
const [search ,setSearch]= useState('');
const [search2 ,setSearch2]= useState('');
const [search3 ,setSearch3]= useState(0);

  return (
    <div className="allcars">
    <header className="home">
<video autoPlay loop muted>
<source src="images/WhatsApp Video 2021-04-29 at 22.00.12.mp4" />
</video>
<div className="hometext">
<p>Used cars </p>
<h3>The best cars </h3>

</div>
</header>
 <h3>Used Cars</h3>
<Container fluid className="carall">

<div className="detail">

<h3>Used cars</h3>

<form className="forma">
<input  type="text" placeholder='NewCars....' onChange={event=>{setSearch(event.target.value)}} />
<select name="cars" id="cars" onChange={event=>{setSearch2(event.target.value)}} >
      <option value="ابحث عن ماركه"> 
           ابحث عن ماركه
      </option>
       <option value="الفا روميو"> 
           الفا روميو 
      </option>
      <option value="أودى"> 
      أودى
      </option>
      <option value="بى ام دابليو "> 
      بى ام دابليو
      </option>
      <option value="هوندا"> 
      هوندا
      </option>
      <option value="هيونداي"> 
      هيونداي
      </option>
   </select>
  
 <input type="range"   id="range" name="range" min="0" step="5000" max="1000000" onChange={event=>{setSearch3(event.target.value)}}/><br />
   <output style={{color: 'white'}} name="textrange" id="textrange" for="range" >{search3} </output> <label style={{color: 'white'}}>EGP</label>
</form>

<h4>the best cars</h4>
<p>we have the bst cars  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, doloremque autem sit ab optio nisi? Numquam laudantium facere ullam corporis quidem consectetur! Ad accusantium harum modi earum atque dolore architecto similique quae fuga? Voluptas voluptatibus veniam non sequi magnam necessitatibus!
</p></div>

<div>
<Row>    
{UsedCars.filter((usedcar)=>{
  if(search==="" && search2==="ابحث عن ماركه"){ return usedcar;}
  else if(usedcar.name.toLowerCase().includes(search.toLowerCase()) && usedcar.description.includes(search2) ){
    if(search3==0){ return usedcar;}
    else if(usedcar.price==search3){
      return usedcar;
    }
   
  }
 
}).map((usedcar) => (
    <Col lg="3" md="4" key={usedcar.id} >
          <Usedcaritem   usedcar={usedcar} />
     </Col>))}

</Row>
</div>
</Container>
<Footer />
</div>
  )
}

export default  Usedcars
