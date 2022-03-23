// internal imports
import { GLOBALTYPES } from "../action/globalTypes"

// initial state
const initialState = {
  SUC_ALERT : { on : false },
  ERR_ALERT : { on : false },
  SUC_TOAST : { on : false },
  LOADING : false
}

// reducer function 
const globalReducer = ( state = initialState, action ) => {
   switch(action.type){
     case GLOBALTYPES.SUC_ALERT : return {
        ...state,
        SUC_ALERT : action.payload  
     }

     case GLOBALTYPES.ERR_ALERT : return {
        ...state,
        ERR_ALERT : action.payload  
     }

     case GLOBALTYPES.SUC_TOAST : return {
        ...state,
        SUC_TOAST : action.payload  
     }

     case GLOBALTYPES.LOADING : return {
        ...state,
        LOADING : action.payload  
     }

     default : return state
   }
}

export default globalReducer