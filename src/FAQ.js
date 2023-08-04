import React from "react";

function FAQ() {
  return (
    <div className="mt-10 flex justify-center mb-32 ">
      <section>
        <h1 className="text-green-600 text-4xl font-semibold justify-center flex mt-10 mb-10 max-sm:text-xl max-sm:font-semibold max-sm:text-green-800">
          Frequently Asked Questions
        </h1>
        <div className="grid grid-rows-4 list-none text-2xl gap-4 justify-center max-sm:text-xl">
          <h2 className="hover:text-green-600 cursor-pointer flex justify-start">
            How does the free trial work?
            <img
              className="w-8 h-8 ml-auto"
              src="http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/59f05f389cd27200014f061e_icon-expand.png"
            />
          </h2>
          <h2 className="hover:text-green-600 cursor-pointer flex justify-start">
            Can I change plans anytime?
            <img
              className="w-8 h-8 ml-auto"
              src="http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/59f05f389cd27200014f061e_icon-expand.png"
            />
          </h2>
          <h2 className="hover:text-green-600 cursor-pointer flex justify-start ">
            How do I pause my Bonsai subscription?
            <img
              className="w-8 h-8 ml-auto"
              src="http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/59f05f389cd27200014f061e_icon-expand.png"
            />
          </h2>
          <h2 className="hover:text-green-600 cursor-pointer flex justify-start">
            What is your refund policy?
            <img
              className="w-8 h-8 ml-auto"
              src="http://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/59f05f389cd27200014f061e_icon-expand.png"
            />
          </h2>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
