import { useStore } from '../../context/StoreContext.tsx'
import { useEffect } from 'react'
import BookList from './components/bookList'

const Ecommerce = () => {
  const {
    ecommerce: { getBooks },
  } = useStore()
  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <BookList />
    </>
  )
}

export default Ecommerce
