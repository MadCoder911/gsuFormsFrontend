import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
const ImagesModal = ({ imagesModal, setImagesModal }) => {
  return (
    <div
      className={`z-[999] bg-[#000000ab] absolute top-0 flex items-center justify-center w-[100%] h-[100%]`}
    >
      <div className="bg-blue-400  z-[99999] p-4 rounded-[8px] max-h-[80%] overflow-y-scroll text-white max-w-[90%]">
        <div className="relative flex justify-between items-center">
          <p>Steps to upload images</p>
          <button onClick={() => setImagesModal(false)}>
            <span className="text-[20px] bg-[#4FBBFB] px-4 py-2  flex justify-center text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out">
              x
            </span>
          </button>
        </div>
        <p>
          <span className="font-semibold">Step 1:</span>{" "}
          <a className="underline" href="https://imgbb.com/" target="_blank">
            Click Here
          </a>{" "}
          to open imgbb.com{" "}
        </p>
        <p>
          <span className="font-semibold">Step 2:</span> Click start uploading
          and select the image from your gallery and then click add
        </p>
        <div className="w-[100%] flex items-center justify-center mt-[20px] mb-[20px]">
          <img src={step1} alt="step1" className="max-w-[250px]" />
        </div>
        <p>
          <span className="font-semibold">Step 3:</span> After selecting your
          image click on the Upload button and then wait for your image to
          finish uploading
        </p>
        <div className="w-[100%] flex items-center justify-center mt-[20px] mb-[20px]">
          <img src={step2} alt="step1" className="max-w-[250px] h-fit" />
        </div>
        <p>
          Step 4: click on <span className="font-bold">Copy</span> to copy your
          image link
        </p>
        <div className="w-[100%] flex items-center justify-center mt-[20px] mb-[20px]">
          <img src={step3} alt="step1" className="max-w-[250px] h-fit" />
        </div>
        <p>
          <span className="font-semibold">Step 5:</span> Paste the link which
          you copied inside the desired field
        </p>
        <div className="w-[100%] flex items-center justify-center mt-[20px] mb-[20px]">
          <img src={step4} alt="step1" className="max-w-[250px] h-fit" />
        </div>
        <p>Repeat the same process for all the images</p>
      </div>
    </div>
  );
};
export default ImagesModal;
