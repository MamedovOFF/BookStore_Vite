import http from '../constants/http.ts'

export default {
  getBooks() {
    return http.get('/api/books')
  },
}
