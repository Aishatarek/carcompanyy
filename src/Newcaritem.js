import React from "react";
import {Card,CardImg,CardBody, CardTitle,CardSubtitle,Button} from "reactstrap"
import {Link } from "react-router-dom";



export default function Newcaritem(Props){
  const {newcar}= Props;
 
  return(

         <div>

          <Card className="producty">
          <CardBody >
          <CardImg width="100%" height="200px" src={newcar.img}  />
   
          <CardTitle >{newcar.name}</CardTitle>
      
          <CardSubtitle tag="h6" className="mb-2 text-muted">{newcar.description}</CardSubtitle>
          <div >
           <p className="actualprice">{newcar.price}EGP </p>
          </div> 
          <Link  to={"/Newcars/" + newcar.id} > <Button  color="danger"> view</Button></Link>
        </CardBody>
      </Card>
    

        </div>


  )

}