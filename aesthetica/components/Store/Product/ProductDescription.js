import { MDXRemote } from "next-mdx-remote";

import { Ul, Li } from "./Components";

const components = {
  ul: Ul,
  li: Li,
};

const ProductDescription = ({ product }) => {
  return (
    <div>
      <p className="my-4 sm:mt-8 font-semibold text-2xl">DESCRIPTION</p>
      <MDXRemote {...product.mdxDescription} components={components} lazy />
    </div>
  );
};

export default ProductDescription;
