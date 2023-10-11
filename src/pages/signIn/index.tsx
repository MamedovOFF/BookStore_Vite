import { useForm } from 'react-hook-form'

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react'
import { useStore } from '../../context/StoreContext.tsx'
import ErrorSpan from '../../components/errorSpan'

type FormValues = {
  email: string
  password: string
}
const SignIn = () => {
  const {
    userStore: { login },
  } = useStore()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onTouched' })
  const onSubmit = async (data: FormValues) => {
    await login(data)
  }

  return (
    <form className="w-2/3 m-auto" onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="blue-gray">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Input
                label="Email"
                {...register('email', { required: 'Email is required' })}
                crossOrigin
                error={!!errors?.email}
              />
              {errors?.email && (
                <ErrorSpan>{errors.email.message ?? 'Error'}</ErrorSpan>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Input
                label="Password"
                type="password"
                crossOrigin
                {...register('password', {
                  required: 'This Field is required',
                  minLength: {
                    value: 6,
                    message: 'Min length 6',
                  },
                })}
              />
              {errors?.password && (
                <ErrorSpan>{errors.password.message ?? 'Error'}</ErrorSpan>
              )}
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <Button type="submit">Sign In</Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default SignIn
