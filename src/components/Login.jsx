import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./Loading";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = async () => {
    try {
      setLoading(true);
      await axios({
        method: "post",
        url: import.meta.env.VITE_API_URL + "login",
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(loginInfo),
      });
      setLoading(false);
      toast.success("You have been logged in !");
      navigate("/dashboard");
      return;
    } catch (error) {
      setLoading(false);
      toast.error("Please enter the correct credintials");
    }
  };
  return (
    <div className="bg-blue-400   h-[100vh]  p-4 flex justify-center">
      <main className="bg-contact h-[100%] lg:w-[80%] w-[95%] flex justify-center ">
        <div className="container ">
          <h1 className="text-white font-semibold relative w-[100%] mb-[50px] my-[120px] text-[30px] flex justify-center md:justify-start">
            Georgia seniors form dashboard
            <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
          </h1>
          <form className="flex flex-col gap-[20px] flex-wrap justify-center md:justify-start mb-[80px] ">
            <input
              type="text"
              name="username"
              value={loginInfo.username}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
              id="username"
              placeholder="username"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />
            <input
              type="password"
              name="password"
              id="password"
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
              placeholder="password"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />

            <button
              onClick={() => login()}
              type="button"
              className="bg-[#4FBBFB]  py-2 flex justify-center items-center text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
            >
              {loading && <Loading />}
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default Login;
