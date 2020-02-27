import request from '../utilis/request'

export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'

export const setAuthentication = claim => ({
  type: SET_AUTHENTICATION,
  payload: claim
})

// export const addUser = () => {
//   return dispatch => {

//   }
// }

export const getUser = () => {
return dispatch => {
  request('/auth/token')
.then(response => {console.log(response)
  return this.props.setAuthentication(response.data)})
.catch(err => this.props.setAuthentication(null))
  }
}