export function deleteAllCookies() {
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}

export function getCookie(cookie_name: string) {
  const cookie_array = document.cookie.split(';')
  for (let i = 0; i < cookie_array.length; i++) {
    if (cookie_array[i].includes(cookie_name + '=')) {
      return cookie_array[i].split('=')[1]
    }
  }
}
