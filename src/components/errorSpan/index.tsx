import { ReactNode } from 'react'

const ErrorSpan = ({ children }: { children: ReactNode }) => {
  return <span className="text-red-600">{children}</span>
}

export default ErrorSpan
