import { action, makeObservable, observable, computed } from 'mobx'
import { Book } from '../types/BookTypes.ts'
import ecommerce from '../api/ecommerce.ts'
import { deserialize } from '../utils/deserialize.ts'
import { Author } from '../types/AuthorTypes.ts'

class EcommerceStore {
  books: {
    data: Book[]
    pagination?: {
      total_pages: number
      current_page: number
    }
  }
  authors: Array<Author>
  constructor() {
    makeObservable(this, {
      books: observable,
      authors: observable,
      getBooks: action.bound,
      getAuthors: action.bound,
      getAuthor: computed,
    })
    this.books = {
      data: [],
    }
    this.authors = []
  }
  async getBooks(page: number, search?: string) {
    const response = await ecommerce.getBooks(page, search)
    deserialize(response.data).then((res) => {
      this.books = { data: res, pagination: response.data.meta.pagination }
    })
  }

  async getBook(id: string) {
    const response = await ecommerce.getBook(id)
    return await deserialize(response.data)
  }
  async addBook(data: FormData) {
    try {
      await ecommerce.addBook(data)
    } catch (e) {
      console.log(e)
    }
  }

  async getAuthors() {
    try {
      const response = await ecommerce.getAuthors()
      this.authors = response.data
    } catch (e) {
      console.log(e)
    }
  }

  get getAuthor() {
    return this.authors.find((el) => el.id)
  }
}

export default EcommerceStore
