const StatsCard = ({
  title,
  value,
  children,
}: {
  title: string;
  value: number;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col rounded-[8px] bg-white shadow-md text-[14px] p-[24px]">
      <h2 className="text-[14px] font-normal">{title}</h2>
      <p className="text-[18px] font-semibold mb-2">{value}</p>
      <div className="bg-gray rounded-[12px] flex-grow p-[6px]">
      {children}
      </div>
    </div>
  );
};

export default StatsCard;
