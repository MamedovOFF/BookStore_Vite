import { makeObservable, observable } from 'mobx'
import { BookData } from '../types/BookTypes.ts'
import ecommerce from '../api/ecommerce.ts'
import { deserialize } from '../utils/deserialize.ts'

class EcommerceStore {
  books: BookData[]
  constructor() {
    makeObservable(this, {
      books: observable,
    })
    this.books = []
  }
  async getBooks() {
    const books = await ecommerce.getBooks()
    deserialize(books.data).then((res) => {
      console.log(res)
    })
  }
}

export default EcommerceStore
