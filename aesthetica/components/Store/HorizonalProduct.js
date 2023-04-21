import Image from "next/image";
import Link from "next/link";

const HorizontalProduct = ({ image, link }) => {
  return (
    <Link href={link}>
      <Image
        alt="Recommended"
        src={image}
        height="700"
        className="w-full h-[700px]"
      />
    </Link>
  );
};

export default HorizontalProduct;
