import Image from "next/image";
import Link from "next/link";

const SmallPost = ({ title, date, image, path }) => {
  return (
    <div className="bg-blog mt-10">
      <Image
        alt="post"
        src={image}
        style={{ objectFit: 'cover' }}
        height="400"
        width="400"
        className="h-[220px] w-full"
      />
      <div className="mt-5 mx-5">
        <p className="text-blog-text text-lg font-semibold">{date}</p>
        <p className="text-2xl mt-2 mb-5 font-semibold hover:text-gray-800">
          <Link href={`/blog/${path}`}>{title}</Link>
        </p>
      </div>
    </div>
  );
};

export default SmallPost;
