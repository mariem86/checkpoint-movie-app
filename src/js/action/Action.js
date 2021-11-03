import { ADD_MOVIE,Delete_MOVIE,EDIT_MOVIE} from "../const/ActionType"
import{v4 as uuidv4} from 'uuid'
export const addMovie=(payload)=>({
    type:ADD_MOVIE,
    payload:{
          ...payload,
          id: uuidv4(),
    }
})
export const  removeMovie=(payload)=>({
    type:Delete_MOVIE,
    payload
})

export const editMovie=(payload)=>({
    type:EDIT_MOVIE,
    payload
})