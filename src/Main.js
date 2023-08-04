import React, { useState } from "react";
import Card from "./Card";

function Main() {
  const [Month, setMonth] = useState(true);

  return (
    <div className="bg-gray-50 mt-10 flex flex-col">
      {/* head text */}
      <div className="justify-around flex max-sm:flex-col max-sm:self-center">
        <h1 className="text-4xl text-[#4c4d5f] uppercase mr-8 ">
          Plans & Pricing
        </h1>

        {/* toggle switch */}
        <div className="flex items-center text-[#4c4d5f] max-sm:text-2xl ">
          <h2 className="mr-4 uppercase">Monthly</h2>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onClick={() => setMonth(!Month)}
              value="true"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-green-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-green-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
          <h2 className="ml-4 uppercase">Yearly</h2>
        </div>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-2 self-center gap-8 mt-8 mb-8 max-md:flex max-md:flex-col">
        {/* card-1 */}
        <Card month={Month} />
        {/* card-2 */}
        <div className="bg-white border border-gray-400 w-[24rem] h-[32rem] shadow-black shadow-sm hover:bg-slate-100   ">
          <div className="text-[#4c4d5f] flex flex-col m-10">
            <h1 className="font-semibold text-lg mb-4">Workflow Plus</h1>
            <div className="details-1 flex mb-4">
              <h2 className="text-2xl">$</h2>
              <h2 className="text-6xl">29</h2>
              <h3 className="text-3xl self-end">/MONTH</h3>
            </div>
            <hr className="bg-[#00b289] w-[90%] mx-auto h-0.5 border-0 "></hr>
            <ul className="flex flex-col text-sm m-6 gap-4">
              <li className="flex">
                <img
                  src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  alt="tick icon"
                  className="mr-2"
                  width="12"
                />
                lorem ipsum shit
              </li>
              <li className="flex">
                {" "}
                <img
                  src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  alt="tick icon"
                  className="mr-2"
                  width="12"
                />
                lorem ipsum shit
              </li>
              <li className="flex">
                {" "}
                <img
                  src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  alt="tick icon"
                  className="mr-2"
                  width="12"
                />
                lorem ipsum shit
              </li>
              <li className="flex">
                {" "}
                <img
                  src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  alt="tick icon"
                  className="mr-2"
                  width="12"
                />
                lorem ipsum shit
              </li>
              <li className="flex">
                {" "}
                <img
                  src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  alt="tick icon"
                  className="mr-2"
                  width="12"
                />
                lorem ipsum shit
              </li>
              <li className="flex">
                {" "}
                <img
                  src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                  alt="tick icon"
                  className="mr-2"
                  width="12"
                />
                lorem ipsum shit
              </li>
            </ul>

            <button className="p-4 px-24 border-green-500 bg-green-600 text-white border rounded-md uppercase hover:bg-green-700">
              start free
            </button>
          </div>
        </div>
      </div>
      {/* the other part after cards */}
      <div className="MID ">
        <h1 className="text-[#4c4d5f] text-4xl justify-center flex mt-10 mb-10 max-sm:text-xl max-sm:font-semibold max-sm:text-green-800 ">
          Super charge your work with add-ons
        </h1>

        <div className="grid grid-rows-3 justify-center ">
          <div
            className=" max-sm:w-[20rem] max-sm:h-[8rem] max-sm:m-auto w-[70rem] h-[8rem] max-sm:mb-2 max-sm:rounded-lg
             bg-white  shadow-md shadow-slate-300 flex justify-around space-x-24 items-center text-[#4c4d5f] hover:bg-slate-100 "
          >
            <h1 className="font-semibold text-xl flex-col flex justify-center max-sm:ml-4">
              Collaborators
              <span className="text-sm max-sm:text-xs font-normal">
                Invite other users to specific projects for limited access and
                functionality.
              </span>
            </h1>
            <h2 className="text-3xl font-bold flex max-sm:text-2xl">Free</h2>
          </div>
          <div
            className="bg-white max-sm:w-[20rem] max-sm:h-[8rem] max-sm:m-auto w-[70rem] h-[8rem] max-sm:rounded-lg
           shadow-md shadow-slate-300 flex justify-around space-x-28 items-center text-[#4c4d5f] hover:bg-slate-100 mt-0 mb-4 max-sm:mb-2"
          >
            <h1 className="font-semibold text-xl flex-col flex justify-center max-sm:ml-4 ">
              Partners
              <span className="text-sm font-normal">
                Invite other users for full account access and company
                management.
              </span>
            </h1>
            <h2 className="text-4xl font-bold flex max-sm:text-3xl">$9</h2>
          </div>
          <div
            className="bg-white max-sm:w-[20rem] max-sm:h-[8rem] max-sm:m-auto w-[70rem] h-[8rem] max-sm:rounded-lg
          shadow-md shadow-slate-300 flex justify-around space-x-24 items-center hover:bg-slate-100  text-[#4c4d5f]"
          >
            <h1 className="font-semibold text-xl flex-col flex justify-center max-sm:ml-4">
              Bonsai Tax
              <span className="text-sm font-normal">
                Track expenses, identify write-offs, and estimate quarterly
                taxes easily.
              </span>
              <li className="text-green-600 uppercase cursor-pointer text-xs mt-2 list-none hover:text-green-500">
                Learn More &gt;
              </li>
            </h1>
            <h2 className="text-4xl font-bold flex max-sm:text-3xl">$10</h2>
          </div>
        </div>
      </div>
      {/* another part */}
      <div className="bos flex justify-center max-sm:mt-10 mt-10 mb-10 max-md:m-2">
        <div className="bg-green-100 w-[50rem] h-[10rem] flex justify-around max-md:flex-col ">
          <h1 className="text-4xl items-center m-8 max-md:m-2 max-sm:text-3xl max-sm:self-center">
            It’s <span className="text-green-600">your</span> business. <br />
            We’re here to help it grow.
          </h1>
          <button className="w-28 h-14 border-green-500 bg-green-600 text-white border rounded-md uppercase hover:bg-green-700 self-center max-md:w-28 max-md:h-12 max-sm:mb-0">
            start free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
