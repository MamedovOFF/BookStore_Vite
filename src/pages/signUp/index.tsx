import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from '@material-tailwind/react'
import { useStore } from '../../context/StoreContext.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import ErrorSpan from '../../components/errorSpan'

type FormValues = {
  name: string
  email: string
  password: string
  file: File
}
const SignUp = () => {
  const {
    userStore: { signUp },
  } = useStore()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onTouched' })
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await signUp(data)
  }

  return (
    <form className="w-2/3 m-auto" onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="blue-gray">
            Sign Up
          </Typography>
          <Typography variant="paragraph">
            Enter your details to register.
          </Typography>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Input
                {...register('name', { required: 'Name is required' })}
                label="Name"
                crossOrigin
                error={!!errors.name}
              />
              {errors?.name && (
                <ErrorSpan>{errors.name.message ?? 'Error'}</ErrorSpan>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Input
                {...register('email', { required: 'Email is required' })}
                label="Email"
                crossOrigin
                type="email"
                error={!!errors.email}
              />
              {errors?.email && (
                <ErrorSpan>{errors.email.message ?? 'Error'}</ErrorSpan>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Input
                crossOrigin
                label="Password"
                type="password"
                {...register('password', {
                  required: 'This Field is required',
                  minLength: {
                    value: 6,
                    message: 'Min length 6',
                  },
                })}
                error={!!errors.password}
              />
              {errors?.password && (
                <ErrorSpan>{errors.password.message ?? 'Error'}</ErrorSpan>
              )}
            </div>
            <label
              htmlFor="doc"
              className="flex items-center p-4 gap-3 rounded-3xl border border-gray-300 border-dashed bg-gray-50 cursor-pointer"
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
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <div className="space-y-2">
                <h4 className="text-base font-semibold text-gray-700">
                  Upload a avatar
                </h4>
              </div>
              <input type="file" id="doc" name="doc" accept="png, jpg" hidden />
            </label>
          </div>
        </CardBody>
        <CardFooter>
          <Button type="submit">Sign Up</Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default SignUp
