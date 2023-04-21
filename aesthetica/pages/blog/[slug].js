import { serialize } from "next-mdx-remote/serialize";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Post from "../../components/Blog/Post/Post";

import { getAllPostSlugs, getPostBySlug } from "../api/ContentfulAPI";

const BlogPost = ({ post }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Blog">
      <div className="flex justify-center my-10">
        <Post
          title={post.title}
          date={post.date}
          image={post.image.url}
          content={post.content}
          post={post}
        />
      </div>
    </HeaderFooterLayout>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const posts = await getAllPostSlugs();

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
  const post = await getPostBySlug(slug);

  post.mdxSource = await serialize(post.body);
  delete post.body;

  return {
    props: { post: post },
  };
}
