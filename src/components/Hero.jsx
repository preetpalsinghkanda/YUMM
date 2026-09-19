export default function Hero() {
  return (
    <section 
      id="hero" 
      data-nav-dark="false" 
      className="h-screen w-full relative flex flex-col justify-between items-center pt-[8vw] max-md:pt-[40vw] max-md:h-[200vw] max-md:pb-[2vw]"
    >
     
      <div className="w-fit h-fit relative">
        <h1 className="text-[30vw] leading-[.8] text-center text-red text-stroke-180 font-mouse-memoirs max-md:text-[26vw] max-md:leading-[.85]">
          <span className="sr-only">THE BURGER</span>
          <span aria-hidden="true">
            <span data-pop="true" className="inline-block will-change-transform">THE</span>
            <span> </span>
            <span data-pop="true" className="inline-block will-change-transform">BURGER</span>
          </span>
        </h1>

       
        <p className="absolute top-[10%] left-[10%] text-mustard-dark z-10 rotate-15 max-md:rotate-0 max-md:top-[2%] max-md:left-[2%] text-stroke-180 text-center text-[2.8vw] font-modak leading-[.9]! max-md:text-[6vw]">
          <span className="sr-only">SMASHED FRESH</span>
          <span aria-hidden="true">
            <span data-pop="true" className="inline-block will-change-transform">SMASHED</span><br />
            <span data-pop="true" className="inline-block will-change-transform">FRESH</span>
          </span>
        </p>

       
        <p className="absolute bottom-[10%] right-[10%] text-mustard-dark z-10 -rotate-15 max-md:rotate-0 max-md:bottom-[2%] max-md:right-[2%] text-stroke-180 text-center text-[2.8vw] font-modak leading-[.9]! max-md:text-[6vw]">
          <span className="sr-only">BOLD FLAVOR</span>
          <span aria-hidden="true">
            <span data-pop="true" className="inline-block will-change-transform">BOLD</span><br />
            <span data-pop="true" className="inline-block will-change-transform">FLAVOR</span>
          </span>
        </p>
      </div>

      
      <div className="size-[40vw] z-20 absolute top-[60%] -translate-y-[60%] left-1/2 -translate-x-1/2 max-md:size-[80vw] max-md:top-[110vw] max-md:-translate-y-[50%]">
        <div className="w-full h-full">
          <img 
            alt="CRAV Artisan Smashed Burger with fresh ingredients" 
            src="/img-webp/burgerH.webp" 
            className="h-full w-full object-contain" 
          />
        </div>
      </div>

      
      <p className="text-center text-[15vw] max-md:text-[20vw] font-modak uppercase mt-[15vw] relative z-20 text-stroke-180 text-[#F4A804] translate-y-[-9vw] max-md:mt-[6vw] max-md:absolute max-md:top-[133vw] max-md:-translate-y-1/2">
        <span className="sr-only">YUMM</span>
        <span aria-hidden="true"><span data-pop="true" className="inline-block">YUMM</span></span>
      </p>

      
      <div className="w-full absolute bottom-0 left-0 flex justify-between px-[2.5vw] py-[2vw] max-md:static max-md:flex-col max-md:gap-[4vw] max-md:items-center max-md:px-[5vw] max-md:py-0">
        <div className="w-[23vw] max-md:w-full">
          <p className="text40 leading-none max-md:text-center">
            <span>Smashed hot on the flat top, our prime patties lock in ultimate juiciness under a caramelized crust.</span>
          </p>
        </div>
        <div className="w-[23vw] max-md:w-full">
          <p className="text40 leading-none text-right max-md:text-center">
            <span>Topped with melted cheddar and our signature chili honey glaze crafted to satisfy your cravings since 1997.</span>
          </p>
        </div>
      </div>
    </section>
  );
}