import React from "react";

function Header() {
  return (
    <div className="sticky top-0 z-[100] flex justify-around  bg-white p-4 items-center max-sm:flex-col ">
      <h1 className="text-3xl text-green-600 font-semibold cursor-pointer max-sm:text-md max-sm:mb-8">
        @ Bonsai
      </h1>
      <header className=" ">
        <ul className=" flex justify-center gap-4 space-x-2 text-[1.2rem] text-[#4c4d5f] max-sm:text-sm">
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Templates</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Reviews</li>
        </ul>
      </header>
      <nav className="max-sm:hidden">
        <ul className="flex space-x-6 text-[1rem] ">
          <button className=" border-green-600 border rounded-md p-2 px-6 text-green-600 uppercase hover:bg-green-600 hover:text-white">
            log in
          </button>
          <button className="p-2 px-6 border-green-500 bg-green-600 text-white border rounded-md uppercase hover:bg-green-700">
            start free
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
