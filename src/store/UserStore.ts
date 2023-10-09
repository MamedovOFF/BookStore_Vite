import { makeObservable, observable, action } from 'mobx'
import auth from '../api/auth.ts'

class UserStore {
  isAuth: boolean
  constructor() {
    makeObservable(this, {
      isAuth: observable,
      login: action.bound,
      signUp: action.bound,
    })
    this.isAuth = false
  }
  async login(data: { email: string; password: string }) {
    try {
      await auth.getCsrfCookie()
      await auth.login(data)
      this.isAuth = true
    } catch (e) {
      console.log(e)
      this.isAuth = false
    }
  }

  async signUp(data: { email: string; password: string; name: string }) {
    try {
      await auth.signUp(data)
      await this.login({ email: data.email, password: data.password })
    } catch (e) {
      console.log(e)
    }
  }
}

export default UserStore
