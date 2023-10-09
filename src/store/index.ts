import UserStore from './UserStore.ts'
import EcommerceStore from './EcommerceStore.ts'

class Store {
  userStore = new UserStore()
  ecommerce = new EcommerceStore()
}

export default Store
