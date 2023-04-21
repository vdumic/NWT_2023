import Image from "next/image";
import Link from "next/link";

const VerticalProduct = ({ image, link }) => {
  return (
    <Link href={link}>
      <Image
        alt="Recommended"
        src={image}
        height="340"
        className="w-full h-[340px]"
      />
    </Link>
  );
};

export default VerticalProduct;
