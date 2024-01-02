import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Form = () => {
  useEffect(() => {
    try {
      axios({
        method: "get",
        withCredentials: true,
        url: import.meta.env.VITE_API_URL + "forms",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          toast.error("Unauthorized, please login..");
          setTimeout(() => {}, 1000);
        });

      return;
    } catch (error) {
      return;
    }
  });
  return (
    <div className="bg-blue-400   h-[100vh]  p-4 flex flex-col relative items-center justify-center">
      <main className="bg-contact h-[100%] relative lg:w-[80%] w-[95%] flex-col flex  ">
        <Link
          to={"/login"}
          className="bg-[#4FBBFB] py-2 flex justify-center w-[200px] absolute right-0  top-0 text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
        >
          Login
        </Link>
        <div className="container ">
          <h1 className="text-white font-semibold relative w-[100%] mb-[50px] my-[120px] text-[30px] flex justify-center md:justify-start">
            Georgia Trip Registration Form
            <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
          </h1>
          <form className="flex flex-col gap-[20px] flex-wrap justify-center md:justify-start mb-[80px] ">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Phone"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />
            <div className="flex gap-[20px]">
              <div className="row">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  class="w-4 h-4 cursor-pointer shadow-[0px_7px_10px_0px_#00000024] text-blue-600 mr-2 border-0 bg-gray-100 border-whitee rounded focus:ring-0 dark:focus:ring-white dark:ring-offset-white "
                />
                <label htmlFor="" className="font-semibold text-white">
                  Georgia
                </label>
              </div>
              <div className="row">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  class="w-4 h-4 cursor-pointer shadow-[0px_7px_10px_0px_#00000024] text-blue-600 mr-2 border-0 bg-gray-100 border-whitee rounded focus:ring-0 dark:focus:ring-white dark:ring-offset-white "
                />
                <label htmlFor="" className="font-semibold text-white">
                  Outcomer
                </label>
              </div>
            </div>
            <select
              type="email"
              name="email"
              id="email"
              placeholder="Phone"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024] text-gray-400"
            >
              <option value="" selected disabled>
                Select your major
              </option>

              <option value="x" className="">
                Finance & Investment
              </option>
              <option value="x" className="">
                Finance & Accounting
              </option>
              <option value="x" className="">
                Marketing
              </option>
              <option value="x" className="">
                Auditing
              </option>
              <option value="x" className="">
                Risk & insurance
              </option>
              <option value="x" className="">
                BIS
              </option>
            </select>
            <button
              onClick={() => {
                toast.success("You have been registered !");
              }}
              type="button"
              className="bg-[#4FBBFB] py-2 flex justify-center text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
            >
              Register
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default Form;
