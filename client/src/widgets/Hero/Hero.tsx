import SearchBar from "@features/SearchBar/ui/SearchBar";

const Hero = () => {
  return (
    <div className="relative pt-[115px] pb-[45px] text-white">
      <div className="absolute  top-[-60px] left-1/2 transform -translate-x-1/2 w-[100vw] h-[calc(100%+60px)] bg-gradient-to-r from-purple via-blue to-blue-light"></div>
      <div className="relative">
        <h1 className="text-[24px]">Explore Blockchains</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
