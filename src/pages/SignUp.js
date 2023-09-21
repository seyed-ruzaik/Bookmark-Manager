import { useCallback, useState  } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignUp = async () => {
    try {
      const response = await Axios.post('https://avantrio-frontend-training.herokuapp.com/api/auth/register/', {
        email,
        password,
        confirm_password: password, // Assuming confirm_password is the same as password
        first_name: name.split(' ')[0], // Extracting first name from full name
        last_name: name.split(' ')[1], // Extracting last name from full name
      });

      if (response.data.status === 'OK') {
        const message = ["Login", "Account Created Successfully", "/group-10000024091.svg", "login"];
        // Redirect the user to the protected page
        navigate('/sign-up/success', { state: { message } });
      } else {
        const message = ["Try Again", "Email Already Exists", "x.svg.png","signup"];
        // Handle signup failure
        navigate('/error', { state: { message } });
      }
    } catch (error) {
      const message = ["Try Again", "Error Creating Account", "x.svg.png", "signup"];
      console.error('Signup failed:', error);
      navigate('/error', { state: { message } });
    }
  };

  const onLoginText1Click = () => {
    navigate('/');
  };

  return (
    <div className="relative rounded-21xl bg-whitesmoke w-full h-[1080px] overflow-hidden text-left text-sm text-darkslateblue-400 font-gilroy">
      <div className="absolute top-[475px] left-[1187.8px] w-[315px] h-[386px] flex flex-col items-start justify-start gap-[162px]">
        <div className="w-[315px] h-[200px] flex flex-col items-center justify-start gap-[16px]">
          <div className="relative w-[315px] h-[92px]" />
          <div className="relative w-[315px] h-[92px]" />
        </div>
        <div />
      </div>
      <div className="absolute top-[97px] left-[1098.8px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[562px] h-[875px] flex flex-col items-center justify-center">
        <div className="relative w-[388px] h-[678px]">
          <b className="absolute top-[0px] left-[0px] text-11xl text-darkslateblue-200">
            Sign Up
          </b>
          <div className="absolute top-[509px] left-[0px] font-medium text-shade-paragraph">{`Or Sign Up With `}</div>
          <div className="absolute top-[417px] left-[0px] w-[388px] h-[60px] text-base text-shade-paragraph">
            <b className="absolute top-[176px] left-[32px] tracking-[0.5px] hidden">
              ************
            </b>
            <b className="absolute top-[284px] left-[32px] tracking-[0.5px] hidden">
              ************
            </b>
            <div className="absolute top-[73px] left-[32px] font-medium hidden">
              uiuxalam@gmail.com
            </div>
            <button
                className="rounded-xl bg-royalblue-100 shadow-[0px_12px_15px_rgba(77,_116,_249,_0.18)] w-[388px] h-[60px] flex flex-col py-0 px-[83.14311218261719px] box-border items-start justify-center text-lg text-shade-white"
                onClick={handleSignUp}
            >
              <b className="relative inline-block w-[220.4px]">Sign Up</b>
            </button>
          </div>
          <img
            className="absolute h-[8.85%] w-9/12 top-[81.86%] right-[25%] bottom-[9.29%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-1000002387.svg"
          />
          <div className="absolute top-[654px] left-[0px] w-[231px] h-6 flex flex-row items-center justify-start gap-[13px] text-center text-base text-darkslateblue-200">
            <div className="relative font-medium">{`Don’t have an account? `}</div>
            <b
              className="relative text-royalblue-200 cursor-pointer"
              onClick={onLoginText1Click}
            >
              Login
            </b>
          </div>
          <div className="absolute top-[163.76px] left-[0px] w-[382.2px] h-[93px] font-poppins">
            <div className="relative">
              <div className="absolute top-[0px] left-[0px] font-semibold">Email</div>
              <input
                  className="absolute top-[33px] left-[0px] rounded-xl bg-gainsboro-200 box-border w-[382.2px] h-[60px] border-[1px] border-solid border-darkslateblue-300"
                  type="text"
                  placeholder="Email address here"
                  style={{ fontStyle: 'italic', paddingLeft: '20px' }}
                  onChange={(e) => setEmail(e.target.value)}

              />
            </div>
          </div>
          <div className="absolute top-[46.52px] left-[0px] w-[382.2px] h-[93px] font-poppins">
            <div className="relative">
              <div className="absolute top-[0px] left-[0px] font-semibold">Name</div>
              <input
                  className="absolute top-[33px] left-[0px] rounded-xl bg-gainsboro-200 box-border w-[382.2px] h-[60px] border-[1px] border-solid border-darkslateblue-300"
                  type="text"
                  placeholder="Your name here"
                  style={{ fontStyle: 'italic', paddingLeft: '20px'}}
                  onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="absolute top-[281px] left-[0px] w-[382.2px] h-[93px] font-poppins">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              Password
            </div>

            <input
                className="absolute top-[33px] left-[0px] rounded-xl bg-gainsboro-200 box-border w-[382.2px] h-[60px] border-[1px] border-solid border-darkslateblue-300 text-5xl"
                type="password"
                style={{ paddingLeft: '20px' }}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[110.14px] left-[0px] w-[1163.86px] h-[870.31px] opacity-[0.1]"
        alt=""
        src="/vector-31.svg"
      />
      <b className="absolute top-[283.61px] left-[242.47px] text-45xl inline-block font-poppins " style={{ background: 'linear-gradient(180deg, #6a82ff, #e16aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        <p className="m-0">Mange your Links</p>
        <p className="m-0">Collection</p>
      </b>
    </div>
  );
};

export default SignUp;
