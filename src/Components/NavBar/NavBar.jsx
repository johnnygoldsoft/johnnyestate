import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

export function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Accueil
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            A Propos
          </a>
          <a href="#Project" className="cursor-pointer hover:text-gray-400">
            Projet
          </a>
          <a href="#Testimonial" className="cursor-pointer hover:text-gray-400">
            Temoignage
          </a>
        </ul>
        <button className="hidden md:block text-black  bg-white px-8 py-2 rounded-full">
          <a href="#Contact">Demander un Devis</a>
        </button>
        <img
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
        />
      </div>
      {/**  mobile menu */}

      <div
        className={`
          'md:hidden ${
            showMobileMenu ? "fixed w-full" : "h-0 w-0 "
          } right-0 top-0 bottom-0 overflow-hidden text-black bg-white transition-all
        `}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul
          className="flex flex-col items-center gap-2 mt-5 px(
         text-lg font-medium"
        >
          <a
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            href="#Home"
            className="px-4 py-2 rounded-full inline-block"
          >
            Accueil
          </a>
          <a
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            A Propos
          </a>
          <a
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            href="#Project"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projet
          </a>
          <a
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            href="#Testimonial"
            className="px-4 py-2 rounded-full inline-block"
          >
            Temoignage
          </a>
        </ul>
      </div>
    </div>
  );
}
