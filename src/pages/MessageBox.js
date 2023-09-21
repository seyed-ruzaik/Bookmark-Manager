import {useLocation, useNavigate} from "react-router-dom";
import {useCallback} from "react";



const MessageBox = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const message = state ? state.message : ['']; // Get the success message from props

  const handleError = useCallback(() => {
    if (message[3] === "signup"){
      navigate("/sign-up");
    } else {
      navigate("/login");
    }
  }, [navigate]);



  return (
    <div className="relative rounded-21xl bg-whitesmoke w-full h-[1080px] overflow-hidden text-left text-base text-darkslateblue-200 font-poppins">
      <div className="absolute top-[0px] left-[-9.11px] [backdrop-filter:blur(30px)] w-[1938.23px] h-[1080px]" />
      <div className="absolute top-[332.16px] left-[668.69px] rounded-11xl bg-shade-white w-[582.61px] h-[435.54px] flex flex-col py-0 px-[125.59095764160156px] box-border items-start justify-center text-shade-white">
        <div className="relative w-[304.02px] h-[319.53px]">
          <button className="absolute top-[210.53px] left-[27.41px] rounded-xl bg-royalblue-100 w-[276.61px]
          h-[60px] flex flex-col items-center justify-center text-lg text-shade-white"  onClick={handleError}>

            <b className="relative font-semibold">{message[0]}</b>
          </button>
          <div className="absolute top-[110.31px] left-[17px] w-[304.02px] h-[108.94px] flex flex-col items-center justify-start gap-[4px] text-center text-5xl text-black">
            <div className="relative font-semibold inline-block w-[304.02px] h-[68.07px] shrink-0">{message[1]}</div>
          </div>
          <img
            className="absolute top-[0px] left-[122.1px] w-[67.23px] h-[67.23px]"
            alt=""
            src={message[2]}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
