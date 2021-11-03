import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Card, CardImg,  CardBody,CardTitle } from 'reactstrap';


export default function Description(props) {
   
 const movies = useSelector((state) => state.movieReducer.Movies);
 
const movie= movies.find(p => p.id === Number(props.match.params.id));
var movieData;
if( movie)
movieData = <div>
   
<Card  style={{width:"18rem"}} >
<CardBody>
<CardImg  variant="top" src={movie.image} alt="" width="200" height="300"/>
<CardTitle style={{color: "black"}}>{movie.name}</CardTitle>

<p>{movie.description}</p>

</CardBody>
</Card>
</div>;
else

return(
    <div >
      

         {movieData} 
      </div>
   
)

}
