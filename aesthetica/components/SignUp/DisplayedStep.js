import { useContext } from "react";
import { FormContext } from "../../pages/signup";
import UserCredentials from "./Forms/UserCredentials";
import UserInfo from "./Forms/UserInfo";

const DisplayedStep = () => {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <UserCredentials />;
      break;
    case 1:
      stepContent = <UserInfo />;
      break;
    default:
      break;
  }
  return stepContent;
};

export default DisplayedStep;
