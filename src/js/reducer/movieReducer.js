import { ADD_MOVIE,Delete_MOVIE,EDIT_MOVIE} from "../const/ActionType"
import {Movies}  from '../../movie container/Data';
const initialState = {
    Movies
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_MOVIE:
        return { ...state,Movies:[...state.Movies,payload]  }
    case Delete_MOVIE:
        return { ...state, Movies: state.Movies.filter(e => e.id != payload) }
    case EDIT_MOVIE:
        return {...state,Movies:state.Movies.map(e=>e.id===payload.id ? {...payload.newMovie}:e)}

    default:
        return state
    }
}
export default  movieReducer