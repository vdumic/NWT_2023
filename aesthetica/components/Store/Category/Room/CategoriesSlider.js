import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import ExploreItem from "../../../Home/ExploreItem";
import ExploreItemMobile from "../../../Home/ExploreItemMobile";

const CategoriesSlider = ({ categories }) => {
  const showArrows = categories.length > 5;

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-6 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="sm:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={categories.length}
          visibleSlides={5}
          step={1}
          infinite={true}
        >
          {showArrows && (
            <>
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-14 mt-14"
                id="prev"
              >
                <SlArrowLeft className="h-7 w-7 cursor-pointer" />
              </ButtonBack>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute right-0 mt-14 mr-14"
                id="next"
              >
                <SlArrowRight className="h-7 w-7 cursor-pointer" />
              </ButtonNext>
            </>
          )}
          <div className="w-full relative flex items-center justify-center">
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex md:gap-8 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {categories.map((category) => (
                    <ExploreItem
                      label={category.label}
                      image={category.image}
                      path={category.slug}
                      key={category.label}
                      category="true"
                    />
                  ))}
                </div>
              </Slider>
            </div>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="md:hidden lg:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={categories.length}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-4"
              id="prev"
            >
              <SlArrowLeft className="h-7 w-7 cursor-pointer" />
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex items-center justify-center transition ease-out duration-700"
                >
                  {categories.map((category) => (
                    <ExploreItemMobile
                      label={category.label}
                      image={category.image}
                      path={category.slug}
                      key={category.label}
                      category="true"
                    />
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-4"
              id="next"
            >
              <SlArrowRight className="h-7 w-7 cursor-pointer" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default CategoriesSlider;
