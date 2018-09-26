import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const TokenIdKey = 'Admin-ID-Token'
const LanguageKey = 'language'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

//获取id的cookie
export function getIdToken() {
  return Cookies.get(TokenIdKey)
}
//设置id的cookie
export function setIdToken(token) {
  return Cookies.set(TokenIdKey, token)
}

export function removeIdToken() {
  return Cookies.remove(TokenIdKey)
}
