import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import banner from "/src/assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <Container>
          {/* --- Left Side: Content --- */}
          <div className="lg:col-span-7 space-y-10 z-10 text-left z-1 pt-10">
            <Flex className="gap-x-3 mb-3">
              <span className="h-0.5 w-12 bg-red-600"></span>
              <span className="text-red-600 font-black uppercase tracking-[0.2em] text-xs">
                Unleash Your Potential
              </span>
            </Flex>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[130%] w-[800px]">
              Turning <span className="text-red-600 italic">Ideas</span> into{" "}
              <span className="relative inline-block">
                {" "}
                Digital Reality
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 338 12"
                  fill="none"
                >
                  <path
                    d="M1 9.5C51.5 4.66667 152.5 -2.5 337 9.5"
                    stroke="#EE1D23"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
              With a vision to turn manpower into assets, Creative IT Institute
              is ready to enhance your learning experience with expert mentors.
            </p>
            <div className="flex flex-col gap-5 w-[250px]">
              <button className="bg-[#EE1D23] hover:bg-black text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-red-200 transition-all transform cursor-pointer">
                Browse Course
              </button>
              <button className="group flex items-center gap-4 text-slate-900 font-bold text-lg hover:text-red-600 transition-all cursor-pointer">
                <span className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-red-600">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Join Free Seminar
              </button>
            </div>
            {/* Achievement Badge */}
          </div>
        </Container>
        {/* --- Left Side: Content --- */}
        <Images
          imgSrc={banner}
          className={"absolute top-0 right-0 w-250 -z-1 pt-40"}
        />
      </div>
    </>
  );
};

export default Banner;
