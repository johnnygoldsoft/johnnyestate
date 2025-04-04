import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className=" container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            ullam, molestiae quasi corporis eum atque eligendi eos, iure autem
            suscipit maxime. Ipsa modi consequatur fugiat repellendus optio
            exercitationem corporis commodi.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Home" className="hover:text-white">
              Accueil
            </a>
            <a href="#About" className="hover:text-white">
              A Propos
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className=" text-white text-lg font-bold mb-4">
            {" "}
            S'abonner a notre Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Pour recevoir nos dernieres nouvelles et actualité
          </p>
          <div
            className="flex gap-2
          "
          >
            <input
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
              type="email"
              name="email"
              id=""
              placeholder="Entrer votre mail"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              S'abonner{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © JohnnyGoldSoft . Tout Droit Reservé
      </div>
    </div>
  );
}
