import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react'

const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>((props, ref) => (
  <input
    ref={ref}
    {...props}
    className="p-2 rounded border-stone-700 focus:border-red-50 outline-0 outline focus:outline-1 focus:outline-blue-600"
  />
))

export default Input
