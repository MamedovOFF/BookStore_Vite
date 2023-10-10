import http from '../constants/http.ts'

export default {
  getBooks(page: number, search?: string) {
    return http.get('/api/books', {
      params: {
        page: page,
        title: search,
      },
    })
  },
  addBook(data: FormData) {
    return http.post('/api/books', data)
  },
}
