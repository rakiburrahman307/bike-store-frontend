/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../utils/fromInput/FromInput";
import { TLoginValues } from "../interface";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Form } from "../ui/form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../zodSchema";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const form = useForm<TLoginValues>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<TLoginValues> = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      const user = await verifyToken(res?.data?.token);
      dispatch(setUser({ user: user, token: res?.data?.token }));
      toast.success(res?.message, { id: toastId });
      navigate("/");
      form.reset();
    } catch (error: any) {
      toast.error(error, { id: toastId });
    }
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
