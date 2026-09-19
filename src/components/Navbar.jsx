import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "OUR SPICES", href: "/spices" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] flex items-center justify-between px-12 py-6 bg-transparent">
      {/* Brand Logo */}
      <a
        href="/"
        className="hover:scale-105 transition-all duration-300 text-[#F91814] text-6xl leading-none tracking-tight"
        style={{
          fontFamily: "'Modak', system-ui",
          WebkitTextStroke: "2px white",
          paintOrder: "stroke fill",
        }}
      >
        YUMM
      </a>

      <div className="relative flex items-center gap-4">
        {/* Burgers CTA Button (Black Slide Fill Animation) */}
        <a
          href="/menu"
          className="relative overflow-hidden group hover:scale-105 transition-all duration-300 flex items-center justify-center text-xl font-medium uppercase tracking-wider text-[#F5E3CD] bg-[#F91814] px-8 py-3.5 rounded-full shadow-sm"
          style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
        >
          {/* Black background sliding in on hover */}
          <span className="absolute inset-0 bg-[#1B1B1B] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />

          {/* Text layer above background */}
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            Burgers
          </span>
        </a>

        {/* Menu / Close Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`cursor-pointer hover:scale-105 transition-all duration-300 flex items-center text-xl font-medium uppercase tracking-wider px-5 py-3.5 rounded-full outline-none group border ${
            isOpen
              ? "bg-[#F91814] text-white border-[#F91814]"
              : "bg-[#EFE3D3] text-[#1B1B1B] border-[#1B1B1B]/15 border-2 hover:border-[#1B1B1B]/30"
          }`}
          style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
        >
          {isOpen ? (
            <span className="overflow-hidden relative inline-flex items-center gap-3 h-[1.2em]">
              <span className="flex items-center gap-1 group-hover:-translate-y-full translate-y-0 transition-transform duration-300">
                <span>CLOSE</span>
                <span className="text-2xl leading-none">
                  <span class="material-symbols-outlined">close</span>
                </span>
              </span>
              <span
                className="flex items-center gap-1 absolute inset-0 w-full h-full group-hover:translate-y-0 translate-y-full transition-transform duration-300"
                aria-hidden="true"
              >
                <span>CLOSE</span>
                <span className="text-2xl leading-none">
                  <span class="material-symbols-outlined">close</span>
                </span>
              </span>
            </span>
          ) : (
            <span className="overflow-hidden relative inline-flex items-center gap-3 h-[1.2em]">
              <span className="flex items-center gap-1 group-hover:-translate-y-full translate-y-0 transition-transform duration-300">
                <span>MENU</span>
                <span className="text-2xl leading-none">
                  <span class="material-symbols-outlined">calendar_meal</span>
                </span>
              </span>
              <span
                className="flex items-center gap-1 absolute inset-0 w-full h-full group-hover:translate-y-0 translate-y-full transition-transform duration-300"
                aria-hidden="true"
              >
                <span>MENU</span>
                <span className="text-2xl leading-none">
                  <span class="material-symbols-outlined">calendar_meal</span>
                </span>
              </span>
            </span>
          )}
        </button>

        {/* Dropdown Menu Card */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-4 w-70 bg-[#F91814] text-white rounded-[2rem] p-8 shadow-2xl flex flex-col items-start gap-4 z-50">
            <div className="flex flex-col w-full items-start gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl tracking-wider text-[#F5E3CD] hover:text-white transition-colors duration-200 block py-1"
                  style={{ fontFamily: "'Modak', system-ui" }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="w-full border-t border-white/20 pt-4 mt-2">
              <p
                className="text-sm tracking-widest text-[#F5E3CD]/80 uppercase"
                style={{ fontFamily: "'Mouse Memoirs', sans-serif" }}
              >
                EST. 1997 — NAVARRA, ESPAÑA
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
