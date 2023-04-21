const InfoCard = ({ Icon, title, details }) => {
  return (
    <div class="flex-col w-72 sm:w-80 p-6 bg-[#d5ccc3] shadow-lg">
      <Icon className="h-10 w-10 sm:h-8 sm:w-8" />
      <div className="flex-col">
        <div class="mt-4 text-2xl sm:text-xl font-semibold tracking-tight text-black">
          {title}
        </div>
        <p class="mt-3 font-normal text-black">{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
