import { FiCheck, FiLayers, FiUsers } from "react-icons/fi";

const Speciality = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[20rem]">
          {/* <h1 className="sub-heading">mission & vision</h1> */}
          <h1 className="heading">
            Our vision is to be the no.1 IT service provider with the
            accessability ease for everyone
          </h1>
          <p className="mt-3">
            Livin 'Art Technologies first known as Tech Loaders, Was founded by
            Rishi Malviya 18 yrs of Young Entrepreneur. <br /> <br />
            It is a tech based branding company, performs digital branding with{" "}
            <br />
            AI based tech systems for several big & small brands.
          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Handholding Support</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Handholding Support</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Quality Work & Tracking Channels</p>
            </div>
            <button className="mt-4 btn btn-primary">read more</button>
          </div>
        </div>
        <div className="flex-1 basis-[20rem]">
          <div className="relative">
            <img
              src="/images/trans.jpg"
              alt=""
              className="rounded-lg w-full sm:h-[400px] object-cover"
            />
            <div className="absolute -bottom-10 sm:bottom-5 -left-2 md:-left-20">
              <div className="p-3 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                <h1>We have been serving our customers for over years</h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiUsers />
                </div>
              </div>
              <div className="p-3 mt-4 ml-8 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                <h1>
                  Working with the symbol and reputation of trustworthy trait
                </h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiLayers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
