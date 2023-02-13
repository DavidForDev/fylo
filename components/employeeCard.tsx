const EmployeeCard = () => {
  return (
    <div className="bg-white max-w-sm rounded-md cursor-pointer shadow-[0px_0px_10px_5px_rgba(56,56,56,0.0458843)] h-auto p-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <img src="/icons/icon-quotes.svg" alt="bracats" width={20} />
        <p className="text-xs text-[#07043B] leading-6">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <img
          src="/images/avatar-testimonial.jpg"
          alt="avatar"
          className="rounded-full w-[40px] h-[40px]"
        />
        <div className="flex flex-col gap-1">
          <h3 className="first-letter:uppercase font-lg text-[#07043B] font-semibold">
            Kyle Burton
          </h3>
          <p className="text-xs text-[#07043B]">Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
