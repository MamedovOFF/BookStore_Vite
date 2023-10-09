import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) => {
  return (
    <button
      className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      {...props}
    ></button>
  )
}

export default Button
