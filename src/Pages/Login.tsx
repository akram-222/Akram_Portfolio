import { useState, useEffect, useRef } from "react";
import { BsArrowLeft, BsArrowRight, BsKey } from "react-icons/bs";
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
    <>
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
        premium_star="Front-end"
      />
      <section className="bg-gray-50 dark:bg-transparent w-full absolute top-0 left-0 h-full flex">
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#d"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            Portfolio
          </a>
          <div className="shadow-xl dark:bg-transparent dark:border-gray-600/30 w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="flex items-center justify-between mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                        Disconnected
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
                        Connected
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
                    className={`pl-10 text-xs text-${colorState}-400 block w-full p-2.5 dark:bg-[#171717] dark:placeholder-gray-400 dark:text-${colorState}-600`}
                    required
                  />
                  <BsKey
                    size={25}
                    className={`dark:text-${colorState}-500 absolute top-1/2 left-2`}
                  />
                </div>
                {isIdentical ? (
                  <button
                    type="button"
                    className={`dark:border dark:border-green-400 dark:text-green-400 dark:bg-[#171717] text-sm rounded-lg px-4 py-2 text-center`}
                    onClick={(e) => handleSigningInProcess(e)}
                  >
                    Sign in
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`dark:border dark:border-red-400 dark:text-red-400 disabled:opacity-75 cursor-not-allowed dark:bg-[#171717] text-sm rounded-lg px-4 py-2 text-center`}
                  >
                    Sign in
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
