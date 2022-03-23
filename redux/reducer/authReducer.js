// internal imports 
import { GLOBALTYPES } from '../action/globalTypes'

// set initial state
const initialState = {}

// set reducer function
const authReducer = (state = initialState, action) => {
  switch(action.type){
      case GLOBALTYPES.AUTH : return action.payload
    
      default : return state
  }
}

export default authReducer