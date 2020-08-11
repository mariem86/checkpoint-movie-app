import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { Card, CardImg,  CardBody,CardTitle } from 'reactstrap';

function Moviecard({movie}) {
    
    return (
        
        <div  >
             <Card  style={{width:"18rem"}} >
            <CardBody>
           <CardImg  variant="top" src={movie.image} alt="" width="200" height="300"/>
           <CardTitle style={{color: "black"}}>{movie.name}</CardTitle>
           <StarRatingComponent value={movie.rating}/>
            
           </CardBody>
           </Card>
        </div>
        

    )
}
export default Moviecard;

