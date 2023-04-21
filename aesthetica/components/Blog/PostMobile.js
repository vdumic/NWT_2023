import Image from "next/image";
import BigButton from "./BigButton";

const PostMobile = ({ title, date, image, path }) => {
  return (
    <div className="bg-blog mt-6 mx-4">
      <Image
        alt="post"
        src={image}
        style={{ objectFit: 'cover' }}
        height="550"
        width="500"
        className="h-[180px]"
      />
      <div className="m-5">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-blog-text text-lg font-semibold my-2">{date}</p>
      </div>
      <div className="mb-4 flex justify-center">
        <BigButton title="Read more" link={`/blog/${path}`} />
      </div>
    </div>
  );
};

export default PostMobile;
