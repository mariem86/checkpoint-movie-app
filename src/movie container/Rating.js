import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component'
 function Rating({ starRating}) {
     const [rating,setRating]=useState(0);
     const onStarClick=(nextValue,preValue,name)=>{
      setRating(nextValue);
      starRating(nextValue)
 }
    return (
        <div>
            <StarRatingComponent starCount={5} value={rating} onStarClick={onStarClick}/>
        </div>
    )
}
export default Rating