import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Item = ({ image1, image2, name, price, path }) => {
  const [src, setSrc] = useState(image1);

  const handleOnHover = () => {
    setSrc(image2);
  };

  const handleRemoveHover = () => {
    setSrc(image1);
  };

  return (
    <div className="m-4">
      <Link href={`/store/product/${path}`}>
        <Image
          alt={name}
          src={src}
          style={{ objectFit: "cover" }}
          width="320"
          height="340"
          onMouseEnter={handleOnHover}
          onMouseLeave={handleRemoveHover}
          className="h-[340px] shadow-xl hover:scale-105"
        />
        <p className="text-xl font-normal py-2">{name}</p>
      </Link>
      <p className="text-2xl font-semibold">€{price}</p>
    </div>
  );
};

export default Item;
