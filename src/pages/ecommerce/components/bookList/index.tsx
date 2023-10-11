import { useStore } from '../../../../context/StoreContext.tsx'
import { observer } from 'mobx-react-lite'
import Pagination from '../../../../components/pagination'
import { useEffect, useState } from 'react'
import { Input, Typography } from '@material-tailwind/react'
import CardBook from '../../../../components/cardBook'

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const {
    ecommerceStore: { books, getBooks },
  } = useStore()

  useEffect(() => {
    getBooks(currentPage, search)
  }, [currentPage, search])

  return (
    <div className="mt-10 mb-10 gap-10 relative flex gap-4">
      <div className="sticky top-20 z-10 bg-white p-4 rounded h-full flex flex-col gap-2">
        <Typography>Filters</Typography>
        <Input
          label="Search"
          value={search}
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          crossOrigin
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-5">
          {books.data.map((el) => {
            return <CardBook key={el.id} {...el} />
          })}
        </div>
        {!!books.data.length && (
          <Pagination
            total_page={books?.pagination?.total_pages || 1}
            current_page={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  )
}

export default observer(BookList)
