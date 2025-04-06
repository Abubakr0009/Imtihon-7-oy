import axios from "axios";
import React, { useRef, useState } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const isSubmitting = useRef(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isSubmitting.current) return;
    isSubmitting.current = true;

    try {
      const res = await axios.post(
        "https://nt-devconnector.onrender.com/api/auth",
        {
          email: formData.email.trim(),
          password: formData.password.trim(),
        }
      );

      const token = res.data.token;
      localStorage.setItem("token", token);

      setSuccessMessage("Muvaffaqiyatli tizimga kirdingiz!");
      setErrorMessage("");
      navigate("/dashboard");
    } catch (error) {
      const errorMsg =
        error.response?.data?.msg ||
        error.response?.data?.errors?.[0]?.msg ||
        "Xatolik yuz berdi!";
      setErrorMessage(errorMsg);
    } finally {
      isSubmitting.current = false;
    }
  };

  return (
    <div className="w-[472px] flex flex-col items-center">
      <h3 className="text-sm mr-[100px] mt-8 font-normal">
        Enter your email and password to sign in.
      </h3>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-600">{successMessage}</p>}

      <form onSubmit={handleLogin}>
        <input
          placeholder="example@domain.com"
          name="email"
          type="email"
          id="email"
          aria-required="true"
          onChange={handleChange}
          className="pl-[15px] w-[377px] h-[40px] mt-[14px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
        />
        <div className="relative mt-[50px]">
          <input
            name="password"
            placeholder="*********"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            aria-required="true"
            onChange={handleChange}
            className="pl-[15px] w-[377px] h-[40px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
          />
          <button
            type="button"
            className="absolute right-[15px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {/* {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />} */}
          </button>
        </div>
        <p className="ml-[250px] my-[25px] cursor-pointer text-green-600 font-[600]">
          Forgot Password?
        </p>
        <button
          type="submit"
          className="w-[377px] hover:bg-green-600 bg-green-500 cursor-pointer text-white p-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
