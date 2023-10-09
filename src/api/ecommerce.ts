import http from '../constants/http.ts'

export default {
  getBooks(page: number) {
    return http.get('/api/books', {
      params: {
        page: page,
      },
    })
  },
}
