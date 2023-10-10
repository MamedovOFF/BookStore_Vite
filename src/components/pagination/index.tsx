import { useState } from 'react'

type propsType = {
  total_pages: number
  current_page: number
  onPageChange: (page: number) => void
}

const Pagination = ({ total_pages, current_page, onPageChange }: propsType) => {
  const [pages] = useState<Array<number>>(() => {
    let temp: Array<number> = []
    for (let i = 1; i <= total_pages; i++) {
      temp.push(i)
    }
    return temp
  })

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-2">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              if (current_page > 1) onPageChange(current_page - 1)
            }}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          {pages.map((el) => {
            return (
              <button
                key={el}
                aria-current="page"
                onClick={() => onPageChange(el)}
                className={`${
                  el === current_page ? 'active_button' : 'page_button'
                }`}
              >
                {el}
              </button>
            )
          })}
          <button
            onClick={() => {
              if (current_page < total_pages) onPageChange(current_page + 1)
            }}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
