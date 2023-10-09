type propsType = {
  total_pages: number
  current_page: number
  onPageChange: (page: number) => void
}

const Pagination = ({ total_pages, current_page, onPageChange }: propsType) => {
  const pages: Array<number> = []

  for (let i = 1; i <= total_pages; i++) {
    pages.push(i)
  }
  return (
    <div className="pagination flex justify-center mt-4">
      <ul className="flex space-x-2">
        <li>
          <button
            className="px-3 py-2 rounded-lg bg-cyan-600 text-white"
            onClick={() => {
              if (current_page > 1) onPageChange(current_page - 1)
            }}
          >
            Prev
          </button>
        </li>
        {pages.map((el) => {
          return (
            <li key={el}>
              <button
                className={`px-3 py-2 rounded-lg  text-white ${
                  current_page === el ? 'bg-amber-300' : 'bg-cyan-600'
                }`}
              >
                {el}
              </button>
            </li>
          )
        })}
        <li>
          <button
            className="px-3 py-2 rounded-lg bg-cyan-600 text-white"
            onClick={() => {
              if (current_page < total_pages) onPageChange(current_page + 1)
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
