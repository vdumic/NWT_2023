import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import InfoCard from "../components/About/InfoCard";
import { AboutInfo } from "../constants/AboutInfo";
import Statistics from "../components/About/Statistics";

const About = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / About">
      <div className="grid lg:mx-24 md:mx-24 lg:grid-cols-2 sm:mx-8 sm:mt-5 mt-14 mb-14">
        <div className="lg:mb-5 text-2xl">
          <h2 className="lg:text-5xl sm:hidden font-semibold">
            Furniture and inspiration for a better everyday life
            <br />
            at home.
          </h2>
          <h2 className="text-4xl lg:hidden font-semibold">
            Furniture and inspiration for a better everyday life at home.
          </h2>
          <h2 className="text-xl font-medium mt-8 lg:text-justify">
            Welcome to Aesthetica, home of the furniture. Explore modern and
            sustainably made furniture, stylish home décor and innovative home
            solutions, as well as design inspiration and unique home ideas.
          </h2>
          <h2 className="text-xl font-medium mt-5 lg:text-justify">
            You can shop with us in many ways. Visit our Arlington store where
            you can browse our showroom and get inspiration and ideas for your
            home. We’ve also made shopping online easier than ever. Browse our
            full store experience online to find home goods for every room and
            get deliveries straight to your doorstep.
          </h2>
        </div>
        <Statistics />
      </div>
      <div className="flex lg:mx-24 md:mx-24 lg:text-3xl lg:mb-5 sm:mx-8 sm:mb-3 text-2xl font-semibold">
        Quick info:
      </div>
      <div className="grid lg:mx-20 mb-16 lg:grid-cols-4 justify-items-center gap-y-4">
        {AboutInfo.map(({ Icon, title, details }) => (
          <InfoCard Icon={Icon} title={title} details={details} key={title} />
        ))}
      </div>
    </HeaderFooterLayout>
  );
};

export default About;
