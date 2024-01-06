import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ImagesModal from "./ImagesModal";
import { FaInfo } from "react-icons/fa";
import PaymentModal from "./PaymentModal";

const Form = () => {
  // let currentdate = new Date();
  // let datetime =
  //   currentdate.getDay() +
  //   "/" +
  //   (currentdate.getMonth() + 1) +
  //   "/" +
  //   currentdate.getFullYear() +
  //   " @ " +
  //   currentdate.getHours() +
  //   ":" +
  //   currentdate.getMinutes() +
  //   ":" +
  //   currentdate.getSeconds();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    identity: "internal",
    major: "",
    payment_method: "",
    registered_at: "",
    personal_id_front: "",
    personal_id_back: "",
    uni_id: "",
  });
  const [imagesModal, setImagesModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const handleSubmit = async () => {
    setForm({ ...form, registered_at: "date" });
    if (form.name === "") {
      toast.error("Please insert your name !");
      return;
    } else if (form.phone.length !== 11) {
      toast.error("Incorrect phone number !");
      return;
    } else if (form.major === "") {
      toast.error("Please choose your major !");
      return;
    } else if (form.payment_method === "") {
      toast.error("Please choose your payment method !");
      return;
    } else if (
      form.personal_id_front === "" ||
      form.personal_id_back === "" ||
      form.uni_id === "" ||
      form.personal_id_back === form.personal_id_front
    ) {
      toast.error("Incorrect ID link !");
      return;
    } else if (
      form.personal_id_back === form.personal_id_front ||
      form.personal_id_back === form.uni_id
    ) {
      toast.error(
        "Your personal ID and university ID can't have the same link !"
      );
      return;
    }

    try {
      const { data } = axios({
        method: "POST",
        url: import.meta.env.VITE_API_URL + "forms",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      })
        .then((res) => {
          if (res.data.message) {
            toast.error("This phone number is already registered");
            return;
          } else {
            setForm({
              name: "",
              phone: "",
              identity: "internal", //or outcomer
              major: "",
              payment_method: "",
              registered_at: "",
              personal_id_front: "",
              personal_id_back: "",
              uni_id: "",
            });
            return toast.success("You have been registered !");
          }
        })
        .catch((err) => {
          toast.error("An error has occured");
        });
    } catch (error) {
      return;
    }
  };
  return (
    <div className="bg-blue-400   min-h-[100vh]  p-4 flex flex-col relative items-center ">
      {imagesModal && (
        <ImagesModal
          imagesModal={imagesModal}
          setImagesModal={setImagesModal}
        />
      )}
      {paymentModal && (
        <PaymentModal
          paymentModal={paymentModal}
          setPaymentModal={setPaymentModal}
        />
      )}
      <main className="bg-contact h-[100%] relative lg:w-[80%] w-[95%] flex-col flex  ">
        {/* <Link
          to={"/login"}
          className="bg-[#4FBBFB] py-2 flex justify-center w-[200px] absolute right-0  top-0 text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
        >
          Login
        </Link> */}
        <div className="container ">
          <h1 className="text-white font-semibold relative w-[100%] mb-[50px] mt-[50px] text-[30px] flex justify-center md:justify-start">
            Georgia Trip Registration Form
            <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
          </h1>
          <form className="flex flex-col gap-[20px] flex-wrap justify-center md:justify-start mb-[80px] ">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value.toLowerCase() });
              }}
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />
            {/* <div className="flex gap-[20px]">
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
            </div> */}
            <select
              type="major"
              name="major"
              id="major"
              placeholder="Major"
              value={form.major}
              onChange={(e) => {
                setForm({ ...form, major: e.target.value.toLowerCase() });
              }}
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024] text-gray-400"
            >
              <option value="" selected disabled>
                Select your major
              </option>

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
            <button
              onClick={() => setPaymentModal(true)}
              type="button"
              className="bg-[#4FBBFB] w-[100%] p-2 flex justify-center items-center text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
            >
              Payment Info <FaInfo className="ml-[10px] " />
            </button>
            <select
              name="payment_method"
              id="payment_method"
              placeholder="Payment Method"
              value={form.payment_method}
              onChange={(e) => {
                setForm({
                  ...form,
                  payment_method: e.target.value.toLowerCase(),
                });
              }}
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024] text-gray-400"
            >
              <option value="" selected disabled>
                Payment method
              </option>

              <option value="instapay" className="">
                Instapay
              </option>
              <option value="link payment" className="">
                Credit / Debit Card
              </option>
            </select>
            <button
              onClick={() => setImagesModal(true)}
              type="button"
              className="bg-[#4FBBFB] w-[100%] p-2 flex justify-center text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
            >
              How to upload images ?
            </button>
            <input
              type="id_front"
              name="id_front"
              id="id_front"
              value={form.personal_id_front}
              onChange={(e) => {
                setForm({ ...form, personal_id_front: e.target.value });
              }}
              placeholder="Personal ID Front picture link"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024] "
            />

            <input
              type="id_back"
              name="id_back"
              id="id_back"
              value={form.personal_id_back}
              onChange={(e) => {
                setForm({ ...form, personal_id_back: e.target.value });
              }}
              placeholder="Personal ID Back picture link"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />
            <input
              type="uni_id"
              name="uni_id"
              id="uni_id"
              value={form.uni_id}
              onChange={(e) => {
                setForm({ ...form, uni_id: e.target.value });
              }}
              placeholder="University ID Picture link"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />
            <button
              onClick={() => handleSubmit()}
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
