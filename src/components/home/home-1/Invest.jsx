import { FiArrowRight, FiHome } from "react-icons/fi";

const Invest = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-2 md:grid-cols-3">
        <div className="md:col-span-1">
          <img
            src="/images/test2.jpg"
            // src="/images/property (1).jpeg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="relative flex-col gap-5 p-5 md:col-span-2 bg-secondary text-slate-100 flex-align-center md:flex-row">
          <div className="flex-shrink-0 p-3 -mt-16 rounded-lg bg-white/80 backdrop-blur-sm dark:bg-dark-light/60 sm:-ml-72 md:-ml-20 sm:mt-0">
            <div className="flex-shrink-0 flex-align-center">
              <img
                src="/images/avatar.png"
                alt=""
                className="flex-shrink-0 w-8 h-8 rounded-full"
              />
              <img
                src="/images/avatar-1.png"
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <img
                src="/images/avatar-2.png"
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <img
                src="/images/avatar-3.png"
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <div className="grid flex-shrink-0 w-8 h-8 -ml-2 text-white border-2 border-white rounded-full bg-primary place-items-center dark:border-dark">
                <h1>+5</h1>
              </div>
            </div>
            <h1 className="mt-2 text-secondary dark:text-slate-300">
              People Successfull Getting Services
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              Technology is best when it brings people together.
            </h1>
            <div className="mt-5 flex-align-center gap-x-3">
              <button class="px-10 py-2 rounded-md flex items-center justify-center btn-primary">
                <span class="mr-2">Get yours</span>
                <span>
                  <FiArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
