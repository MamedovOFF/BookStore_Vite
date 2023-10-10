import UserStore from './UserStore.ts'
import EcommerceStore from './EcommerceStore.ts'

class Store {
  userStore = new UserStore()
  ecommerceStore = new EcommerceStore()
}

export default Store
