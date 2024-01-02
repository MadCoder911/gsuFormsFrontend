import axios from "axios";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./Loading";
const Responses = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        axios({
          method: "get",
          withCredentials: true,
          url: import.meta.env.VITE_API_URL + "forms",
        })
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((err) => {
            toast.error("Unauthorized, please login..");
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          });
      } catch (error) {
        toast.error("Unauthorized, please login..");
        navigate("/login");
      }
    }, 2000);
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
          <div className="flex mt-[30px] flex-wrap justify-center  gap-[30px]">
            {data.map((item, i) => {
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
