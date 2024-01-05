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
  const [filters, setFilters] = useState({
    internal: false,
    outcomer: false,
    phone: "",
    name: "",
    major: "",
  });
  const handleFilters = (property, value) => {
    console.log(property, value);
    setFilters({ ...filters, [property]: value });
  };
  useEffect(() => {
    let mock = data;
    if (filters.phone !== "") {
      const filteredPhone = mock.filter((item) =>
        item.phone.includes(filters.phone)
      );
      mock = filteredPhone;
    }
    if (filters.name !== "") {
      const filteredName = mock.filter((item) =>
        item.name.toLowerCase().includes(filters.name.toLowerCase())
      );
      mock = filteredName;
    }
    if (filters.major !== "") {
      const filteredMajor = mock.filter((item) =>
        item.major.includes(filters.major)
      );
      mock = filteredMajor;
    }

    if (filters.internal === false && filters.outcomer === false) {
      const filteredOutcomer = mock.filter(
        (item) => item.identity === "outcomer" || item.identity === "internal"
      );
      mock = filteredOutcomer;
    } else {
      if (filters.internal) {
        const filteredInternal = mock.filter(
          (item) => item.identity === "internal"
        );
        mock = filteredInternal;
      }
      if (!filters.internal) {
        const filteredInternal = mock.filter(
          (item) => item.identity !== "internal"
        );
        mock = filteredInternal;
      }
      //
      if (filters.outcomer) {
        const filteredOutcomer = mock.filter(
          (item) => item.identity === "outcomer"
        );
        mock = filteredOutcomer;
      }
      if (!filters.outcomer) {
        const filteredOutcomer = mock.filter(
          (item) => item.identity !== "outcomer"
        );
        mock = filteredOutcomer;
      }
    }
    setFilteredData(mock);
  }, [filters]);
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
    console.log(data);
  }, []);
  if (loading) {
    return <Loading />;
  } else
    return (
      <div>
        <div className="bg-blue-400 text-white   min-h-[100vh]  p-4 flex-col justify-center">
          <div className="bg-[#4FBBFB] text-white shadow-[0px_7px_10px_0px_#00000024] text-center text-[28px] font-bold rounded-[8px]">
            Responses: {data.length}{" "}
          </div>

          <div className="bg-[#4FBBFB] shadow-[0px_7px_10px_0px_#00000024] text-black p-3 mt-4 rounded-[8px]">
            <div className="row flex justify-between">
              <p className="font-bold text-[20px] mb-[15px] text-white  ">
                Filters
              </p>
              <p className="font-bold text-[20px] mb-[15px] "></p>
            </div>
            <div className="flex">
              <div className="row mr-[20px]">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value="internal"
                  checked={filters.internal}
                  onChange={() =>
                    setFilters({ ...filters, internal: !filters.internal })
                  }
                  name="bordered-checkbox"
                  class="w-4 h-4 cursor-pointer shadow-[0px_7px_10px_0px_#00000024] text-blue-600 mr-2 border-0 bg-gray-100 border-whitee rounded focus:ring-0 dark:focus:ring-white dark:ring-offset-white "
                />
                <label htmlFor="" className="font-semibold  text-white ">
                  Georgians
                </label>
              </div>
              <div className="row mb-[20px]">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value="external"
                  checked={filters.outcomer}
                  onChange={() =>
                    setFilters({ ...filters, outcomer: !filters.outcomer })
                  }
                  name="bordered-checkbox"
                  class="w-4 h-4 cursor-pointer shadow-[0px_7px_10px_0px_#00000024] text-blue-600 mr-2 border-0 bg-gray-100 border-whitee rounded focus:ring-0 dark:focus:ring-white dark:ring-offset-white "
                />
                <label htmlFor="" className="font-semibold text-white ">
                  Outcomers
                </label>
              </div>
            </div>
            <div className="row mb-[20px] flex flex-col">
              <label htmlFor="" className="text-white ">
                Filter by phone number
              </label>
              <input
                onChange={(e) => handleFilters("phone", e.target.value)}
                value={filters.phone}
                type="email"
                name="email"
                id="email"
                placeholder="Phone"
                className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
              />
            </div>
            <div className="row mb-[20px] flex flex-col">
              <label htmlFor="" className="text-white ">
                Filter by Name
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => handleFilters("name", e.target.value)}
                value={filters.name}
                placeholder="Name"
                className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
              />
            </div>
            <div className="row mb-[20px] flex flex-col">
              <label htmlFor="" className="text-white ">
                Filter by major
              </label>
              <select
                type="email"
                name="email"
                id="email"
                onChange={(e) => handleFilters("major", e.target.value)}
                value={filters.major}
                placeholder="Phone"
                className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024] text-gray-400"
              >
                <option value="">All</option>

                <option value="finance&investment" className="">
                  Finance & Investment
                </option>
                <option value="finance&accounting" className="">
                  Finance & Accounting
                </option>
                <option value="marketing" className="">
                  Marketing
                </option>
                <option value="auditing" className="">
                  Auditing
                </option>
                <option value="risk&insurance" className="">
                  Risk & insurance
                </option>
                <option value="bis" className="">
                  BIS
                </option>
              </select>
            </div>
          </div>
          <p className="mt-4">{filteredData.length} Results found</p>

          <div className="flex flex-row mt-[30px] flex-wrap justify-center gap-[30px] w-[100%]">
            {filteredData.map((item, i) => {
              const itemDate = new Date(item.createdAt);
              const day =
                itemDate.getDay() +
                "/" +
                itemDate.getMonth() +
                1 +
                "/" +
                itemDate.getFullYear();
              const time =
                itemDate.getHours() +
                ":" +
                itemDate.getMinutes() +
                ":" +
                itemDate.getSeconds();
              const date = `${day} @ ${time}`;
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
                    <span className="font-bold mr-[5px]">
                      Personal ID Front:
                    </span>
                    <a href={item.personal_id_front} className="underline">
                      {item.personal_id_front}
                    </a>
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold mr-[5px]">
                      Personal ID Back:
                    </span>
                    <a href={item.personal_id_back} className="underline">
                      {item.personal_id_back}
                    </a>
                  </p>
                  <p>
                    {" "}
                    <span className="font-bold mr-[5px]">Uni Id:</span>
                    <a href={item.uni_id} className="underline">
                      {item.uni_id}
                    </a>
                  </p>
                  <p className="flex">
                    <span className="font-bold mr-[5px]">Submitted at:</span>
                    <p>{date}</p>
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
