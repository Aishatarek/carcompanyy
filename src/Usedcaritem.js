import React from "react";
import {Card,CardImg,CardBody, CardTitle,CardSubtitle,Button} from "reactstrap"
import {Link } from "react-router-dom";



export default function Usedcaritem(Props){
  const {usedcar}= Props;
 
  return(

         <div>

          <Card className="producty">
          <CardBody >
          <CardImg width="100%" height="200px" src={usedcar.img}  />
   
          <CardTitle >{usedcar.name}</CardTitle>
      
          <CardSubtitle tag="h6" className="mb-2 text-muted">{usedcar.description}</CardSubtitle>
          <div >
           <p className="actualprice">{usedcar.price}EGP </p>
          </div> 
          <Link  to={"/Usedcars/" + usedcar.id} > <Button  color="danger"> view</Button></Link>
        </CardBody>
      </Card>
    

        </div>


  )

}