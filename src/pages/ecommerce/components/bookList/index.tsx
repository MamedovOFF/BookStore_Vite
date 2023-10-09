import { useStore } from '../../../../context/StoreContext.tsx'
import { observer } from 'mobx-react-lite'
import Card from '../../../../components/card'
import Pagination from '../../../../components/pagination'
import { useEffect, useState } from 'react'

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {
    ecommerce: { books, getBooks },
  } = useStore()

  useEffect(() => {
    getBooks(currentPage)
  }, [currentPage])

  console.log(books.pagination)
  return (
    <div className="mt-10 mb-10">
      <div className="grid grid-cols-4 gap-4 ">
        {books.data.map((el) => {
          return <Card key={el.id} {...el} />
        })}
      </div>
      <Pagination
        total_pages={books?.pagination?.total_pages || 1}
        current_page={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default observer(BookList)
