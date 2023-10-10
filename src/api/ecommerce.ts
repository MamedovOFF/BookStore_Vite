import http from '../constants/http.ts'

export default {
  getBooks(page: number) {
    return http.get('/api/books', {
      params: {
        page: page,
      },
    })
  },
  addBook(data: FormData) {
    return http.post('/api/books', data)
  },
}
