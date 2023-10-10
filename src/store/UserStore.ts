import { makeObservable, observable, action } from 'mobx'
import auth from '../api/auth.ts'
import { deleteAllCookies, getCookie } from '../utils/Cookie.ts'

class UserStore {
  isAuth: boolean
  user: {
    id: number
    name: string
    email: string
    email_verified_at: boolean | null
    created_at: string
    updated_at: string
  } | null

  constructor() {
    makeObservable(this, {
      isAuth: observable,
      user: observable,
      login: action.bound,
      signUp: action.bound,
      logout: action.bound,
      checkAuth: action.bound,
    })
    this.isAuth = true
    this.user = null
  }

  async checkAuth() {
    try {
      const xsrf = getCookie('XSRF-TOKEN')
      if (xsrf) {
        const response = await auth.userInfo()
        this.user = response.data
        this.isAuth = true
        return true
      }
      await this.logout()
      this.isAuth = false
      return false
    } catch (e) {
      console.log(e)
      await this.logout()
      this.isAuth = false
      return false
    }
  }

  async login(data: { email: string; password: string }) {
    try {
      await auth.getCsrfCookie()
      const response = await auth.login(data)
      this.user = response.data
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

  async logout() {
    try {
      await auth.logOut()
      deleteAllCookies()
      this.isAuth = false
    } catch (e) {
      console.log(e)
    }
  }
}

export default UserStore
