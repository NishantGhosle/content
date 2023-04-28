import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="pt-16 pb-20">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem] border">
          <img
            src="/images/digione.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src="/images/infu.jpg"
            alt=""
            className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          {/* <h1 className="sub-heading"></h1> */}
          <h1 className="heading">OUR WORKING SECTORS</h1>
          <p className="mt-3">
            These are the two sectors we mainly work upon with the punch of AI
            modules!
          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiHomeAlt />
              </div>
              <div>
                <h1 className="font-semibold capitalize">Digital Branding</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  officia quidem eum nemo neque rerum ea, modi dignissimos
                  libero minus eaque blanditiis sapiente vel repellendus,
                  commodi ipsa cumque tempore quos tenetur. Natus, ipsam cumque.
                  Blanditiis dolore odio fugiat est accusantium!
                  <button className="mt-4 btn btn-primary">read more</button>
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiGlobe />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  Influencer Marketing
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  officia quidem eum nemo neque rerum ea, modi dignissimos
                  libero minus eaque blanditiis sapiente vel repellendus,
                  commodi ipsa cumque tempore quos tenetur. Natus, ipsam cumque.
                  Blanditiis dolore odio fugiat est accusantium!
                  <button className="mt-4 btn btn-primary">read more</button>
                </p>
              </div>
            </div>

            {/* <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiCreditCard />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  total payment transparency
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, quisquam?
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
