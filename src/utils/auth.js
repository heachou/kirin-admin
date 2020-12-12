
const UserKey = 'USER'

export function getUser() {
  return JSON.parse(sessionStorage.getItem(UserKey))
}

export function setUser(data) {
  return sessionStorage.setItem(UserKey, JSON.stringify(data))
}

export function removeUser() {
  return sessionStorage.removeItem(UserKey)
}
