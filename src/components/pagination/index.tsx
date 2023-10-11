import { Button, IconButton } from '@material-tailwind/react'

type PaginationProps = {
  total_page: number
  current_page: number
  onPageChange: (page: number) => void
}
const DefaultPagination = ({
  total_page,
  current_page,
  onPageChange,
}: PaginationProps) => {
  const pages = new Array(total_page)
  for (let i = 1; i <= total_page; i++) {
    pages[i] = i
  }

  const getItemProps = (index: number) =>
    ({
      variant: current_page === index ? 'filled' : 'text',
      color: 'gray',
      onClick: () => onPageChange(index),
    }) as any

  return (
    <div className="flex items-center gap-4 p-1 rounded bg-white">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={() => onPageChange(current_page - 1)}
        disabled={current_page === 1}
      >
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Previous
      </Button>
      <div className="flex items-center gap-2">
        {pages.map((el) => {
          return <IconButton {...getItemProps(el)}>{el}</IconButton>
        })}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={() => onPageChange(current_page + 1)}
        disabled={current_page === total_page}
      >
        Next
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
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Button>
    </div>
  )
}

export default DefaultPagination
