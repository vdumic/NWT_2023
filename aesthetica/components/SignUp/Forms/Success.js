import { BsCheckCircle } from "react-icons/bs";

const Success = () => {
  return (
    <div className="flex flex-col items-center">
      <BsCheckCircle size="5em" />
      <div className="text-3xl font-medium pt-10">
        Sign up successful!
      </div>
    </div>
  );
};

export default Success;
