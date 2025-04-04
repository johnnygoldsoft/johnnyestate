import { assets } from "../assets/assets";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        À propos{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          de notre marque{" "}
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing consectetur
        voluptatum?
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/2 max-w-lg "
          alt=""
          srcset=""
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-2 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-green-800">10+</p>
              <p>Année d'experience </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-green-800">12+</p>
              <p>Projet achevé </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-green-800">53+</p>
              <p>Client satisfait </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-green-800">25+</p>
              <p>Projet encours .. </p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            quisquam illo perferendis unde magni natus ipsum, dolorem impedit
            delectus debitis excepturi ad sit deleniti. Suscipit dolore sapiente
            orepellendus vero exercitationem atque, ratione minima? Aspernatur
            dolore ducimus amet commodi labore quas consectetur sed, a earum
            aliquid. Vel laboriosam eum nihil eaque?
          </p>
          <button className=" bg-blue-600 text-white px-8 py-2 rounded">
            {" "}
            En savoir plus
          </button>
        </div>
      </div>
    </motion.div>
  );
}
