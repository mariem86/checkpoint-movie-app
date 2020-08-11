import React from 'react'
import Moviecard from './Moviecard '

function Movielist({movies}) {
    return (
        
        <div className="movie-liste">
           
           { movies.map((movie,id)=>
         
          
         
            <Moviecard className="movie-card"  key={movie.id}  movie={movie}  />,
           
            
           
       
           )
           }
           
        </div>
    ) 
}
    
    export default Movielist;






