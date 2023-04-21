import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import * as yup from "yup";

const LoginForm = (props) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    props.handleLogin();
  };

  const renderError = (message) => (
    <p className="italic text-red-500">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    email: yup.string().email("Email not valid").required("mail is required"),
    password: yup
      .string()
      .min(8, "Password is at least 8 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col w-full justify-center items-center h-full">
        <div className="flex flex-col items-start mb-6">
          <label className="font-medium text-black">Email:</label>
          <Field
            name="email"
            className="border-2 py-2 px-24"
            placeholder="example@mail.com"
          />
        </div>
        <ErrorMessage name="email" render={renderError} />

        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-black">Password:</label>
          <Field
            name="password"
            className="border-2 py-2 px-24"
            type="password"
            placeholder="(minimum 8 characters)"
          />
        </div>
        <ErrorMessage name="password" render={renderError} />
        <Link href="/">
          <button
            className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-white text-m font-medium mt-10 py-2 pl-5 pr-3.5 border-2 border-[#252526] rounded-full shadow-xl"
            type="submit"
            onClick={handleLoginClick}
          >
            Login
            <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-1" />
          </button>
        </Link>
      </Form>
    </Formik>
  );
};

export default LoginForm;
