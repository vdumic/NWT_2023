export const H3 = (props) => (
  <h3 className="text-lg pb-5 leading-7 font-semibold" {...props} />
);

export const Ul = (props) => (
  <ul className="text-lg list-disc list-inside my-3" {...props} />
);

export const Li = (props) => (
  <li className="text-lg list-disc list-inside my-3">
    <span className="font-normal" {...props} />
  </li>
);

export const P = (props) => <p className="text-lg leading-7" {...props} />;
