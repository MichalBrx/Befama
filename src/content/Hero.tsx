import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-black">
      <div id="home" className="grid justify-center content-center isolate">
        <img
          src="./main.webp"
          alt="Machine"
          className="saturate-50 h-screen object-cover w-screen  opacity-70"
          id="main_img"
        ></img>
        <span
          className="z-10 absolute pt-16 p-5 w-full md:mt-32 mt-16  justify-center"
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          <p className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-bold  justify-center">
            {" "}
            {t("welcome")}{" "}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white text-center font-bold flex mt-2 justify-center">
            {" "}
            {t("subtitle")}{" "}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Hero;
