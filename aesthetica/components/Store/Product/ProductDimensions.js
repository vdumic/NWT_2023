import { MDXRemote } from "next-mdx-remote";

import { Ul, Li } from "./Components";

const components = {
  ul: Ul,
  li: Li,
};

const ProductDimensions = ({ product }) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <p className="my-4 font-semibold text-2xl">DIMENSIONS</p>
        <MDXRemote {...product.mdxDimensions} components={components} lazy />
      </div>
    </div>
  );
};

export default ProductDimensions;
