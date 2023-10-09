import { useStore } from '../../../../context/StoreContext.tsx'
import { observer } from 'mobx-react-lite'
import Card from '../../../../components/card'
import Pagination from '../../../../components/pagination'
import { useEffect } from 'react'

const BookList = () => {
  const {
    ecommerce: { books },
  } = useStore()

  useEffect(() => {
    console.log(books)
  }, [books.pagination])
  return (
    <div className="mt-10 mb-10">
      <div className="grid grid-cols-4 gap-4 ">
        {books.data.map((el) => {
          return <Card key={el.id} {...el} />
        })}
      </div>
      <Pagination />
    </div>
  )
}

export default observer(BookList)
