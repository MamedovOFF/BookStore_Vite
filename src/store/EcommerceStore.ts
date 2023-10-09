import { action, makeObservable, observable } from 'mobx'
import { Book } from '../types/BookTypes.ts'
import ecommerce from '../api/ecommerce.ts'
import { deserialize } from '../utils/deserialize.ts'

class EcommerceStore {
  books: { data: Book[]; pagination: Object }
  constructor() {
    makeObservable(this, {
      books: observable,
      getBooks: action.bound,
    })
    this.books = {
      data: [],
      pagination: {},
    }
  }
  async getBooks() {
    const response = await ecommerce.getBooks()
    deserialize(response.data).then((res) => {
      this.books = { data: res, pagination: response.data.meta.pagination }
    })
  }
}

export default EcommerceStore
