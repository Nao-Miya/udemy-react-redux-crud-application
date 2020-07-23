import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'http://localhost:8000/api/v1'

export const readEvents = () => async dispatch =>{
   const response = await axios.get(`${ROOT_URL}/events`)
   dispatch({type: READ_EVENTS, response})
}