// internal imports
import { GLOBALTYPES } from "../action/globalTypes"

// initial state
const initialState = {
  SUC_ALERT : { msg : "", type : "success", link : "", size : "sm", open : false },
  ERR_ALERT : { msg : "", type : "warning", link : "", size : "sm", open : false },
  SUC_TOAST : { },
  LOADING : false
}

// reducer function 
const globalReducer = ( state = initialState, action ) => {
   switch(action.type){
     case GLOBALTYPES.SUC_ALERT : return {
        ...state,
        SUC_ALERT : {
           ...state.SUC_ALERT,
           open : true,
           msg : action.payload?.msg,
           link : action.payload?.link,
           size : action.payload?.msg?.length > 40 ? 'lg' : 'sm'
        }
     }

     case GLOBALTYPES.ERR_ALERT : return {
        ...state,
        ERR_ALERT : {
            ...state.ERR_ALERT,
            open : true,
            msg : action.payload?.msg,
            link : action.payload?.link,
            size : action.payload?.msg?.length > 40 ? 'lg' : 'sm'
        }
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