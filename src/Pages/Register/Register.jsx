import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaBirthdayCake,
  FaVenusMars,
} from "react-icons/fa";
import Header from "@/Components/Header/Header";
import ErrorCard from "@/Components/ErrorCard/ErrorCard";
import Background from "@/Components/Background/Background";
import AppInput from "../../Components/Inputs/AppInput";

export default function Register() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const schema = zod.object({
    name: zod.string().nonempty('Name is required').min(3, 'Name must be at least 3 characters'),
    email: zod.string().email('Email is invalid'),
    password: zod.string().regex(/^[a-zA-Z0-9@$!%*?&]{8,15}$/, 'Password must be 8-15 characters long and contain letters, numbers, and special characters'),
    rePassword: zod.string(),
    dateOfBirth: zod.coerce.date().refine(function (value) {
      if (new Date().getFullYear() - value.getFullYear() >= 18) {
        return true;
      }
    }, 'You must be at least 18 years old'),
    gender: zod.enum(['male', 'female'], 'Please select gender')
  }).refine(function (value) {
    if (value.password === value.rePassword) {
      return true;
    } else {
      return false;
    }
  }, {
    message: 'Passwords do not match',
    path: ['rePassword']
  });

  const { handleSubmit, register, formState, getValues } = useForm({
    defaultValues: {
      "name": "",
      "email": "",
      "password": "",
      "rePassword": "",
      "dateOfBirth": "",
      "gender": ""
    },
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  function handleRegister(values) {
    setErrorMsg(null);
    setIsLoading(true);

    axios.post('https://linked-posts.routemisr.com/users/signup', values)
      .then((response) => {
        if (response.data.message === 'success') {
          setIsLoading(false);
          navigate('/login');
        }
      })
      .catch((err) => {
        setErrorMsg(err.response?.data?.error || "An error occurred during signup");
        setIsLoading(false);
      });
  }

  const fields = [
    {
      label: "Full Name",
      icon: <FaUser className="h-5 w-5 text-purple-300/70" />,
      type: "text",
      placeholder: "Enter your full name",
      isInvalid: Boolean(errors.name),
      errorMessage: errors.name?.message,
      register: register("name"),
    },
    {
      label: "Email Address",
      icon: <FaEnvelope className="h-5 w-5 text-purple-300/70" />,
      type: "email",
      placeholder: "you@example.com",
      isInvalid: Boolean(errors.email),
      errorMessage: errors.email?.message,
      register: register("email"),
    },
    {
      label: "Password",
      icon: <FaLock className="h-5 w-5 text-purple-300/70" />,
      type: "password",
      placeholder: "Create a strong password",
      isInvalid: Boolean(errors.password),
      errorMessage: errors.password?.message,
      register: register("password"),
    },
    {
      label: "Confirm Password",
      icon: <FaLock className="h-5 w-5 text-purple-300/70" />,
      type: "password",
      placeholder: "Confirm your password",
      isInvalid: Boolean(errors.rePassword),
      errorMessage: errors.rePassword?.message,
      register: register("rePassword"),
    },
  ];

  return (
    <Background maxWidth="max-w-md">
      {/* Hero Header */}
      <Header />
      {/* Main Card */}
      <div className="bg-white/10  rounded-3xl p-8 shadow-2xl border border-white/20">
        {errorMsg && <ErrorCard errorMsg={errorMsg} />}
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
          {
            fields.map((field, index) => (
              <AppInput
                key={index}
                {...field}
              />
            ))
          }

          {/* Date of Birth Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Date of Birth
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 row pointer-events-none">
                <FaBirthdayCake className="h-5 w-5 text-purple-300/70" />
              </div>
              <Input
                isInvalid={Boolean(errors.dateOfBirth)}
                errorMessage={errors.dateOfBirth?.message}
                className="input"
                type="date"
                variant="bordered"
                {...register("dateOfBirth")}
              />
            </div>
          </div>

          {/* Gender Field */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Gender
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 row pointer-events-none">
                <FaVenusMars className="h-5 w-5 text-purple-300/70" />
              </div>
              <Select
                className="input"
                variant="bordered"
                {...register("gender")}
              >
                <SelectItem key="male" className="text-gray-800 bg-white">
                  Male
                </SelectItem>
                <SelectItem key="female" className="text-gray-800 bg-white">
                  Female
                </SelectItem>
              </Select>
            </div>
            {errors.gender && (
              <p className="mt-1 text-sm text-white row gap-1">
                {errors.gender?.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            color="primary"
            type="submit"
            isDisabled={isLoading}
            isLoading={isLoading}
            className="w-full row px-6 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 disabled:opacity-80 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            {isLoading ? "Creating your account..." : "Create Account"}
          </Button>
        </form>

        {/* Divider */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 row">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative row text-sm">
              <span className="px-2 bg-transparent text-gray-400 font-medium">
                Already have an account?
              </span>
            </div>
          </div>
        </div>

        {/* Login Link */}
        <div className="mt-4">
          <button
            onClick={() => navigate("/login")}
            className="w-full row px-6 py-3 border border-white/30 text-base font-medium rounded-xl text-white bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 transform hover:scale-105"
          >
            Sign in to your account
          </button>
        </div>
      </div>
    </Background>
  );
}
