const Header = () => {
  return (
    <div className="relative z-10 flex justify-between align-middle py-[20px] px-[20px] h-[60px] text-white">
      <div className="px-[10px] fz-[16px] font-bold">CRYPER LOGO</div>
      <div className="flex gap-[10px] fz-[16px]">
        <div className="px-[10px]">Resources</div>
        <div className="px-[10px]">Contact</div>
        <div className="px-[10px]">Sign In</div>
      </div>
    </div>
  );
};

export default Header;
