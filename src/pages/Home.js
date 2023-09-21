import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user has a valid access token
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // If there is no access token, navigate the user to the login page
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="relative rounded-21xl bg-whitesmoke w-full h-[1080px] overflow-hidden text-left text-base text-darkslateblue-200 font-poppins">
      <div className="absolute top-[0px] left-[1430.7px] bg-shade-white w-[489.3px] h-[1080px]" />
      <img
        className="absolute top-[110.14px] left-[0px] w-[1163.86px] h-[870.31px] opacity-[0.1]"
        alt=""
        src="/vector-33.svg"
      />
      <div className="absolute top-[52.22px] left-[275.85px] text-xl font-semibold text-black">
        Home
      </div>
      <div className="absolute top-[201.32px] left-[275.85px] w-[1154.86px] h-[30px] text-xl">
        <div className="absolute top-[0px] left-[0px] font-semibold">{`My Favorite `}</div>
        <img
          className="absolute top-[19.35px] left-[159.45px] w-[995.4px] h-[1.18px]"
          alt=""
          src="/vector-13.svg"
        />
      </div>
      <div className="absolute top-[254.38px] left-[271.43px] w-[323.34px] h-[135.37px]">
        <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[323.34px] h-[135.37px]">
          <img
            className="absolute h-[15.93%] w-[7.65%] top-[72.66%] right-[6.59%] bottom-[11.41%] left-[85.77%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector14.svg"
          />
          <div className="absolute top-[42.1px] left-[145.16px] font-semibold">
            Movies
          </div>
          <div className="absolute top-[27.53px] left-[33.49px] w-[85.72px] h-[80.3px] text-[16.56px] text-shade-white">
            <img
              className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
              alt=""
              src="/group-315.svg"
            />
            <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
              <div className="absolute top-[1.77px] left-[9.46px] font-semibold">
                7
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative w-[21.29px] h-[4.73px]"
          alt=""
          src="/union38.svg"
        />
      </div>
      <div className="absolute top-[254.38px] left-[616.41px] w-[323.34px] h-[135.37px]">
        <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[323.34px] h-[135.37px]">
          <img
            className="absolute h-[15.93%] w-[7.65%] top-[72.66%] right-[6.59%] bottom-[11.41%] left-[85.77%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector15.svg"
          />
          <div className="absolute top-[42.1px] left-[145.16px] font-semibold">
            Music
          </div>
          <div className="absolute top-[27.53px] left-[33.49px] w-[85.72px] h-[80.3px] text-sm text-shade-white">
            <img
              className="absolute top-[5.21px] left-[-4px] w-[83.08px] h-[83.08px]"
              alt=""
              src="/group-316.svg"
            />
            <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
              <div className="absolute top-[4.77px] left-[9.46px] font-semibold">
                9
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative w-[21.29px] h-[4.73px]"
          alt=""
          src="/union39.svg"
        />
      </div>
      <div className="absolute top-[450.45px] left-[271.43px] w-[1159.27px] h-[225.75px] text-sm text-shade-white">
        <div className="absolute top-[0px] left-[4.42px] w-[1154.86px] h-[30px] text-xl text-darkslateblue-200">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Recent Collections
          </div>
          <img
            className="absolute top-[19.35px] left-[204.83px] w-[950.02px] h-[1.18px]"
            alt=""
            src="/vector-14.svg"
          />
        </div>
        <div className="absolute top-[49.35px] left-[0px] w-[249.06px] h-[176.4px]">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[249.06px] h-[176.4px] flex flex-col pt-[27.727825164794922px] pb-[28.553253173828125px] pr-[81.66973114013672px] pl-[81.66968536376953px] box-border items-start justify-end gap-[15px]">
            <div className="relative w-[85.72px] h-[80.3px]">
              <img
                className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
                alt=""
                src="/group-317.svg"
              />
              <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
                <div className="absolute top-[3.77px] left-[9.46px] font-semibold">
                  11
                </div>
              </div>
            </div>
            <div className="relative text-base font-semibold text-darkslateblue-200 text-center">
              Education
            </div>
          </div>
          <img
            className="relative w-[21.29px] h-[4.73px]"
            alt=""
            src="/union40.svg"
          />
        </div>
        <div className="absolute top-[49.35px] left-[279.04px] w-[249.06px] h-[176.4px]">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[249.06px] h-[176.4px] flex flex-col py-[27.727825164794922px] pr-[77.02875518798828px] pl-[77.02872467041016px] box-border items-center justify-start gap-[15px]">
            <div className="relative w-[85.72px] h-[80.3px]">
              <img
                className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
                alt=""
                src="/group-318.svg"
              />
              <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
                <div className="absolute top-[3.77px] left-[9.46px] font-semibold">
                  8
                </div>
              </div>
            </div>
            <div className="relative text-base font-semibold text-darkslateblue-200 text-center">
              Documents
            </div>
          </div>
          <img
            className="relative w-[21.29px] h-[4.73px]"
            alt=""
            src="/union41.svg"
          />
        </div>
        <div className="absolute top-[49.35px] left-[558.07px] w-[249.06px] h-[176.4px] text-[16.56px]">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[249.06px] h-[176.4px] flex flex-col py-[27.727825164794922px] pr-[81.66969299316406px] pl-[81.66972351074219px] box-border items-center justify-start gap-[15px]">
            <div className="relative w-[85.72px] h-[80.3px]">
              <img
                className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
                alt=""
                src="/group-319.svg"
              />
              <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
                <div className="absolute top-[1.77px] left-[9.46px] font-semibold">
                  3
                </div>
              </div>
            </div>
            <div className="relative text-base font-semibold text-darkslateblue-200 text-center">
              Financial
            </div>
          </div>
          <img
            className="relative w-[21.29px] h-[4.73px]"
            alt=""
            src="/union42.svg"
          />
        </div>
        <div className="absolute top-[49.35px] left-[837.11px] w-[249.06px] h-[176.4px]">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[249.06px] h-[176.4px] flex flex-col py-[27.727825164794922px] pr-[81.66976928710938px] pl-[81.66964721679688px] box-border items-center justify-start gap-[15px]">
            <div className="relative w-[85.72px] h-[80.3px]">
              <img
                className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
                alt=""
                src="/group-320.svg"
              />
              <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
                <div className="absolute top-[3.77px] left-[9.46px] font-semibold">
                  2
                </div>
              </div>
            </div>
            <div className="relative text-base font-semibold text-darkslateblue-200 text-center">
              Business
            </div>
          </div>
          <img
            className="relative w-[21.29px] h-[4.73px]"
            alt=""
            src="/union43.svg"
          />
        </div>
      </div>
      <div className="absolute top-[736.9px] left-[271.43px] w-[1159.27px] h-[225.75px] text-sm text-shade-white">
        <div className="absolute top-[0px] left-[4.42px] w-[1154.86px] h-[30px] text-xl text-darkslateblue-200">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            All Collections
          </div>
          <img
            className="absolute top-[19.35px] left-[159.45px] w-[995.4px] h-[1.18px]"
            alt=""
            src="/vector-15.svg"
          />
        </div>
        <div className="absolute top-[49.35px] left-[0px] w-[249.06px] h-[176.4px]">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[249.06px] h-[176.4px] flex flex-col pt-[27.727825164794922px] pb-[28.553253173828125px] pr-[81.66973114013672px] pl-[81.66968536376953px] box-border items-start justify-end gap-[15px]">
            <div className="relative w-[85.72px] h-[80.3px]">
              <img
                className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
                alt=""
                src="/group-321.svg"
              />
              <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
                <div className="absolute top-[3.77px] left-[9.46px] font-semibold">
                  11
                </div>
              </div>
            </div>
            <div className="relative text-base font-semibold text-darkslateblue-200 text-center">
              Education
            </div>
          </div>
          <img
            className="relative w-[21.29px] h-[4.73px]"
            alt=""
            src="/union44.svg"
          />
        </div>
        <div className="absolute top-[49.35px] left-[279.04px] w-[249.06px] h-[176.4px]">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[249.06px] h-[176.4px] flex flex-col py-[27.727825164794922px] pr-[77.02875518798828px] pl-[77.02872467041016px] box-border items-center justify-start gap-[15px]">
            <div className="relative w-[85.72px] h-[80.3px]">
              <img
                className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
                alt=""
                src="/group-322.svg"
              />
              <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
                <div className="absolute top-[3.77px] left-[9.46px] font-semibold">
                  8
                </div>
              </div>
            </div>
            <div className="relative text-base font-semibold text-darkslateblue-200 text-center">
              Documents
            </div>
          </div>
          <img
            className="relative w-[21.29px] h-[4.73px]"
            alt=""
            src="/union45.svg"
          />
        </div>
        <div className="absolute top-[49.35px] left-[558.07px] w-[249.06px] h-[176.4px] text-[16.56px]">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[249.06px] h-[176.4px] flex flex-col py-[27.727825164794922px] pr-[81.66969299316406px] pl-[81.66972351074219px] box-border items-center justify-start gap-[15px]">
            <div className="relative w-[85.72px] h-[80.3px]">
              <img
                className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
                alt=""
                src="/group-323.svg"
              />
              <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
                <div className="absolute top-[1.77px] left-[9.46px] font-semibold">
                  3
                </div>
              </div>
            </div>
            <div className="relative text-base font-semibold text-darkslateblue-200 text-center">
              Financial
            </div>
          </div>
          <img
            className="relative w-[21.29px] h-[4.73px]"
            alt=""
            src="/union46.svg"
          />
        </div>
        <div className="absolute top-[49.35px] left-[837.11px] w-[249.06px] h-[176.4px]">
          <div className="absolute top-[0px] left-[0px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[249.06px] h-[176.4px] flex flex-col py-[27.727825164794922px] pr-[81.66976928710938px] pl-[81.66964721679688px] box-border items-center justify-start gap-[15px]">
            <div className="relative w-[85.72px] h-[80.3px]">
              <img
                className="absolute top-[5.21px] left-[0px] w-[75.08px] h-[75.08px]"
                alt=""
                src="/group-324.svg"
              />
              <div className="absolute top-[0px] left-[57.33px] w-[28.38px] h-[28.38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-royalblue-100 w-[28.38px] h-[28.38px]" />
                <div className="absolute top-[3.77px] left-[9.46px] font-semibold">
                  2
                </div>
              </div>
            </div>
            <div className="relative text-base font-semibold text-darkslateblue-200 text-center">
              Business
            </div>
          </div>
          <img
            className="relative w-[21.29px] h-[4.73px]"
            alt=""
            src="/union47.svg"
          />
        </div>
      </div>
      <div className="absolute top-[36.46px] left-[1458.05px] rounded-[17.74px] bg-shade-white shadow-[0px_17.73953628540039px_137.19px_rgba(48,_56,_125,_0.12)] w-[268.28px] h-[60px] flex flex-row py-0 px-[30.9215087890625px] box-border items-center justify-start gap-[12px] text-darkslateblue-400">
        <img className="relative w-5 h-5" alt="" src="/union48.svg" />
        <i className="relative font-medium">Search</i>
      </div>
      <div className="absolute top-[116.06px] left-[266.83px] rounded-xl bg-royalblue-100 w-[209.78px] h-[60px] flex flex-col py-0 px-[28.346435546875px] box-border items-end justify-center text-shade-white">
        <div className="w-[151.61px] h-6 flex flex-row items-center justify-end gap-[23px]">
          <div className="relative font-semibold">Create Folder</div>
          <img
            className="relative w-4 h-4"
            alt=""
            src="/group-1000002437.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[1686.64px] w-[233.36px] h-[237.88px] object-cover"
        alt=""
        src="/group-3110@2x.png"
      />
      <div className="absolute top-[177.16px] left-[1458.05px] rounded-2xl bg-shade-white shadow-[0px_4px_19px_rgba(48,_56,_125,_0.09)] w-[407.07px] h-[364.56px] flex flex-col py-[18.2601318359375px] px-[25.7923583984375px] box-border items-start justify-start gap-[15px] text-darkslateblue-400">
        <div className="relative font-medium text-black">Add Collection</div>
        <div className="relative w-[352.37px] h-[78.74px] text-xs">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Collection Name
          </div>
          <div className="absolute top-[23.74px] left-[0px] rounded-xl bg-gainsboro-200 box-border w-[352.37px] h-[55px] border-[1px] border-solid border-darkslateblue-300" />
          <i className="absolute top-[40.74px] left-[27.18px] text-sm">
            Collection name here
          </i>
        </div>
        <div className="relative w-[352.37px] h-[78.74px] text-xs">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Select Icon Color
          </div>
          <div className="absolute top-[23.74px] left-[0px] rounded-xl bg-gainsboro-200 box-border w-[352.37px] h-[55px] border-[1px] border-solid border-darkslateblue-300" />
          <div className="absolute top-[40.74px] left-[27.18px] text-base font-medium text-black">
            Pink
          </div>
          <img
            className="absolute h-[10.16%] w-[3.97%] top-[66.64%] right-[5.59%] bottom-[23.2%] left-[90.44%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector16.svg"
          />
          <div className="absolute top-[40.35px] left-[198.77px] rounded-lg bg-hotpink w-[110.97px] h-[31.36px]" />
        </div>
        <div className="rounded-xl bg-royalblue-100 w-[352.37px] h-[55px] flex flex-col py-[14.0540771484375px] px-[25.696044921875px] box-border items-end justify-start text-shade-white">
          <div className="w-[296.86px] h-6 flex flex-row items-center justify-start gap-[162px]">
            <div className="relative font-semibold">Add Collection</div>
            <img
              className="relative w-4 h-4"
              alt=""
              src="/group-1000002438.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[37px] left-[1743.37px] w-[57.36px] h-[57.36px]"
        alt=""
        src="/group-1000002450.svg"
      />
    </div>
  );
};

export default Home;
