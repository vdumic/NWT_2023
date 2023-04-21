import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Categories from "../../components/Store/Categories";
import RecommendedProducts from "../../components/Store/RecommendedProducts";
import MobileRecommended from "../../components/Store/MobileRecommended";

import { getAllCategories, getAllRooms } from "../api/ContentfulAPI";

const Store = ({ exploreRooms, exploreCategories }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <Categories
        exploreRooms={exploreRooms}
        exploreCategories={exploreCategories}
      />
      <div className="sm:hidden">
        <RecommendedProducts />
      </div>
      <div className="lg:hidden md:hidden">
        <MobileRecommended />
      </div>
    </HeaderFooterLayout>
  );
};

export default Store;

export async function getStaticProps() {
  const exploreRooms = await getAllRooms();
  const exploreCategories = await getAllCategories();

  return {
    props: { exploreRooms: exploreRooms, exploreCategories: exploreCategories },
  };
}
