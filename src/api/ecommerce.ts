import http from '../config/http.ts'

export default {
  getBooks() {
    return http.get('/api/books')
  },
}
