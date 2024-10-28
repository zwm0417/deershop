import Cookies from 'js-cookie'
const TokenKey = 'Assets-Token'
const refreshToken = 'refresh_token' // token
const tokenTime = 'token_time' // token 超期时间点(存时间戳)
const tokenExpires = 'token_expires' // token 超期时长

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRefreshToken() {
  return Cookies.get(refreshToken)
}

export function setRefreshToken(data) {
  return Cookies.set(refreshToken, data)
}

export function removeRefreshToken() {
  return Cookies.remove(refreshToken)
}

export function getTokenTime() {
  return parseInt(Cookies.get(tokenTime))
}

export function setTokenTime(data) {
  return Cookies.set(tokenTime, data)
}

export function removeTokenTime() {
  return Cookies.remove(tokenTime)
}

export function getTokenExpires() {
  return parseInt(Cookies.get(tokenExpires))
}

export function setTokenExpires(data) {
  return Cookies.set(tokenExpires, data)
}

export function removeTokenExpires() {
  return Cookies.remove(tokenExpires)
}
