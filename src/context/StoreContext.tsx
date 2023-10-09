import { createContext, useContext } from 'react'
import Store from '../store'

const StoreContext = createContext<Store>({} as Store)

export const useStore = () => useContext(StoreContext)
export default StoreContext
