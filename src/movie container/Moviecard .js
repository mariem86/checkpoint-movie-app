import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { Card, CardImg,  CardBody,CardTitle } from 'reactstrap';
import {removeMovie} from "../js/action/Action"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
function Moviecard({movie}) {
    const dispatch = useDispatch()
    const deleteMovie=()=>{
      dispatch(removeMovie(movie.id))
    }
    return (
        
        <div  >
             <Card  style={{width:"18rem"}} >
            <CardBody>
           <CardImg  variant="top" src={movie.image} alt="" width="200" height="300"/>
           <CardTitle style={{color: "black"}}>{movie.name}</CardTitle>
           
           <StarRatingComponent value={movie.rating}/>
           
           </CardBody>
           <div className='mr-grid summary-row'>
             <Link to={`/description/${movie.id}`} >Read discription of this movie</Link>
           
          </div>
           <button className='watch-btn' onClick={deleteMovie}>
               Delete
              </button>
           </Card>
        </div>
        

    )
}
export default Moviecard;

