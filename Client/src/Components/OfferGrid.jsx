import React from "react";

const OfferGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-[15px] w-full sm:w-[80%] min-h-[400px] mx-auto py-5">

      {/* First Offer: Sports Equipment */}
      <div
        className="col-span-1 lg:col-span-2 overflow-hidden flex justify-between flex-col rounded-sm row-span-1 lg:row-span-2 h-[170px] bg-black lg:h-full py-8 relative"
      >
        <div className="px-8 absolute bottom-8 z-20 w-full lg:w-[70%]">
          <h4 className="text-[1.1rem] font-medium text-white">Premium Football</h4>
          <p className="text-[0.8rem] mt-3 text-[#FAFAFA] font-[300]">
            Durable and professional-grade football for your game.
          </p>
          <button
            className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-3 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b"
          >
            Shop Now
          </button>
        </div>
        <img
          alt="Football"
          src="https://blackbud.com.bd/wp-content/uploads/2022/06/Al-Rihla-football.jpg"
          className="w-full h-full absolute bottom-0 left-[50%] transform translate-x-[-50%]"
        />
      </div>

      {/* Second Offer: Cricket Bat */}
      <div
        className="bg-black rounded-sm col-span-1 lg:col-span-2 flex justify-between items-center px-4 overflow-hidden relative min-h-[190px]"
      >
        <div className="absolute bottom-6 left-6 z-20 w-[70%] lg:w-[50%]">
          <h4 className="text-[1.1rem] font-medium ">Cricket Bat</h4>
          <p className="text-[0.8rem] mt-3 font-[300]">
            High-quality cricket bat for competitive play.
          </p>
          <button
            className="w-max  font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-3 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b"
          >
            Shop Now
          </button>
        </div>
        <img
          alt="Cricket Bat"
          src="https://i.ibb.co.com/YQZMx7B/dsc-krunch-the-bull-31-english-willow-2-1.jpg"
          className=" absolute bottom-0 right-0"
        />
      </div>

      {/* Third Offer: Tennis Racket */}
      <div
        className="bg-black rounded-sm col-span-1 flex justify-between items-center px-4 overflow-hidden relative min-h-[180px]"
      >
        <div className="absolute bottom-4 z-20 w-[90%]">
          <h4 className="text-[1.1rem] font-medium text-white">Tennis Racket</h4>
          <p className="text-[0.8rem] mt-0.5 text-[#FAFAFA] font-[300]">
            Lightweight and durable for perfect swings.
          </p>
          <button
            className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-2 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b"
          >
            Shop Now
          </button>
        </div>
        <img
          alt="Tennis Racket"
          src="https://www.activesgcircle.gov.sg/hubfs/Circle%202.0%20-%202021/images/GC111_1_Wikimedia.jpg"
          className=" absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
        />
      </div>

      {/* Fourth Offer: Running Shoes */}
      <div
        className="bg-black rounded-sm col-span-1 flex justify-between items-center px-4 overflow-hidden relative min-h-[180px]"
      >
        <div className="absolute bottom-4 z-20 w-[90%]">
          <h4 className="text-[1.1rem] font-medium text-white">Running Shoes</h4>
          <p className="text-[0.8rem] mt-0.5 text-[#FAFAFA] font-[300]">
            Comfortable and stylish shoes for every runner.
          </p>
          <button
            className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-2 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b"
          >
            Shop Now
          </button>
        </div>
        <img
          alt="Running Shoes"
          src="https://images.contentstack.io/v3/assets/blt6b512cc60b434656/blt268d5943b00e9aef/657849f6cc647824bfc4316a/asics-choose-running-shoes-lp-article-06032022-2.jpg?format=webp&quality=80"
          className="h-full absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
        />
      </div>
    </div>
  );
};

export default OfferGrid;
