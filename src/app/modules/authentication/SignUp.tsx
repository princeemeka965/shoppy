"use client";
import { SET_USER } from "@/reducers/usersDataSlice";
import { useCreateAccountMutation } from "@/services";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function SignUp(props: any): ReactNode {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
    props.deactivateSignUp(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createAccount, {}] = useCreateAccountMutation();

  const submitData = async (data: any) => {
    setLoading(true);
    try {
      // Call the mutation hook with the form data
      const result: any = await createAccount(data);

      // Handle the result as needed (e.g., check result.data, etc.)

      props.deactivateSignUp(true);
      result.error
        ? toast.error(result.error.data.message)
        : toast.success(result.data.message, { autoClose: 3000 });

      const stateData = {
        name: result.data.user.name,
        username: result.data.user.username,
      };

      dispatch(SET_USER(stateData));
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <form
          className="mt-3 mb-2 w-full px-4 font-sans"
          onSubmit={handleSubmit((data) => submitData(data))}
        >
          <DialogBody>
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Sign Up
              </Typography>
              <Typography color="gray" className="my-2 font-normal">
                Welcome to Shoppy! Enter your details to register.
              </Typography>
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Enter full names"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name ? (
                  <p className="-mt-4 text-red-700">
                    {(errors.name as any).message}
                  </p>
                ) : null}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email ? (
                  <p className="-mt-4 text-red-700">
                    {(errors.email as any).message}
                  </p>
                ) : null}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Username
                </Typography>
                <Input
                  size="lg"
                  placeholder="Enter Username"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username ? (
                  <p className="-mt-4 text-red-700">
                    {(errors.username as any).message}
                  </p>
                ) : null}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                  {...register("password", {
                    required: "Passoword is required",
                  })}
                />
                {errors.password ? (
                  <p className="-mt-4 text-red-700">
                    {(errors.password as any).message}
                  </p>
                ) : null}
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal hidden lg:flex md:flex"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                crossOrigin={""}
                color="blue"
                className="hidden lg:flex md:flex"
              />
            </Card>{" "}
          </DialogBody>
          <DialogFooter>
            <Button
              color="blue"
              fullWidth
              className="flex justify-center"
              type="submit"
              disabled={isLoading}
            >
              {!isLoading ? "Sign up" : <div className="custom-loader"></div>}
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
