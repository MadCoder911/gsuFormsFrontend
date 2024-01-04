import axios from "axios";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { Navigate, json, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./Loading";
const Responses = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([{}]);
  const [filteredData, setFilteredData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let token = JSON.parse(localStorage.getItem("access_token"));

    try {
      axios({
        method: "get",
        // withCredentials: true,
        url: import.meta.env.VITE_API_URL + "forms",
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((res) => {
          setData(res.data);
          setFilteredData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          navigate("/login");
        });
    } catch (error) {
      toast.error("Unauthorized, please login..");
      navigate("/login");
    }
  }, []);
  if (loading) {
    return <Loading />;
  } else
    return (
      <div>
        <div className="bg-blue-400 text-white   min-h-[100vh]  p-4 flex-col justify-center">
          <div className="bg-white text-black text-center text-[28px] font-bold rounded-[8px]">
            Responses: {data.length}{" "}
          </div>

          <div className="bg-white text-black p-3 mt-4 rounded-[8px]">
            <div className="row flex justify-between">
              <p className="font-bold text-[20px] mb-[15px] ">Filters</p>
              <p className="font-bold text-[20px] mb-[15px] "></p>
            </div>
            <div className="flex">
              <div className="row mr-[20px]">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  class="w-4 h-4 cursor-pointer shadow-[0px_7px_10px_0px_#00000024] text-blue-600 mr-2 border-0 bg-gray-100 border-whitee rounded focus:ring-0 dark:focus:ring-white dark:ring-offset-white "
                />
                <label htmlFor="" className="font-semibold text-black">
                  Georgians
                </label>
              </div>
              <div className="row mb-[20px]">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  class="w-4 h-4 cursor-pointer shadow-[0px_7px_10px_0px_#00000024] text-blue-600 mr-2 border-0 bg-gray-100 border-whitee rounded focus:ring-0 dark:focus:ring-white dark:ring-offset-white "
                />
                <label htmlFor="" className="font-semibold text-black">
                  Outcomers
                </label>
              </div>
            </div>
            <div className="row mb-[20px] flex flex-col">
              <label htmlFor="">Filter by phone number</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Phone"
                className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
              />
            </div>
            <div className="row mb-[20px] flex flex-col">
              <label htmlFor="">Filter by Name</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Name"
                className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
              />
            </div>
            <div className="row mb-[20px] flex flex-col">
              <label htmlFor="">Filter by major</label>
              <select
                type="email"
                name="email"
                id="email"
                placeholder="Phone"
                className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024] text-gray-400"
              >
                <option value="">All</option>

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
            </div>
          </div>
          <p className="mt-4">{filteredData.length} Results found</p>
          <div className="flex mt-[30px] flex-wrap justify-center  gap-[30px]">
            {filteredData.map((item, i) => {
              return (
                <div
                  key={i}
                  className="capitalize bg-white text-black w-[100%] lg:max-w-[400px] rounded-[8px] px-2 py-4 shadow-[0px_7px_10px_0px_#00000024]"
                >
                  <p>
                    {" "}
                    <span className="font-bold mr-[5px]">Name:</span>{" "}
                    {item.name}
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold mr-[5px]">Phone:</span>{" "}
                    {item.phone}
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold mr-[5px]">Major:</span>{" "}
                    {item.major}
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold mr-[5px]">
                      Outcomer / Internal:
                    </span>
                    {item.identity}
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold mr-[5px]">Payment Method:</span>
                    {item.payment_method}
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold mr-[5px]">Submitted at:</span>
                    {item.registered_at}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};
export default Responses;
