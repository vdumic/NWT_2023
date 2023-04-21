import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import SupportSearch from "../components/Support/SupportSearch";
import SupportCard from "../components/Support/SupportCard";
import PostRight from "../components/Support/PostRight";
import PostLeft from "../components/Support/PostLeft";

import { getSupportCards } from "./api/ContentfulAPI";

const Support = ({ supportCards }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Support">
      <div className="container flex sm:flex-col justify-center mx-auto mt-8">
        {supportCards.map((card) => (
          <SupportCard
            image={card.image}
            title={card.title}
            label={card.label}
            key={card.title}
          />
        ))}
      </div>
      <SupportSearch />
      <PostLeft />
      <PostRight />
    </HeaderFooterLayout>
  );
};

export default Support;

export async function getStaticProps() {
  const supportCards = await getSupportCards();

  return {
    props: { supportCards: supportCards },
  };
}
