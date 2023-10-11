import http from '../constants/http.ts'

export default {
  getAuthors() {
    return http.get('/api/authors')
  },
}
