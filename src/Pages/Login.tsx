import { useState, useEffect, useRef } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsCheck,
  BsCheckCircle,
  BsDoorClosed,
  BsFillXCircleFill,
  BsKey,
  BsXCircle,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import logo from "../assests/logo.png";
import PageTitle from "../Components/PageTitle";
const Login = ({ isLogging, setIsLogging, onSidebarHide }) => {
  const accessTokenInputFeild = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [accessTokenVal, setAccessTokenVal] = useState("");
  const [isIdentical, setIdenticality] = useState<boolean>(false);
  const [colorState, setColorState] = useState("");

  const handleColorState = () => {
    if (accessTokenVal === process.env.REACT_APP_GITHUB_ACCESS_TOKEN) {
      setColorState("green");
      setIdenticality(true);
    } else {
      setColorState("red");
      setIdenticality(false);
    }
  };

  // 🐛 Bug: accessTokenVal is async
  // Bug: doesn't update the colorState value immediately or sync with accessTokenVal
  // ✔ Solve: Use useEffect hock

  useEffect(() => {
    handleColorState();
    accessTokenInputFeild.current!.focus();
  }, [accessTokenVal]);
  const handleInputValue = (e) => {
    handleColorState();
    setAccessTokenVal(e.currentTarget.value);
  };
  const handleSigningInProcess = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (accessTokenVal === process.env.REACT_APP_GITHUB_ACCESS_TOKEN) {
      navigate("/dashboard");
      setIsLogging(true);
    } else {
      setIsLogging(false);
      console.log("disconnecting");
    }
  };
  return (
    <div className="animate-scale-in-hor-left w-full">
      <PageTitle
        className={""}
        onSidebarHide={onSidebarHide}
        title="Login Page"
        subtitle={
          <>
            <span className="text-green-500 mr-2">Status :</span>
            <span className="text-gray-500">Performs military service</span>
          </>
        }
        is_premium={false}
        premium_star="Front-end"
      />
      <section className="bg-gray-50 dark:bg-transparent w-full  top-0 left-0 flex">
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="flex-col mb-2 items-center justify-center">
            <img className="w-12 h-12 m-auto" src={logo} alt="logo" />
            Private Page
          </div>
          <div className="shadow-xl dark:bg-transparent dark:border-gray-600/30 w-full bg-white rounded-lg dark:border md:mt-0 max-w-sm md:max-w-xl xl:p-0">
            <div className="p-6 pb-3 space-y-4 md:space-y-6 sm:p-8">
              <h3 className="font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Write Your Access Token
              </h3>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="flex items-center justify-between mb-2 text-xs xs:text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Access Token
                    <div className="flex items-center text-xs">
                      <span
                        className={`${
                          colorState === "green"
                            ? "text-gray-700"
                            : "text-red-400"
                        }`}
                      >
                        <span className=" hidden xs:block"> Disconnected</span>
                        <BsXCircle className="xs:hidden" size={15} />
                      </span>

                      {colorState === "green" ? (
                        <BsArrowRight className="mx-2" />
                      ) : (
                        <BsArrowLeft className="mx-2" />
                      )}
                      <span
                        className={`${
                          colorState === "green"
                            ? "text-green-400"
                            : "text-gray-700"
                        }`}
                      >
                        <span className=" hidden xs:block">Connected</span>
                        <BsCheckCircle className="xs:hidden" size={15} />
                      </span>
                    </div>
                  </label>
                  <input
                    ref={accessTokenInputFeild}
                    type="password"
                    name="password"
                    id="password"
                    value={accessTokenVal}
                    onChange={(e) => handleInputValue(e)}
                    placeholder="gh**************************************"
                    className={`text-xs text-${colorState}-400 block w-full py-1.5 pl-10 pr-2 xs:py-2.5 dark:bg-[#171717] dark:placeholder-gray-400 dark:text-${colorState}-600`}
                    required
                  />
                  <BsKey
                    size={20}
                    className={`dark:text-${colorState}-500 mt-1 absolute top-1/2 left-2`}
                  />
                </div>
                {isIdentical ? (
                  <button
                    type="button"
                    className={`dark:border dark:border-green-400 dark:text-green-400 dark:bg-[#171717] rounded text-xs xs:text-sm xs:rounded-lg px-2 py-1 xs:px-4 xs:py-2 text-center`}
                    onClick={(e) => handleSigningInProcess(e)}
                  >
                    Sign in
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`dark:border dark:border-red-400 dark:text-red-400 disabled:opacity-75 cursor-not-allowed dark:bg-[#171717] rounded text-xs xs:text-sm xs:rounded-lg px-2 py-1 xs:px-4 xs:py-2 text-center`}
                  >
                    Sign in
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
