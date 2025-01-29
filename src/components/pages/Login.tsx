import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../utils/fromInput/FromInput";
import { TLoginValues } from "../interface";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Form } from "../ui/form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../zodSchema";

const Login = () => {
  const form = useForm<TLoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<TLoginValues> = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className='w-96 shadow-lg'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormInput
                control={form.control}
                name='email'
                label='Email'
                placeholder='Enter Email Address'
              />

              <FormInput
                control={form.control}
                name='password'
                label='Password'
                type='password'
                placeholder='Enter password'
              />

              <Button type='submit' className='w-full'>
                Login
              </Button>
            </form>
          </Form>
          <p className='text-center mt-4 text-sm'>
            Don't have an account?{" "}
            <Link to='/register' className='text-blue-500 hover:underline'>
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
