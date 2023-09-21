import {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState(''); // Initialize email state with an empty string
    const [inputPassword, setPassword] = useState(''); // Initialize password state with an empty string
    const message = ["Login", "Incorrect Credentials", "x.svg.png", "login"];

    useEffect(() => {
        // Check if an access token is already stored in local storage
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            // If an access token is found, navigate to the protected page
            navigate('/');
        }
    }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

    const handleLogin = useCallback(async () => {
        try {
            console.log(email + " "+inputPassword)
            const response = await Axios.post('https://avantrio-frontend-training.herokuapp.com/api/auth/token/', {
                username: email,
                password: inputPassword,
            });

            // Check if the response contains a status of "OK" and a data object
            if (response.data.status === 'OK' && response.data.data) {
                const accessToken = response.data.data.access;

                // You can now do something with the access token, like storing it in local storage or using it for authentication.
                // For this example, we'll just log it to the console.
                console.log('Access Token:', accessToken);
                localStorage.setItem('accessToken', accessToken);
                // Redirect the user to the "/frame-1" page upon successful login
                navigate('/');

                // Redirect the user to a new page or perform any other actions after successful login.
            } else {
                // Handle the case where the response status is not "OK" or data is missing.
                console.error('Login failed. Invalid response:', response.data);
                navigate('/error', { state: { message } });
            }
        } catch (error) {
            // Handle any errors that occur during the login request, e.g., display an error message.
            navigate('/error', { state: { message } });
            console.error('Login failed:', error);
        }
    }, [email, inputPassword]);



    return (
      <div className="relative rounded-21xl bg-whitesmoke w-full h-[1080px] overflow-hidden text-left text-sm text-darkslateblue-400 font-poppins">
        <div className="absolute top-[120px] left-[211px] w-[87px] h-[116px] overflow-hidden" />
        <div className="absolute top-[97px] left-[1095.9px] w-[562px] h-[779.34px] text-11xl text-darkslateblue-200 font-gilroy">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[562px] h-[779.34px] flex flex-col py-[15.34307861328125px] px-0 box-border items-center justify-end">
            <div className="relative w-[388px] h-[695px]">
              <b className="absolute top-[0px] left-[2px]">Login</b>
              <div className="absolute top-[309px] left-[2px] w-[315px] h-[200px] flex flex-col items-center justify-start gap-[16px] text-sm text-shade-paragraph">
                <div className="relative w-[315px] h-[92px]" />
                <div className="w-[315px] h-[92px] flex flex-col py-[30px] px-[81px] box-border items-end justify-end">
                  <div className="relative font-medium">{`Or Login with `}</div>
                </div>
              </div>
              <div className="absolute top-[671px] left-[2px]" />
              <div className="absolute top-[326px] left-[0px] w-[388px] h-[111px] flex flex-col py-0 pr-0 pl-0.5 box-border items-start justify-start gap-[27px] text-center text-base text-royalblue-200">
                <div className="relative font-semibold">Forgot Password?</div>
                <button
                    className="rounded-xl bg-royalblue-100 shadow-[0px_12px_15px_rgba(77,_116,_249,_0.18)] w-[388px] h-[60px] flex flex-col py-0 px-[83.14311218261719px] box-border items-start justify-center text-lg text-shade-white"
                    // onClick={() => console.log("Button clicked!")}
                    onClick={handleLogin}
                >
                  <b className="relative inline-block w-[220.4px]">Login</b>
                </button>

              </div>
            </div>
          </div>
          <img
              className="absolute h-[7.7%] w-[51.78%] top-[74.17%] right-[24.2%] bottom-[18.14%] left-[24.02%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-10000023871.svg"
          />
          <div className="absolute top-[677px] left-[89px] w-[238px] h-6 flex flex-row items-center justify-start gap-[5px] text-center text-base">
            <div className="relative font-medium">{`Don’t have an account? `}</div>
            <b
                className="relative text-royalblue-200 cursor-pointer"
                onClick={onSignUpTextClick}
            >
              Sign up
            </b>
          </div>
        </div>
        <div className="absolute top-[254.4px] left-[1188.71px] w-[382.2px] h-[93px]">
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
        <div className="absolute top-[371.64px] left-[1188.71px] w-[382.2px] h-[93px]">
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
        <img
            className="absolute top-[110.14px] left-[0px] w-[1163.86px] h-[870.31px] opacity-[0.1]"
            alt=""
            src="/vector-3.svg"
        />
        <b className="absolute top-[283.61px] left-[242.47px] text-45xl inline-block " style={{ background: 'linear-gradient(180deg, #6a82ff, #e16aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          <p className="m-0">Mange your Links</p>
          <p className="m-0">Collection</p>
        </b>
      </div>
  );
};

export default Login;
