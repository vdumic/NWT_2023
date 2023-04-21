import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import BigPost from "../../components/Blog/BigPost";
import MediumPost from "../../components/Blog/MediumPost";
import SmallPost from "../../components/Blog/SmallPost";
import PostMobile from "../../components/Blog/PostMobile";

import { getAllPosts } from "../api/ContentfulAPI";

const Blog = ({ blogPosts }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setIsClicked(!isClicked);
  };

  return (
    <HeaderFooterLayout title="Aesthetica / Blog">
      <div className="flex justify-center mt-10 mb-6 sm:my-4">
        <p className="font-semibold text-5xl sm:text-4xl">BLOG</p>
      </div>

      <div className="desktop-blog sm:hidden md:hidden">
        <div className="grid grid-cols-12 mx-24 gap-x-10">
          <div className="grid col-span-7">
            <BigPost
              title={blogPosts[0].title}
              date={blogPosts[0].date}
              image={blogPosts[0].image.url}
              path={blogPosts[0].slug}
            />
          </div>
          <div className="grid col-span-5">
            <MediumPost
              title={blogPosts[1].title}
              date={blogPosts[1].date}
              image={blogPosts[1].image.url}
              path={blogPosts[1].slug}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 mx-24 gap-x-10">
          <div className="grid col-span-4">
            <SmallPost
              className="grid col-span-4"
              title={blogPosts[2].title}
              date={blogPosts[2].date}
              image={blogPosts[2].image.url}
              path={blogPosts[2].slug}
            />
          </div>
          <div className="grid col-span-4">
            <SmallPost
              className="grid col-span-4"
              title={blogPosts[3].title}
              date={blogPosts[3].date}
              image={blogPosts[3].image.url}
              path={blogPosts[3].slug}
            />
          </div>
          <div className="grid col-span-4">
            <SmallPost
              title={blogPosts[4].title}
              date={blogPosts[4].date}
              image={blogPosts[4].image.url}
              path={blogPosts[4].slug}
            />
          </div>
        </div>
        {isClicked && (
          <>
            <div className="grid grid-cols-12 mx-24 gap-x-10">
              <div className="grid col-span-7">
                <BigPost
                  title={blogPosts[5].title}
                  date={blogPosts[5].date}
                  image={blogPosts[5].image.url}
                  path={blogPosts[5].slug}
                />
              </div>
              <div className="grid col-span-5">
                <MediumPost
                  title={blogPosts[6].title}
                  date={blogPosts[6].date}
                  image={blogPosts[6].image.url}
                  path={blogPosts[6].slug}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 mx-24 gap-x-10">
              <div className="grid col-span-4">
                <SmallPost
                  className="grid col-span-4"
                  title={blogPosts[7].title}
                  date={blogPosts[7].date}
                  image={blogPosts[7].image.url}
                  path={blogPosts[7].slug}
                />
              </div>
              <div className="grid col-span-4">
                <SmallPost
                  className="grid col-span-4"
                  title={blogPosts[8].title}
                  date={blogPosts[8].date}
                  image={blogPosts[8].image.url}
                  path={blogPosts[8].slug}
                />
              </div>
              <div className="grid col-span-4">
                <SmallPost
                  title={blogPosts[9].title}
                  date={blogPosts[9].date}
                  image={blogPosts[9].image.url}
                  path={blogPosts[9].slug}
                />
              </div>
            </div>
          </>
        )}
        <div className="flex justify-center my-20">
          <button
            onClick={handleClick}
            className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-lg font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl"
          >
            {!isClicked && <p>Older posts</p>}
            {isClicked && <p>Show less</p>}
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-1" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center my-4 lg:hidden">
        {blogPosts.slice(0, 5).map((post) => (
          <PostMobile
            title={post.title}
            date={post.date}
            image={post.image.url}
            path={post.slug}
            key={post.title}
          />
        ))}

        {isClicked &&
          blogPosts
            .slice(5, 10)
            .map((post) => (
              <PostMobile
                title={post.title}
                date={post.date}
                image={post.image.url}
                path={post.slug}
                key={post.title}
              />
            ))}

        <div className="flex justify-center mt-8 mb-4">
          <button
            onClick={handleClick}
            className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-m font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl"
          >
            {!isClicked && <p>Older posts</p>}
            {isClicked && <p>Show less</p>}
            <SlArrowRight className="h-5 w-5 cursor-pointer pt-1" />
          </button>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default Blog;

export async function getStaticProps() {
  const blogPosts = await getAllPosts();

  return {
    props: { blogPosts: blogPosts },
  };
}
