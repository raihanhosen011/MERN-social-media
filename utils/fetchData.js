import axios from 'axios'

// =================  GET DATA =================
export const getData = async (url,token) => {
  const res = await axios.get(`/api/${url}`, {
    headers : {
      Authorization : token  
    }  
  })

  return res
}


// ================= POST DATA =================
export const postData = async (url,post,token) => {
  const res = await axios.post(`http://localhost:8080/api/${url}`, post, {
    headers : {
      Authorization : token  
    }  
  })

  return res
}


// ================= PUT DATA =================
export const putData = async (url,post,token) => {
  const res = await axios.put(`/api/${url}`, post, {
    headers : {
      Authorization : token  
    }  
  })

  return res
}


// ================= PATCH DATA =================
export const patchData = async (url,post,token) => {
  const res = await axios.patch(`/api/${url}`, post, {
    headers : {
      Authorization : token  
    }  
  })

  return res
}


// ================= DELETE DATA =================
export const deleteData = async (url,token) => {
  const res = await axios.delete(`/api/${url}`, {
    headers : {
      Authorization : token
    }
  })

  return res
}