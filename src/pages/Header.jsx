import { motion, AnimatePresence } from "framer-motion";
import { NavBar } from "../Components/NavBar/NavBar";
import { useState, useEffect } from "react";

// Liste des images de fond
const backgroundImages = [
  "/header_img.png",
  "/project_img_2.jpg",
  "/project_img_3.jpg",
];

// Liste des textes du header
const headerTexts = [
  "Explorer la maison de vos rêves ...",
  "Trouvez la maison parfaite pour vous",
  "Vivez dans un espace conçu pour vous",
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Change d'image et de texte toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden " id="Home">
      {/* Images en background avec effet de zoom in/out */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          {backgroundImages.map((image, index) =>
            index === currentIndex ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }} // Commence avec un léger zoom out
                animate={{ opacity: 1, scale: 1 }} // Zoome progressivement
                exit={{ opacity: 0, scale: 1.1 }} // Repart en zoom out quand il disparaît
                transition={{ duration: 4, ease: "easeInOut" }} // Animation fluide
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Contenu du Header */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white bg-black bg-opacity-50">
        <NavBar />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container text-center mx-auto px-2 md:px-20 lg:px-32"
        >
          {/* Texte animé */}
          <motion.h2
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-[82px] inline max-w-3xl font-semibold pt-20"
          >
            {headerTexts[currentIndex]}
          </motion.h2>

          {/* Boutons */}
          <div className="space-x-2 mt-16">
            <a
              href="#Project"
              className="border border-white px-8 py-3 hover:bg-blue-500 hover:border-none"
            >
              Nos Projets
            </a>
            <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">
              Nous Contacter
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
