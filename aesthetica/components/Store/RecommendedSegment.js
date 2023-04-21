import HorizontalProduct from "./HorizonalProduct";
import VerticalProduct from "./VerticalProduct";

import Recommended1 from "../../public/assets/recommended1.jpg";
import Recommended2 from "../../public/assets/recommended2.jpg";
import Recommended3 from "../../public/assets/recommended3.jpg";
import Recommended4 from "../../public/assets/recommended4.jpg";

const RecommendedSegment = () => {
  return (
    <div>
      <div className="flex justify-center">
        <HorizontalProduct
          image={Recommended1}
          link="/store/product/girola-chair"
        />
        <div className="flex-col justify-center mx-4">
          <VerticalProduct
            image={Recommended2}
            link="/store/product/streamline-coffee-table"
          />
          <div className="mt-4">
            <VerticalProduct
              image={Recommended3}
              link="/store/product/andes-sofa-bed"
            />
          </div>
        </div>
        <HorizontalProduct
          image={Recommended4}
          link="/store/product/seamless-bathroom-cabinet"
        />
      </div>
    </div>
  );
};

export default RecommendedSegment;
