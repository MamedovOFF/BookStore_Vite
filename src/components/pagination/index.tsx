const Pagination = () => {
  return (
    <div className="pagination flex justify-center mt-4">
      <ul className="flex space-x-2">
        <li>
          <a href="#" className="px-3 py-2 rounded-lg bg-cyan-600 text-white">
            Prev
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-2 rounded-lg bg-cyan-600 text-white">
            1
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-2 rounded-lg bg-cyan-600 text-white">
            2
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-2 rounded-lg bg-cyan-600 text-white">
            3
          </a>
        </li>
        <li>
          <a href="#" className="px-3 py-2 rounded-lg bg-cyan-600 text-white">
            Next
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
