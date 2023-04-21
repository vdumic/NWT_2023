export const Ul = (props) => <ul className="sm:text-base my-4" {...props} />;

export const Li = (props) => (
  <li className=" sm:text-base list-disc list-inside ml-4">
    <span className="font-medium text-lg sm:text-base" {...props} />
  </li>
);
