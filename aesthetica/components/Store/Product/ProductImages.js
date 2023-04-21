import { useState } from "react";
import Image from "next/image";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const ProductImages = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <section className="slider mt-2">
        <div className="relative image-container mx-auto lg:w-[560px] lg:h-[590px]">
          <button
            className="text-5xl font-bold text-black absolute z-10 top-40 left-2 lg:mt-20 md:mt-20"
            onClick={() => prevSlide()}
          >
            <SlArrowLeft />
          </button>
          <Image
            src={images[current].url}
            alt={`image number ${current}`}
            width="650"
            height="650"
            style={{ objectFit: "cover" }}
            className="lg:h-[560px] lg:w-[590px] sm:h-[300px] sm:w-[420px]"
            priority
          ></Image>
          <button
            className="text-5xl font-bold text-black absolute z-10 top-40 right-2 lg:mt-20 md:mt-20"
            onClick={() => nextSlide()}
          >
            <SlArrowRight />
          </button>
        </div>

        <p className="text-center mt-1">
          {current + 1} of {length}
        </p>
      </section>
    </div>
  );
};

export default ProductImages;
