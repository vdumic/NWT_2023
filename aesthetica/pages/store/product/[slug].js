import Link from "next/link";
import Image from "next/image";

import { serialize } from "next-mdx-remote/serialize";
import { AiOutlineRight } from "react-icons/ai";

import { useState, useContext } from "react";

import { getAllProductSlugs, getProductBySlug } from "../../api/ContentfulAPI";
import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import ProductImages from "../../../components/Store/Product/ProductImages";
import ProductInformation from "../../../components/Store/Product/ProductInformation";
import ProductDescription from "../../../components/Store/Product/ProductDescription";
import ProductDimensions from "../../../components/Store/Product/ProductDimensions";
import Spacer from "../../../components/Spacer";
import Comment from "../../../components/Store/Product/Comment";

import AppContext from "../../../store/app-context";

const ProductPage = ({ product, comments }) => {
  // const [comments, setComments] = useState([]);

  // const getComments = async () => {
  //   const resp = await fetch(
  //     `http://localhost:3000/api/comments/${product.slug}`
  //   );
  //   const commentList = await resp.json();

  //   console.log(commentList);
  //   setComments(commentList);
  // };

  // useEffect(() => {
  //   getComments();
  // }, []);

  const [commentText, setCommentText] = useState("");

  const appCtx = useContext(AppContext);

  console.log(appCtx.userData.email);

  const submitComment = async (e) => {
    e.preventDefault();

    const resp = await fetch(
      `http://localhost:3000/api/comments/${product.slug}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: appCtx.userData.email,
          text: commentText,
        }),
      }
    );

    setCommentText("");
  };

  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div className="flex justify-start max-w-full mx-24 sm:mx-8 lg:my-10 sm:my-6 md:my-6 md:mx-10">
        <Link href={`/store/${product.roomSlug}`}>
          <p className="font-bold sm:text-base text-2xl text-[#777777]">
            {product.room}
          </p>
        </Link>
        <AiOutlineRight className="h-6 w-7 pt-1 sm:inline sm:w-4 sm:h-4 lg:mt-1 sm:mt-1 md:mt-1 text-[#777777]" />
        <Link href={`/store/category/${product.categorySlug}`}>
          <p className="font-bold sm:text-base text-2xl text-[#777777]">
            {product.category}
          </p>
        </Link>
        <AiOutlineRight className="h-6 w-7 pt-1 sm:inline sm:w-4 sm:h-4 lg:mt-1 sm:mt-1 md:mt-1" />
        <p className="font-bold sm:text-base text-2xl">{product.title}</p>
      </div>
      <div className="grid grid-cols-2 justify-start sm:col-span-1 sm:grid-cols-1 sm:mx-8 md:col-span-1 md:grid-cols-1 md:mx-10 my-4 lg:mx-24">
        <ProductImages images={product.imagesCollection.items} />
        <ProductInformation
          title={product.title}
          price={product.price}
          slug={product.slug}
          image={product.imagesCollection.items[0].url}
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:justify-start flex flex-row justify-between">
        <div className="flex flex-col lg:mx-24 sm:mx-8 md:mx-10 mb-8">
          <ProductDescription product={product} />
          <ProductDimensions product={product} />
        </div>
        <Image
          src={product.model.url}
          alt={product.title}
          // style={{ objectFit: "cover" }}
          width="500"
          height="500"
          className="m-5 mr-28 sm:hidden md:hidden h-[500px] w-[500px]"
        />
      </div>
      <div className="lg:hidden">
        <Image
          src={product.model.url}
          alt={product.title}
          // style={{ objectFit: "cover" }}
          width="500"
          height="500"
          className="my-5 sm:mx-8 md:h-[500px] md:w-[500px] sm:h-[300px] sm:w-[300px] md:mx-10"
        />
      </div>

      {appCtx.userData.isLoggedIn && (
        <>
          <Spacer />
          <div className="flex justify-start px-10 py-10">
            <p>Insert new comment</p>
          </div>
          <div className="flex justify-start py-5 mx-10">
            <form>
              <label htmlFor="Insert comment"></label>
              <input
                type="text"
                name="comment"
                className="border-2 py-2 px-24"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button
                className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-gray-100 font-medium mt-8 py-2 px-12 border-2 border-[#252526] rounded-full shadow-xl"
                type="submit"
                onClick={submitComment}
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
      <Spacer />
      {comments.length > 0 && (
        <div>
          <Comment comment={comments[0]} slug={product.slug} />
        </div>
      )}
    </HeaderFooterLayout>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const posts = await getAllProductSlugs();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const product = await getProductBySlug(slug);

  const resp = await fetch(
    `http://localhost:3000/api/comments/${product.slug}`
  );

  product.mdxDescription = await serialize(product.description);
  product.mdxDimensions = await serialize(product.dimensions);
  delete product.description;
  delete product.dimensions;

  return {
    props: { product: product, comments: await resp.json() },
  };
}
