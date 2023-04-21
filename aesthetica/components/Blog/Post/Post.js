import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { H3, P, Ul, Li } from "./components";

const components = {
  h3: H3,
  p: P,
  ul: Ul,
  li: Li,
};

const Post = ({ post }) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-12 lg:mx-24 sm:mx-8 lg:gap-20">
      <div className="lg:col-span-7 sm:order-3 md:order-3 sm:my-10">
        <Image
          alt="post"
          src={post.image.url}
          style={{ objectFit: "cover" }}
          width="900"
          height="600"
          className="lg:h-[380px] sm:h-[180px]"
        />
      </div>

      {/* desktop blog post */}

      <div className="sm:hidden md:hidden col-span-5 lg:h-[380px]">
        <p className="text-blog-text text-xl font-semibold mb-5">{post.date}</p>
        <p className="text-7xl sm:text-3xl md:texl-xl font-semibold">
          {post.title}
        </p>
      </div>
      <div className="sm:hidden md:hidden lg:col-span-7 text-justify">
        <MDXRemote {...post.mdxSource} components={components} lazy />
      </div>

      {/* mobile blog post */}

      <div className="lg:hidden sm:order-2 md:order-2">
        <p className="text-blog-text text-xl font-semibold">{post.date}</p>
      </div>
      <div className="lg:hidden sm:order-1 md:order-1">
        <p className="text-7xl sm:text-3xl font-semibold mb-3">{post.title}</p>
      </div>
      <div className="lg:hidden text-justify order-4">
        <MDXRemote {...post.mdxSource} components={components} lazy />
      </div>
    </div>
  );
};

export default Post;
