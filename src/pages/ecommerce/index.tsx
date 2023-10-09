import { useStore } from '../../context/StoreContext.tsx'
import { useEffect } from 'react'

const Ecommerce = () => {
  const {
    ecommerce: { getBooks },
  } = useStore()
  useEffect(() => {
    getBooks()
  }, [])
  return <>Book List</>
}

export default Ecommerce
