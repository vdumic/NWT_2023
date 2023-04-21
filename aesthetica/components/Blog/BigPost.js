import Image from "next/image";
import SmallButton from "./SmallButton";
import Link from "next/link";

const BigPost = ({ title, date, image, path }) => {
  return (
    <div className="bg-blog mt-10">
      <Image
        alt="post"
        src={image}
        height="550"
        width="500"
        className="h-[300px] w-full"
      />
      <div className="flex justify-between">
        <div className="m-5  w-3/5">
          <p className="text-3xl font-semibold hover:text-gray-800">
            <Link href={`/blog/${path}`}>{title}</Link>
          </p>
          <p className="text-blog-text text-xl font-semibold my-5">{date}</p>
        </div>
       <div className="m-auto mr-14">
          <SmallButton title="Read more" link={`/blog/${path}`} />
        </div>
      </div>
    </div>
  );
};

export default BigPost;
