"use client";
import { validateLogin, validateRegistration } from "@/validations/auth";
import React, { ChangeEvent, Component, ReactNode, useState } from "react";
import AlertModalWithDismiss from "@/components/AlertModalWithDismiss";
import { useModal } from "@/components/Modal";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

interface LoginFormState {
  email: string;
  password: string;
}

interface RegisterFormState {
  email: string;
  password: string;
  confirm_password: string;
}

class FormLogin extends Component {
  state: LoginFormState = {
    email: "",
    password: "",
  };

  handleLogin = async () => {
    const showAlert = (message: string) => {
      alert(message);
    };

    try {
      const { email, password } = this.state;
      validateLogin({ email, password });

      const response = await fetch("https://jfe-test.devto.top/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      // Login successful, saving token
      const res = await response.json();
      console.log(res);
      let responseData;
      if (responseData !== res) {
        responseData = res;
        showAlert("Login successful, please wait");
        localStorage.setItem("authToken", responseData.token);
        window.location.href = "/dashboard"; //cannot use hooks or redirect so this is temporary measure
      }
    } catch (error) {
      console.log(error);
      showAlert("Login failed, please try again");
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<
      LoginFormState,
      keyof LoginFormState
    >);
  };
  render(): ReactNode {
    const { email, password } = this.state;
    return (
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            placeholder="Enter email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>

        <button
          className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
          type="button"
          onClick={this.handleLogin}
        >
          Login
        </button>
      </form>
    );
  }
}

class FormCreate extends Component {
  state: RegisterFormState = {
    email: "",
    password: "",
    confirm_password: "",
  };

  handleRegister = async () => {
    const showAlert = (message: string) => {
      alert(message);
    };
    try {
      const { email, password, confirm_password } = this.state;
      validateRegistration({ email, password, confirm_password });

      if (password !== confirm_password) {
        throw new Error("Passwords do not match");
      }

      const response = await fetch("https://jfe-test.devto.top/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirm_password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      } else {
        showAlert("Registration success, please log in");
      }
    } catch (error) {
      console.log(error);
      showAlert("Registration Error, Please check again");
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<
      RegisterFormState,
      keyof RegisterFormState
    >);
  };
  render(): ReactNode {
    const { email, password, confirm_password } = this.state;

    return (
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            placeholder="Enter email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Confirm Password
          </label>
          <input
            placeholder="Enter confirm password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            name="confirm_password"
            value={confirm_password}
            onChange={this.handleChange}
          />
        </div>

        <button
          className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
          type="button"
          onClick={this.handleRegister}
        >
          Register
        </button>
      </form>
    );
  }
}

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <div className="bg-red-700 p-2 rounded-md mr-2">
          {/* White checkmark icon (replace with your actual checkmark icon) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-xl tracking-widest">
          <span className="text-black-700 font-bold text-xl">G</span>Task
        </p>
      </div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md border border-gray-300">
        <h2 className="text-2xl mb-4 text-center">
          {isLogin ? "Sign In to " : "Sign Up to "}
          <span className="font-bold">GTask</span>
        </h2>
        {isLogin ? <FormLogin /> : <FormCreate />}

        {isLogin ? (
          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <span
              className="text-bold text-red-700 cursor-pointer"
              onClick={toggleForm}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span
              className="text-bold text-red-700 cursor-pointer"
              onClick={toggleForm}
            >
              Sign In
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
