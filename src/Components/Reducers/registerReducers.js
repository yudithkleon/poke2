import { types } from "../Reducers/Type";


export const registerReducer=(state ={}, action)=> {

   switch (action.type) {
           
         case types.register:
         return{
           email: action.payload.email,
           password: action.payload.password,
           name: action.payload.name

         } 
           case types.listar:
              return{
                 listar: [...action.payload]
              }
       default:
           return state;
   }
}
