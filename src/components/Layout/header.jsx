import { WhatsAppIcon, logoImage } from "../../assets/main";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [dropdownShow, setDropdownShow] = useState(false);

  const scrollWin = (x, y) => {
    window.scrollBy(x, y);
  };

  const logObj = {
    "/": {
      bg: "bg-logo text-white",
      heading: (
        <>
          <div className="text-white mb-4 lg:mb-0 mt-16 text-center lg:text-start text-4xl lg:text-5xl lg:leading-normal font-bold">
            Quickest &<br />
            <span className="text-[#F69525] mr-4">Safest</span>
            Receiving
          </div>
          <div className="text-white text-center lg:text-start  lg:w-[500px] font-base">
            Take the complexity out of lorem ipsum scrap receiving services orem
            ipsum scrap receiving services
          </div>
          <div className="bg-[rgba(246,149,37,0.1)] backdrop-blur-[50px]  rounded-[25px] mt-12 lg:w-1/2 p-8">
            <label
              htmlFor="first_name"
              className="block text-center lg:text-start mb-2 text-sm font-medium text-white"
            >
              Chat with us to our WhatsApp number
            </label>
            <div className="lg:flex text-center lg:text-start justify-between relative">
              <input
                type="text"
                id="first_name"
                value={"+91 233 44455 6666"}
                className="bg-gray-50 mr-3 mb-4 lg:mb-0  border border-gray-300 text-gray-900 text-lg font-bold rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 px-4 p-2.5"
                placeholder="+91 233 44455 6666"
              />
              <img
                src={WhatsAppIcon}
                alt="WhatsAppIcon"
                className="absolute h-6 w-6 top-3 left-4"
              />

              <button
                type="button"
                className="bg-[#F69525] px-10 py-3  rounded-full"
              >
                Message
              </button>
            </div>
          </div>
        </>
      ),
    },
    "/learn-more": {
      bg: "bg-logo-learn-More text-white",
      heading: (
        <>
          <div className="text-white mt-20 mb-0 lg:mb-0 text-center lg:text-center text-4xl lg:text-6xl lg:leading-normal font-bold">
            Learn About
            <br />
            <span className="text-[#F69525] mr-4">Recyclables</span>
            Items
          </div>
          <div className="text-white text-center mt-8 pl-16 lg:text-center font-base">
            Take the complexity out of lorem ipsum scrap receiving services orem
            ipsum scrap receiving servicescd
          </div>
        </>
      ),
    },
    "/services": {
      bg: "bg-logo-services text-white",
      heading: (
        <>
          <div className="text-white mt-20 mb-0 lg:mb-0 text-center lg:text-center text-4xl lg:text-[5.625rem] lg:leading-normal font-bold">
            Learn About
            <br />
            <span className="text-[#F69525] mr-4">Recyclables</span>
            Items
          </div>
          <div className="text-white text-center mt-8 pl-16 lg:text-center font-base">
            Take the complexity out of lorem ipsum scrap receiving services orem
            ipsum scrap receiving servicescd
          </div>
        </>
      ),
    },
    "*": { bg: "" },
  };

  return (
    <>
      <header
        className={`${logObj[location.pathname]?.bg
            ? logObj[location.pathname]?.bg
            : "!text-black "
          } p-8   !py-12 lg:p-16 xl:p-32`}
      >
        <nav className=" border-gray-200  py-2.5 ">
          <div className="flex flex-wrap justify-between items-center mx-auto ">
            <div className="lg:hidden"></div>
            <Link>
              <div>
                <img src={logoImage} alt="logo" />
              </div>
            </Link>
            <div className="flex items-center lg:order-2">
              <button
                onClick={() => {
                  setDropdownShow(!dropdownShow);
                }}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-white  rounded-lg lg:hidden "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${dropdownShow ? "hidden" : "block"} w-6 h-6  `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 4 15"
                >
                  <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <svg
                  className={`${dropdownShow ? "block" : "hidden"} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="bg-[#F69525] text-black hidden lg:block px-5 py-3 rounded-full"
              >
                Goto Portal
              </button>
            </div>

            <div
              className={`${dropdownShow ? "block" : "hidden"
                } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 pt font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="hover:font-bold p-2.5">
                  <Link
                    to={"/"}
                    className="hover:border-t-2   transition-colors border-[#f69525]"
                  >
                    Home
                  </Link>
                </li>

                <li className="hover:font-bold p-2.5">
                  <Link
                    to={"/services"}
                    className="hover:border-t-2 border-[#f69525]">
                    Shop
                  </Link>
                </li>
                <li className="hover:font-bold  p-2.5">
                  <Link
                    to={"/learn-more"}
                    className="hover:border-t-2 border-[#f69525]"
                  >
                    Learn About Recyclables
                  </Link>
                </li>
                <li className="hover:font-bold p-2.5 ">
                  <Link
                    to={"/become-partner"}
                    className="hover:border-t-2 border-[#f69525]"
                  >
                    Become a Partner
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="bg-[#F69525] lg:hidden px-5 py-3 rounded-full"
                  >
                    Goto Portal
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {logObj[location.pathname]?.heading}
        {["/", "/learn-more"].includes(location.pathname) ? (
          <div className="mt-12  hover:animate-bounce text-white text-center">
            <div
              className="border-2     inline rounded-full p-4 pb-6"
              onClick={() => scrollWin(0, 5000)}
            >
              <span className="font-bold">|</span>
            </div>
            <div className="mt-8">Scroll Down</div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
