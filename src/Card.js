import React from "react";

function Card({ month }) {
  return (
    <div className="bg-white border border-gray-400 w-[24rem] h-[32rem] shadow-black shadow-sm   hover:bg-slate-100 ">
      <div className="text-[#4c4d5f] flex flex-col m-10">
        <h1 className="font-semibold text-lg mb-4">Workflow</h1>
        <div className="details-1 flex mb-4">
          <h2 className="text-2xl">$</h2>
          <h2 className="text-6xl">{month ? "19" : "75"}</h2>
          <h3 className="text-3xl self-end">{month ? "/MONTH" : "/YEAR"}</h3>
        </div>
        <hr className="bg-[#00b289] w-[90%] mx-auto h-0.5 border-0 "></hr>
        <ul className="flex flex-col text-sm m-6 gap-4">
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
        <div className="flex justify-center ">
          <button className="p-4 px-24 border-green-500 bg-green-600 text-white border rounded-md uppercase hover:bg-green-700 ">
            start free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
