import { useState } from "react";
import Link from "next/link";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

import {
  getAllCategorySlugs,
  getAllProductsByCategory,
} from "../../api/ContentfulAPI";

import HeaderFooterLayout from "../../../layouts/HeaderFooterLayout";
import ItemsList from "../../../components/Store/Category/ItemsList";

const CategoryPage = ({ products }) => {
  const [showProducts, setShowProducts] = useState(products);
  const [filterValue, setFilterValue] = useState("");

  const [priceClicked, setPriceClicked] = useState(false);
  const [colorClicked, setColorClicked] = useState(false);
  const [availabilityClicked, setAvailabilityClicked] = useState(false);

  const handlePriceClick = (e) => {
    e.preventDefault();
    setPriceClicked(!priceClicked);
  };

  const handleColorClick = (e) => {
    e.preventDefault();
    setColorClicked(!colorClicked);
  };

  const handleAvailabilityClick = (e) => {
    e.preventDefault();
    setAvailabilityClicked(!availabilityClicked);
  };

  const [filterPrice, setFilterPrice] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const [filterColors, setFilterColors] = useState({
    white: false,
    black: false,
    gray: false,
    green: false,
    blue: false,
    brown: false,
  });

  const [filterAvailability, setFilterAvailability] = useState({
    inStock: false,
    preorder: false,
    bespoke: false,
  });

  const handleInput = (e) => {
    setFilterValue(e.target.value);

    setShowProducts(
      e.target.value == ""
        ? products
        : products.filter((product) => {
            return product.title
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          })
    );
  };

  const applyFilters = () => {
    let filtered;

    if (
      !filterColors.white &&
      !filterColors.black &&
      !filterColors.blue &&
      !filterColors.gray &&
      !filterColors.green &&
      !filterColors.brown &&
      !filterPrice.first &&
      !filterPrice.second &&
      !filterPrice.third &&
      !filterPrice.fourth &&
      !filterPrice.fifth &&
      !filterAvailability.inStock &&
      !filterAvailability.preorder &&
      !filterAvailability.bespoke
    ) {
      filtered = products;
    }

    if (filterColors.white) {
      filtered = products.filter((product) => {
        return product.color == "White";
      });
    }

    if (filterColors.black) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.color == "Black";
        });
      } else {
        filtered = [
          ...filtered,
          products.filter((product) => {
            return product.color == "Black";
          }),
        ];
      }
    }

    if (filterColors.gray) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.color == "Gray";
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.color == "Gray";
          }),
        ];
      }
    }

    if (filterColors.green) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.color == "Green";
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.color == "Green";
          }),
        ];
      }
    }

    if (filterColors.blue) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.color == "Blue";
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.color == "Blue";
          }),
        ];
      }
    }

    if (filterColors.brown) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.color == "Brown";
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.color == "Brown";
          }),
        ];
      }
    }

    if (filterPrice.first) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.price <= 100;
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.price <= 100;
          }),
        ];
      }
    }

    if (filterPrice.second) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.price > 100 && product.price <= 250;
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.price > 100 && product.price <= 250;
          }),
        ];
      }
    }

    if (filterPrice.third) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.price > 250 && product.price <= 500;
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.price > 250 && product.price <= 500;
          }),
        ];
      }
    }

    if (filterPrice.fourth) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.price > 500 && product.price <= 1000;
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.price > 500 && product.price <= 1000;
          }),
        ];
      }
    }

    if (filterPrice.fifth) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.price > 1000;
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.price > 1000;
          }),
        ];
      }
    }

    if (filterAvailability.inStock) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.availability == "In Stock";
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.availability == "In Stock";
          }),
        ];
      }
    }

    if (filterAvailability.preorder) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.availability == "Pre-Order";
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.availability == "Pre-Order";
          }),
        ];
      }
    }

    if (filterAvailability.bespoke) {
      if (filtered === undefined) {
        filtered = products.filter((product) => {
          return product.availability == "Bespoke";
        });
      } else {
        filtered = [
          ...filtered,
          ...products.filter((product) => {
            return product.availability == "Bespoke";
          }),
        ];
      }
    }

    filtered = filtered.filter((product, index) => {
      return filtered.indexOf(product) === index;
    });

    setShowProducts(filtered);
  };

  return (
    <HeaderFooterLayout title="Aesthetica / Store">
      <div className="flex justify-start max-w-full mx-24 sm:mx-8 lg:my-10 sm:my-6">
        <Link href={`/store/${products[0].roomSlug}`}>
          <p className="font-bold sm:text-2xl text-3xl text-[#777777]">
            {products[0].room}
          </p>
        </Link>
        <AiOutlineRight className="h-7 w-7 sm:inline sm:w-5 sm:h-5 lg:mt-1 sm:mt-2" />
        <p className="font-bold sm:text-2xl text-3xl">{products[0].category}</p>
      </div>
      <div className="flex items-center max-w-xl lg:my-4 mx-auto bg-white sm:my-5 my-16 sm:mx-8">
        <input
          type="search"
          id="support-search"
          className="block w-full p-4 pl-10 text-m placeholder-gray-900 border-white"
          placeholder="Search products..."
          value={filterValue}
          onChange={handleInput}
          required
        />
        <button
          type="submit"
          className="bg-white right-2.5 bottom-2.5 text-black  px-4 py-2"
        >
          <AiOutlineSearch className="h-7 w-7 sm:inline cursor-pointer" />
        </button>
      </div>
      <div className="flex lg:flex-row sm:flex-col md:flex-col">
        {/* Filters for desktop */}
        <div className="flex justify-start w-1/6 sm:hidden md:hidden">
          <div className="mx-24">
            <div className="flex justify-between">
              <p className="font-bold text-2xl mb-6">Filters</p>
              <button
                onClick={applyFilters}
                className="font-semibold text-lg mb-6 border-2 px-2 border-black rounded-xl hover:bg-bckgrnd"
              >
                Apply
              </button>
            </div>
            <div className="w-[200px] h-[280px] bg-white flex justify-start">
              <div className="mx-6 mt-4 w-full">
                <p className="text-xl font-semibold mb-2">Price</p>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.first}
                          onClick={(e) => {
                            setFilterPrice({
                              first: !filterPrice.first,
                              second: filterPrice.second,
                              third: filterPrice.third,
                              fourth: filterPrice.fourth,
                              fifth: filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="< €100"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.second}
                          onClick={(e) => {
                            setFilterPrice({
                              first: filterPrice.first,
                              second: !filterPrice.second,
                              third: filterPrice.third,
                              fourth: filterPrice.fourth,
                              fifth: filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="€100-€250"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.third}
                          onClick={(e) => {
                            setFilterPrice({
                              first: filterPrice.first,
                              second: filterPrice.second,
                              third: !filterPrice.third,
                              fourth: filterPrice.fourth,
                              fifth: filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="€250-€500"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.fourth}
                          onClick={(e) => {
                            setFilterPrice({
                              first: filterPrice.first,
                              second: filterPrice.second,
                              third: filterPrice.third,
                              fourth: !filterPrice.fourth,
                              fifth: filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="€500-€1000"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterPrice.fifth}
                          onClick={(e) => {
                            setFilterPrice({
                              first: filterPrice.first,
                              second: filterPrice.second,
                              third: filterPrice.third,
                              fourth: filterPrice.fourth,
                              fifth: !filterPrice.fifth,
                            });
                          }}
                        />
                      }
                      label="€1000 >"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="w-[200px] h-[320px] bg-white flex justify-start mt-6">
              <div className="mx-6 mt-4 w-full">
                <p className="text-xl font-semibold mb-2">Color</p>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.white}
                          onClick={(e) => {
                            setFilterColors({
                              white: !filterColors.white,
                              black: filterColors.black,
                              gray: filterColors.gray,
                              green: filterColors.green,
                              blue: filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="White"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.black}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: !filterColors.black,
                              gray: filterColors.gray,
                              green: filterColors.green,
                              blue: filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Black"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.gray}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: filterColors.black,
                              gray: !filterColors.gray,
                              green: filterColors.green,
                              blue: filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Gray"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.green}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: filterColors.black,
                              gray: filterColors.gray,
                              green: !filterColors.green,
                              blue: filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Green"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.blue}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: filterColors.black,
                              gray: filterColors.gray,
                              green: filterColors.green,
                              blue: !filterColors.blue,
                              brown: filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Blue"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterColors.brown}
                          onClick={(e) => {
                            setFilterColors({
                              white: filterColors.white,
                              black: filterColors.black,
                              gray: filterColors.gray,
                              green: filterColors.green,
                              blue: filterColors.blue,
                              brown: !filterColors.brown,
                            });
                          }}
                        />
                      }
                      label="Brown"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="w-[200px] h-[200px] bg-white flex justify-start my-6">
              <div className="mx-6 mt-4 w-full">
                <p className="text-xl font-semibold mb-2">Availability</p>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterAvailability.inStock}
                          onClick={(e) => {
                            setFilterAvailability({
                              inStock: !filterAvailability.inStock,
                              preorder: filterAvailability.preorder,
                              bespoke: filterAvailability.bespoke,
                            });
                          }}
                        />
                      }
                      label="In Stock"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterAvailability.preorder}
                          onClick={(e) => {
                            setFilterAvailability({
                              inStock: filterAvailability.inStock,
                              preorder: !filterAvailability.preorder,
                              bespoke: filterAvailability.bespoke,
                            });
                          }}
                        />
                      }
                      label="Pre-Order"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#6B7280",
                            "&.Mui-checked": {
                              color: "#6B7280",
                            },
                          }}
                          checked={filterAvailability.bespoke}
                          onClick={(e) => {
                            setFilterAvailability({
                              inStock: filterAvailability.inStock,
                              preorder: filterAvailability.preorder,
                              bespoke: !filterAvailability.bespoke,
                            });
                          }}
                        />
                      }
                      label="Bespoke"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters for mobile */}
        <div className="flex justify-start mt-2 w-1/6 lg:hidden">
          <div className="mx-24">
            <div className="flex justify-between">
              <p className="font-bold text-2xl mb-6">Filters</p>
              <button
                onClick={applyFilters}
                className="font-semibold text-lg mb-6 border-2 px-2 border-black rounded-xl hover:bg-bckgrnd shadow-xl"
              >
                Apply
              </button>
            </div>
            {!priceClicked && (
              <button
                onClick={handlePriceClick}
                className="flex justify-between w-[200px] bg-white text-black text-lg font-semibold py-2 px-6 border-2 border-bckgrnd shadow-lg"
              >
                <p>Price</p>
                <p className="text-xl">+</p>
              </button>
            )}
            {priceClicked && (
              <div className="w-[200px] h-[280px] bg-white flex justify-start">
                <div>
                  <button
                    onClick={handlePriceClick}
                    className="flex justify-between w-[200px] mt-2 bg-white text-black text-lg font-semibold py-2 px-6"
                  >
                    <p>Price</p>
                    <p className="text-xl">-</p>
                  </button>
                  <div className="mx-6 w-full">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterPrice.first}
                            onClick={(e) => {
                              setFilterPrice({
                                first: !filterPrice.first,
                                second: filterPrice.second,
                                third: filterPrice.third,
                                fourth: filterPrice.fourth,
                                fifth: filterPrice.fifth,
                              });
                            }}
                          />
                        }
                        label="< €100"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterPrice.second}
                            onClick={(e) => {
                              setFilterPrice({
                                first: filterPrice.first,
                                second: !filterPrice.second,
                                third: filterPrice.third,
                                fourth: filterPrice.fourth,
                                fifth: filterPrice.fifth,
                              });
                            }}
                          />
                        }
                        label="€100-€250"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterPrice.third}
                            onClick={(e) => {
                              setFilterPrice({
                                first: filterPrice.first,
                                second: filterPrice.second,
                                third: !filterPrice.third,
                                fourth: filterPrice.fourth,
                                fifth: filterPrice.fifth,
                              });
                            }}
                          />
                        }
                        label="€250-€500"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterPrice.fourth}
                            onClick={(e) => {
                              setFilterPrice({
                                first: filterPrice.first,
                                second: filterPrice.second,
                                third: filterPrice.third,
                                fourth: !filterPrice.fourth,
                                fifth: filterPrice.fifth,
                              });
                            }}
                          />
                        }
                        label="€500-€1000"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterPrice.fifth}
                            onClick={(e) => {
                              setFilterPrice({
                                first: filterPrice.first,
                                second: filterPrice.second,
                                third: filterPrice.third,
                                fourth: filterPrice.fourth,
                                fifth: !filterPrice.fifth,
                              });
                            }}
                          />
                        }
                        label="€1000 >"
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
            )}
            {!colorClicked && (
              <button
                onClick={handleColorClick}
                className="flex justify-between w-[200px] mt-4 bg-white text-black text-lg font-semibold py-2 px-6 border-2 border-bckgrnd shadow-lg"
              >
                <p>Color</p>
                <p className="text-xl">+</p>
              </button>
            )}
            {colorClicked && (
              <div className="w-[200px] h-[320px] bg-white flex justify-start mt-4">
                <div>
                  <button
                    onClick={handleColorClick}
                    className="flex justify-between w-[200px] my-2 bg-white text-black text-lg font-semibold py-2 px-6"
                  >
                    <p>Color</p>
                    <p className="text-xl">-</p>
                  </button>
                  <div className="mx-6 w-full">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterColors.white}
                            onClick={(e) => {
                              setFilterColors({
                                white: !filterColors.white,
                                black: filterColors.black,
                                gray: filterColors.gray,
                                green: filterColors.green,
                                blue: filterColors.blue,
                                brown: filterColors.brown,
                              });
                            }}
                          />
                        }
                        label="White"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterColors.black}
                            onClick={(e) => {
                              setFilterColors({
                                white: filterColors.white,
                                black: !filterColors.black,
                                gray: filterColors.gray,
                                green: filterColors.green,
                                blue: filterColors.blue,
                                brown: filterColors.brown,
                              });
                            }}
                          />
                        }
                        label="Black"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterColors.gray}
                            onClick={(e) => {
                              setFilterColors({
                                white: filterColors.white,
                                black: filterColors.black,
                                gray: !filterColors.gray,
                                green: filterColors.green,
                                blue: filterColors.blue,
                                brown: filterColors.brown,
                              });
                            }}
                          />
                        }
                        label="Gray"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterColors.green}
                            onClick={(e) => {
                              setFilterColors({
                                white: filterColors.white,
                                black: filterColors.black,
                                gray: filterColors.gray,
                                green: !filterColors.green,
                                blue: filterColors.blue,
                                brown: filterColors.brown,
                              });
                            }}
                          />
                        }
                        label="Green"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterColors.blue}
                            onClick={(e) => {
                              setFilterColors({
                                white: filterColors.white,
                                black: filterColors.black,
                                gray: filterColors.gray,
                                green: filterColors.green,
                                blue: !filterColors.blue,
                                brown: filterColors.brown,
                              });
                            }}
                          />
                        }
                        label="Blue"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterColors.brown}
                            onClick={(e) => {
                              setFilterColors({
                                white: filterColors.white,
                                black: filterColors.black,
                                gray: filterColors.gray,
                                green: filterColors.green,
                                blue: filterColors.blue,
                                brown: !filterColors.brown,
                              });
                            }}
                          />
                        }
                        label="Brown"
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
            )}
            {!availabilityClicked && (
              <button
                onClick={handleAvailabilityClick}
                className="flex justify-between w-[200px] mt-4 bg-white text-black text-lg font-semibold py-2 px-6 border-2 border-bckgrnd shadow-lg"
              >
                <p>Availability</p>
                <p className="text-xl">+</p>
              </button>
            )}
            {availabilityClicked && (
              <div className="w-[200px] h-[200px] bg-white flex justify-start my-4">
                <div>
                  <button
                    onClick={handleAvailabilityClick}
                    className="flex justify-between w-[200px] my-2 bg-white text-black text-lg font-semibold py-2 px-6"
                  >
                    <p>Availability</p>
                    <p className="text-xl">-</p>
                  </button>
                  <div className="mx-6 w-full">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterAvailability.inStock}
                            onClick={(e) => {
                              setFilterAvailability({
                                inStock: !filterAvailability.inStock,
                                preorder: filterAvailability.preorder,
                                bespoke: filterAvailability.bespoke,
                              });
                            }}
                          />
                        }
                        label="In Stock"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterAvailability.preorder}
                            onClick={(e) => {
                              setFilterAvailability({
                                inStock: filterAvailability.inStock,
                                preorder: !filterAvailability.preorder,
                                bespoke: filterAvailability.bespoke,
                              });
                            }}
                          />
                        }
                        label="Pre-Order"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#6B7280",
                              "&.Mui-checked": {
                                color: "#6B7280",
                              },
                            }}
                            checked={filterAvailability.bespoke}
                            onClick={(e) => {
                              setFilterAvailability({
                                inStock: filterAvailability.inStock,
                                preorder: filterAvailability.preorder,
                                bespoke: !filterAvailability.bespoke,
                              });
                            }}
                          />
                        }
                        label="Bespoke"
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-evenly sm:mx-8 mx-24 my-10">
          <ItemsList products={showProducts} />
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default CategoryPage;

export async function getStaticPaths() {
  const rooms = await getAllCategorySlugs();

  const paths = rooms.map((category) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const products = await getAllProductsByCategory(slug);

  return {
    props: { products: products },
  };
}
