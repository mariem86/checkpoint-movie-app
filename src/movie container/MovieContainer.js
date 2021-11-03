import React,{ useState } from 'react'
import Movieliste from'./Movieliste'
import{v4 as uuidv4} from 'uuid'
import Modal from './Modal'
import Search from './Search'
import Rating from './Rating'
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function MovieContainer() {
 const movies = useSelector((state) => state.movieReducer.Movies);

  /*const[movies,setMovies]  = useState([
    {id:uuidv4(),name:"The Dark Knight Rises",image:"https://fr.web.img2.acsta.net/medias/nmedia/18/83/56/27/20116286.jpg",rating:4},
    {id:uuidv4(),name:"Sherlock Holmes",image:"https://fr.web.img2.acsta.net/medias/nmedia/18/67/70/22/19227477.jpg",rating:2},
    {id:uuidv4(),name:"Pulp Fiction",image:'https://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg',rating:5},
   
    ]);*/
    const [searchTerm, setSearchTerm] = useState("");
     const [star, setStart]=useState(0)
   
  /*const add=(id,name,image,rating)=>{
  const newMovie={id:id,name:name,image:image,rating:rating}
  setMovies([...movies,newMovie])
}*/
const results = movies.filter(movie =>
 ( movie.name.toLowerCase().includes(searchTerm.toLowerCase())&&(movie.rating>=star))
);
    const search=(input) => {
        setSearchTerm(input)
      }
  const starRating=(input)=>{
    setStart(input)
      } 
  return (
    <div className="App">
       <Search search={search}/>
       <Rating  starRating={(valueRating)=>starRating(valueRating)}/>
      <Movieliste  movies={results}/*{movies.filter(movie =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
      )}*/  />
     <Modal  />
     
    </div>
  );
}
