import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4546d7f8-1d19-4129-9bbb-5206edf0b7d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("");
      toast.success("votre message est envoyer ...");
      event.target.reset();
    } else {
      console.log("erreur : ", res);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contactez{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          nous
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Lorem ipsum dolor sit amet, Rem magni provident libero sit!
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left ">
            votre nom
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="nom"
              placeholder="votre nom"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            votre mail
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="email"
              placeholder="votre nom"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48
           resize-none"
            name="message"
            placeholder="Votre message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-12 mb-10 rounded">
          {result ? result : "Envoyer message"}
        </button>
      </form>
    </motion.div>
  );
}
