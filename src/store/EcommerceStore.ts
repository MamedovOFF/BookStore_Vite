import { action, makeObservable, observable } from 'mobx'
import { Book } from '../types/BookTypes.ts'
import ecommerce from '../api/ecommerce.ts'
import { deserialize } from '../utils/deserialize.ts'

class EcommerceStore {
  books: {
    data: Book[]
    pagination?: {
      total_pages: number
      current_page: number
    }
  }
  constructor() {
    makeObservable(this, {
      books: observable,
      getBooks: action.bound,
    })
    this.books = {
      data: [],
    }
  }
  async getBooks(page: number) {
    const response = await ecommerce.getBooks(page)
    deserialize(response.data).then((res) => {
      this.books = { data: res, pagination: response.data.meta.pagination }
    })
  }

  async addBook(data: FormData) {
    try {
      await ecommerce.addBook(data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default EcommerceStore
