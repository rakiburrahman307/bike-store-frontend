import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../utils/fromInput/FromInput";
import { TRegisterValues } from "../interface";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Form } from "../ui/form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../zodSchema";

const Register = () => {
  const form = useForm<TRegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<TRegisterValues> = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className='w-96 shadow-lg'>
        <CardHeader>
          <CardTitle className='text-center'>Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormInput
                control={form.control}
                name='name'
                label='Name'
                placeholder='Enter Name'
              />
              <FormInput
                control={form.control}
                name='email'
                label='Email'
                placeholder='Enter Email Address'
              />

              <FormInput
                control={form.control}
                name='phone'
                label='Phone Number'
                placeholder='Enter Phone Number'
              />
              <FormInput
                control={form.control}
                name='address'
                label='Address'
                placeholder='Enter Your Address'
              />
              <FormInput
                control={form.control}
                name='password'
                label='Password'
                type='password'
                placeholder='Enter password'
              />
              <Button type='submit' className='w-full'>
                Register
              </Button>
            </form>
          </Form>
          <p className='text-center mt-4 text-sm'>
            Already have an account?{" "}
            <Link to='/login' className='text-blue-500 hover:underline'>
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
