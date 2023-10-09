import http from '../constants/http.ts'

export default {
  getCsrfCookie() {
    return http.get('/sanctum/csrf-cookie')
  },
  login(data: { email: string; password: string }) {
    return http.post('/api/login', data)
  },
  signUp(data: { email: string; password: string; name: string }) {
    return http.post('/api/sign-up', data)
  },
  logOut() {
    return http.post('/api/logout', {})
  },
}
