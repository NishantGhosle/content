import {
  AboutUs,
  Brands,
  Counter,
  Featured,
  Projects,
  Services,
  Team,
  Testimonial,
} from "../components/common/page-componets";
import { Hero, Invest, Speciality } from "../components/home/home-1";
import Whylivinart from "../components/home/home-1/Whylivinart";

const Home = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero />
      {/* <Filters /> */}
      <Speciality />
      <AboutUs />
      <Whylivinart />
      <Invest />
      {/* <Services /> */}
      {/* <Team /> */}
      {/* <Featured /> */}
      {/* <Counter /> */}
      {/* <Projects /> */}
      {/* <Testimonial /> */}
      {/* <Brands /> */}
      {/* <Feeds /> */}
    </div>
  );
};

export default Home;
