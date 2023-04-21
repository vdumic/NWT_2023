const Statistics = () => {
  return (
    <div className="grid grid-cols-2 p-4 lg:ml-20 text-gray-900 sm:grid-cols-2 sm:mt-10 gap-x-12 gap-y-10">
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 sm:text-6xl text-7xl font-extrabold drop-shadow-sm text-[#c9bdb1]">
          2M+
        </dt>
        <dd className="font-light md:text-lg text-gray-900 ">Customers</dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 sm:text-6xl text-7xl font-extrabold drop-shadow-sm text-[#c9bdb1]">
          25+
        </dt>
        <dd className="font-light sm:w-36 md:text-lg text-gray-900 ">
          Years of experience
        </dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 sm:text-6xl text-7xl font-extrabold drop-shadow-sm text-[#c9bdb1]">
          30+
        </dt>
        <dd className="font-light md:text-lg text-gray-900 ">Design Awards</dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 sm:text-6xl text-7xl font-extrabold drop-shadow-sm text-[#c9bdb1]">
          350+
        </dt>
        <dd className="font-light md:text-lg text-gray-900 ">Employees</dd>
      </div>
    </div>
  );
};

export default Statistics;
