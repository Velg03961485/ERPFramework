import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserId = 'UserId'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function getUserId() {
  return Cookies.get(UserId)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function setUserId(id) {
  return Cookies.set(UserId, id)
}


export function removeToken() {
  return Cookies.remove(TokenKey)
}
