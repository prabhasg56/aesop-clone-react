import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col text-[#fffef2] bg-[#252525]">
        <div className="grid grid-cols-4 grid-flow-row gap-4  py-6 text-center space-x-6 md:text-left p-6 mt-8 ">
          <div>
            <section>
              <h3 className="font-bold">Subscribe to Aesop communications</h3>
              <div className="border-t my-4 border-[#fffef2] ">
                <div className="mt-8">
                  <div className="relative h-10 w-full min-w-[200px]">
                    <div className="flex flex-row border py-2 px-2 space-x-32 cursor-pointer ">
                      <input
                        placeholder="Email address"
                        className="bg-transparent"
                      />
                      <span>
                        <svg
                          className="h-6 w-6 ml-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <line x1="5" y1="12" x2="19" y2="12" />{" "}
                          <line x1="13" y1="18" x2="19" y2="12" />{" "}
                          <line x1="13" y1="6" x2="19" y2="12" />
                        </svg>
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 mt-3 text-black border-black rounded focus:ring-white dark:focus:ring-white dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subscribe to receive communications from Aesop. By
                      subscribing, you confirm you have read and understood our
                      privacy policy.
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section>
            <h3 className="font-bold">Orders and support</h3>
            <ul className="border-t my-4 border-[#fffef2] ">
              <li className="my-4 cursor-pointer">Contact us</li>
              <li className="my-4 cursor-pointer">FAQs</li>
              <li className="my-4 cursor-pointer">Shipping</li>
              <li className="my-4 cursor-pointer">Returns</li>
              <li className="my-4 cursor-pointer">Order history</li>
              <li className="my-4 cursor-pointer">Terms and conditions</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold">Services</h3>
            <ul className="border-t my-4 border-[#fffef2] ">
              <li className="my-4 cursor-pointer">Live assistance</li>
              <li className="my-4 cursor-pointer">Corporate gifts</li>
              <li className="my-4 cursor-pointer">Facial Appointments</li>
              <li className="my-4 cursor-pointer">Click and Collect</li>
              <li className="my-4 cursor-pointer">Video consultation</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold">Location preferences</h3>
            <ul className="border-t my-4 border-[#fffef2] ">
              <li className="mt-4 font-bold">Shipping:</li>
              <li className="mt-2 underline cursor-pointer">
                Hong Kong SAR, China
              </li>
              <li className="mt-6 font-bold">Language:</li>
              <li className="mt-2 underline cursor-pointer">English</li>
              <li className="mt-2 cursor-pointer">繁體中文</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold">Sustainability</h3>
            <div className="border-t my-4 border-[#fffef2]">
              <p className="my-4 pr-2">
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation.{" "}
                <span className="cursor-pointer">Learn more</span>
              </p>
            </div>
          </section>

          <section>
            <h3 className="font-bold">About</h3>
            <ul className="border-t my-4 border-[#fffef2] ">
              <li className="my-4 cursor-pointer">Our story</li>
              <li className="my-4 cursor-pointer">Foundation</li>
              <li className="my-4 cursor-pointer">Careers</li>
              <li className="my-4 cursor-pointer">Privacy policy</li>
              <li className="my-4 cursor-pointer">Accessibility</li>
              <li className="my-4 cursor-pointer">Cookie policy</li>
            </ul>
          </section>
          <section>
            <h3 className="font-bold">Social media</h3>
            <ul className="border-t my-4 border-[#fffef2] ">
              <li className="my-4 cursor-pointer">Instagram</li>
              <li className="my-4 cursor-pointer">Twitter</li>
              <li className="my-4 cursor-pointer">LinkedIn</li>
              <li className="my-4 cursor-pointer">WeChat</li>
              <li className="my-4 cursor-pointer">Weibo</li>
            </ul>
          </section>
        </div>

        <div className="flex items-center h-20 border-t-4 border-[#fffef2]">
          <span className="ml-6">© Aesop</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
