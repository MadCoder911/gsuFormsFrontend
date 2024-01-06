const PaymentModal = ({ paymentModal, setPaymentModal }) => {
  return (
    <div
      className={`z-[999] bg-[#000000c3] absolute top-0 flex items-center justify-center w-[100%] h-[100%]`}
    >
      <div className="bg-blue-400  z-[99999] p-4 rounded-[8px] max-h-[80%] overflow-y-scroll text-white max-w-[90%]">
        <div className="relative flex justify-between items-center">
          <p>Available payment methods are:</p>
          <button onClick={() => setPaymentModal(false)}>
            <span className="text-[20px] bg-[#4FBBFB] px-4 py-2  flex justify-center text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out">
              x
            </span>
          </button>
        </div>

        <div className="mb-[20px]">
          <p className="font-semibold">1- Instapay:</p>
          <p>
            <span className="text-red-500 font-semibold">
              -Please note that:
            </span>{" "}
            We are not responsible if funds are transferred to an incorrect
            instapay address.
          </p>
          <p className="mt-[10px]">
            -You can pay transfering 3900 EGP to the bank bank account below
            through instapay{" "}
          </p>
          <p>
            <span className="font-semibold">-Bank Name:</span> Commercial
            International Bank CIB
          </p>
          <p>
            <span className="font-semibold">-Branch:</span> 1st Settlement,
            Cairo
          </p>
          <p>
            <span className="font-semibold">-Account Name:</span> Footloose
            Egypt
          </p>
          <p>
            <span className="font-semibold">-Account Number:</span> 100032308327
          </p>
          <p>
            <span className="font-semibold">-Phone Number:</span> 01019990595
          </p>
        </div>
        <div>
          <p className="font-semibold">2- Credit / Debit card:</p>
          <p className="">
            <span className="font-semibold text-red-500">
              -Please note that:
            </span>{" "}
            Paying with Credit / Debit card will apply additional 3% fees which
            is equivalent to 117 EGP in addition to your 3900 EGP payment.
          </p>
          <p className="mt-[10px]">
            -There are different installement plans available if you decided to
            pay using the link below.
          </p>
          <p className="">
            -You can pay using your Credit / Debit card through this link:{" "}
            <a href="https://www.easykash.net/VLR7815" className="underline">
              https://www.easykash.net/VLR7815
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PaymentModal;
