// internal imports
import { GLOBALTYPES } from './globalTypes'
import { postData } from '../../utils/fetchData'

// ----------- SIGN UP -------------
export const signUp = (payload) => async (dispatch) => {
  try {
    
    dispatch({ type : GLOBALTYPES.LOADING, payload : true })

    const res = await postData('signup', payload)

    if(!res.data.errors){
        const toastData = {
            title : res.data.succesMsg,
            desc : `Congratulations ${res.data.user.fullname}, you have successfully created devbook account`
        }

        dispatch({ 
            type : GLOBALTYPES.AUTH, 
            payload : {
              token : res.data.token,
              user : res.data.user  
            }
        })
        dispatch({ type : GLOBALTYPES.TOAST, payload : toastData })
    }else{
      let error = res.data.errors
      dispatch({ type : GLOBALTYPES.ERR_ALERT, payload : {msg : error.common.msg} })  
    }

    dispatch({ type : GLOBALTYPES.LOADING, payload : false })

  } catch (err){
    dispatch({
      type : GLOBALTYPES.ERR_ALERT,
      payload : {
        data : {msg : err.message}
      }
    })
  }  
}


// ----------- SIGN IN -------------
export const signIn = (payload) => async (dispatch) => {
  try {
     
    dispatch({ type : GLOBALTYPES.LOADING, payload : true })

    const res = await postData('signin', payload)

    if(!res.data.errors){
        dispatch({ 
            type : GLOBALTYPES.AUTH, 
            payload : {
              token : res.data.token,
              user : res.data.user  
            }
        })
        dispatch({ 
            type : GLOBALTYPES.SUC_ALERT, 
            payload : { msg : res.data.succesMsg } 
        })
    }else{
        let error = res.data.errors
        dispatch({ type : GLOBALTYPES.ERR_ALERT, payload : {msg : error.common.msg} })  
    }

    dispatch({ type : GLOBALTYPES.LOADING, payload : false })

  } catch (err){
    dispatch({
       type : GLOBALTYPES.ERR_ALERT,
       payload : {
         data : { msg : err.message }
       }
    })
  }  
}