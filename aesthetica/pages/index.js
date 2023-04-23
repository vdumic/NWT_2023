import { useState } from "react";

import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import MainPageImage from "../components/Home/MainPageImage";
import HighlightLeft from "../components/Home/HighlightLeft";
import HighlightRight from "../components/Home/HighlightRight";
import Explore from "../components/Home/Explore";

import { getAllCategories, getAllRooms } from "./api/ContentfulAPI";

const Home = ({ exploreRooms, exploreCategories }) => {
  // const [products, setProducts] = useState("");

  // const getProducts = async () => {
  //   const response = await fetch(`http://localhost:3000/api/products`);
  //   const products = await response.json();
  //   setProducts(products);
  // };

  // getProducts();
  // console.log(products);

  return (
    <HeaderFooterLayout title="Aesthetica / Home">
      <MainPageImage />
      <Explore
        exploreRooms={exploreRooms}
        exploreCategories={exploreCategories}
      />
      <HighlightLeft />
      <HighlightRight />
    </HeaderFooterLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreRooms = await getAllRooms();
  const exploreCategories = await getAllCategories();

  return {
    props: { exploreRooms: exploreRooms, exploreCategories: exploreCategories },
  };
}
