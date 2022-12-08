import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ImStack } from "react-icons/im";
import { BsLightning } from "react-icons/bs";
import Footer from "../content/Footer";
import SubNavbar from "../content/SubNavbar";
import ScrollToTop from "../functions/ScrollToTop";

const Machine = () => {
  const { t } = useTranslation();
  const { name } = useParams();

  const machines = [
    {
      type: t("bale"),
      tag: [
        {
          name: "OB1, OB2",
          src: ".././eachmachine/1-1-otwieracze-bel-ob1-ob2.webp",
          description: t("OB1"),
          szerokosc: [1200, 1400, 1600],
          moc: ["4,0", "4,2", "4,6"],
        },
        {
          name: "OB1-E, OB2-E",
          src: "",
          description: " ",
          szerokosc: [1400, 1600],
          moc: ["4,2", "4,6"],
        },
      ],
    },
    {
      type: t("transport"),
      tag: [
        {
          name: "TP, TPR",
          src: ".././eachmachine/2-1-transportery-zbiorcze-tp-tpr.webp",
          description: " ",
          szerokosc: [800, 1000],
          moc: ["max 1,1"],
        },
      ],
    },
    {
      type: t("opening"),
      tag: [
        {
          name: "AB6N, AB6A",
          src: ".././types/AB6.webp",
          description: " ",
          szerokosc: [1000, 1500],
          moc: ["21", "30"],
        },
        {
          name: "AB19",
          src: "",
          description: " ",
          szerokosc: [1000, 1500],
          moc: ["14", "20"],
        },
      ],
    },
    {
      type: t("mixing"),
      tag: [
        {
          name: "KMC",
          src: "",
          description: " ",
          szerokosc: [1500, 3000],
          moc: ["4,7"],
        },
        {
          name: "MW6",
          src: "",
          description: " ",
          szerokosc: [1200],
          moc: ["8"],
        },
      ],
    },
    {
      type: t("nonwoven"),
      tag: [
        {
          name: "CU611, CU612, CU641",
          src: "",
          description: " ",
          szerokosc: [1800, 2000, 2200, 2500, 3000],
          moc: [""],
        },
        {
          name: "CU661, CU669",
          src: ".././types/CU661.4.webp",
          description: " ",
          szerokosc: [1800, 2000, 2200, 2500, 3000],
          moc: [""],
        },
      ],
    },
    {
      type: t("carding"),
      tag: [
        {
          name: "CR",
          src: ".././types/TypCR.webp",
          description: " ",
          szerokosc: [1800, 2000, 2200, 2500, 3000],
          moc: [""],
        },
        {
          name: "CSW, CSP",
          src: ".././types/TypCS.webp",
          description: " ",
          szerokosc: [1800, 2000, 2200, 2500, 3000],
          moc: [""],
        },
      ],
    },
    {
      type: t("lab"),
      tag: [
        {
          name: "CU121",
          src: "",
          description: " ",
          szerokosc: [500, 1000],
          moc: ["min 4", "max 9"],
          sredBebna: [500],
          sredZbieracz: [500],
        },
        {
          name: "3AGK",
          src: "",
          description: " ",
          szerokosc: [500],
          moc: ["9"],
          sredBebna: [1500],
          sredZbieracz: [680],
        },
      ],
    },
    {
      type: t("crosslappers"),
      tag: [
        {
          name: "5W50",
          src: "",
          description: " ",
          predkosc: ["max 50m/min"],
          moc: ["19"],
        },
        {
          name: "5WN700",
          src: "",
          description: " ",
          predkosc: ["max 70m/min"],
          moc: ["36"],
        },
      ],
    },
    {
      type: t("webdrafters"),
      tag: [
        {
          name: "WD3 - WD6",
          src: "",
          description: " ",
          szerokosc: ["min 2600", "max 4000"],
          predkosc: ["1m/6min"],
          moc: ["min 4", "max 8"],
        },
      ],
    },
    {
      type: t("recovery"),
      tag: [
        {
          name: "Szarpaki AC40, AC50",
          src: "",
          description: " ",
          szerokosc: ["AC40-800", "AC50-1000", "AC50-1500"],
          moc: ["min 36", "max 180"],
        },
        {
          name: "Otwieracz zgrzeblący OZ, POZ",
          src: "",
          description: " ",
          szerokosc: [1000, 1500],
          moc: ["min 24", "max 38"],
          predkosc: ["max 10 m/min"],
        },
        {
          name: "Szarpaki AC5, AB19",
          src: "",
          description: " ",
          szerokosc: ["AC5-500", "1000", "1500"],
          moc: ["14", "28"],
        },
        { name: "Szarpak krajek AC4B", src: "", description: " ",          szerokosc: [250, 500],
        predkosc: ["max 15"], },
      ],
    },
    {
      type: t("filters"),
      tag: [
        {
          name: "Kondensery obrotowe, odpylajace",
          src: "",
          description: " ",
          szerokosc: [1000, 1200, 1500],
          moc: ["min 1,5", "max 2,2"],
          sredBebna: [548]
        },
        {
          name: "Cyklony",
          src: "",
          description: " ",
        },
        {
          name: "Filtry",
          src: "",
          description: " ",
          moc: ["min 2", "max 7,5"]
        },
      ],
    },
    {
      type: t("pneumatic"),
      tag: [
        {
          name: "Instalacje transportu pneumatycznego",
          src: "",
          description: " ",
        },
      ],
    },
  ];

  return (
    <div className="bg-stone-100">
      <ScrollToTop />
      <SubNavbar />

      <div className="mt-14 sm:mt-20 pt-7">
        {machines.map((machine, index) => {
          if (machine.type === name) {
            return (
              <div key={index}>
                <div className="w-full justify-center flex gap-1 text-xl font-medium mb-10 sm:text-3xl md:text-4xl lg:my-12">
                  <label className="w-2 h-7 sm:h-8 md:h-9 bg-sky-700"></label>
                  <h1>{machine.type}</h1>
                </div>
                {machine.tag.map((thisMachine, index2) => (
                  <div key={index2}>
                    {/* ---> Mobile <--- */}
                    <div className="md:hidden">
                      <div className="flex w-full justify-center flex-wrap">
                        <img
                          src="../eachmachine/1-1-otwieracze-bel-ob1-ob2.webp"
                          className="w-3/4 max-w-md z-20 drop-shadow-2xl"
                        ></img>
                        <div className="z-10 bg-white justify-center flex max-w-xl w-11/12 py-16 -mt-24 pt-24 sm:py-20 sm:pt-44 sm:-mt-36 ">
                          <div className="z-10  max-w-md flex flex-wrap justify-center px-5 ">
                            <h2 className="text-xl font-medium my-4 w-full text-center">
                              {thisMachine.name}
                            </h2>
                            <p className="max-w-sm">
                              {thisMachine.description}
                            </p>
                          </div>
                        </div>
                        <div
                          id="background"
                          className="bg-white w-11/12 h-auto absolute z-0 mt-14 max-w-xl "
                        ></div>
                      </div>
                      <div className="mt-5  w-full z-10 mb-40">
                        <h2 className="text-lg sm:text-xl font-medium w-full text-center ">
                          Paramtery
                        </h2>
                        <div
                          id="paramas"
                          className="flex flex-wrap justify-center sm:mr-14"
                        >
                          <div className="flex flex-wrap justify-center my-2 max-w-md">
                            <ImStack className="text-2xl sm:text-4xl w-full" />
                            <h3 className="text-md w-full text-center">
                              Szerokość robocza [mm]
                            </h3>
                            <ul className="text-sm sm:text-base mt-2 sm:mt-4">
                              <li className="w-full text-center">3333</li>
                              <li className="w-full text-center">2222</li>
                              <li className="w-full text-center">1111</li>
                            </ul>
                          </div>
                          <div className="flex flex-wrap justify-center my-2 max-w-md">
                            <BsLightning className="text-2xl sm:text-4xl w-full" />
                            <h3 className="text-md w-full text-center">
                              Moc [kW]
                            </h3>
                            <ul className="text-sm sm:text-base mt-2 sm:mt-4">
                              <li className="w-full text-center">33</li>
                              <li className="w-full text-center">22</li>
                              <li className="w-full text-center">11</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ---> Desktop <--- */}
                    <div className="hidden md:block">
                      <div className="flex w-full justify-center flex-wrap  mb-40">
                        <div className="bg-white w-full max-w-3xl lg:max-w-5xl p-10">
                          <div className="grid grid-cols-2">
                            <div className="lg:ml-10">
                              <label className="text-xl lg:text-2xl font-medium ">
                                Model:
                              </label>
                              <h2 className="text-xl lg:text-2xl font-medium mb-4 my-2">
                                {thisMachine.name}
                              </h2>
                              <p className="max-w-sm">
                                {thisMachine.description}
                              </p>
                              <div className="mt-4">
                                <h2 className="text-xl lg:text-2xl font-medium my-5 ">
                                  Paramtery
                                </h2>
                                <div
                                  id="paramas"
                                  className="flex flex-wrap justify-center gap-7"
                                >
                                  <div>
                                    <ImStack className="text-3xl  w-full" />
                                    <h3 className="text-lg w-full text-center">
                                      Szerokość <br /> robocza [mm]
                                    </h3>
                                    <ul className="mt-4">
                                      <li className="w-full text-center">33</li>
                                      <li className="w-full text-center">22</li>
                                      <li className="w-full text-center">11</li>
                                    </ul>
                                  </div>
                                  <div className="">
                                    <BsLightning className="text-3xl w-full mb-3" />
                                    <h3 className="text-lg w-full text-center">
                                      Moc [kW]
                                    </h3>
                                    <ul className=" mt-8">
                                      <li className="w-full text-center">33</li>
                                      <li className="w-full text-center">22</li>
                                      <li className="w-full text-center">11</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="../eachmachine/1-1-otwieracze-bel-ob1-ob2.webp"
                              className="relative max-w-md self-center lg:max-w-3xl lg:w-full lg:ml-32 shadow-xl"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          }
        })}
        <div className="h-72 w-full bg-sky-400 my-32 items-center py-14">
          <h3 className="w-full text-center text-white text-4xl font-semibold my-5">
            KONTAKT Z NAMI
          </h3>
          <p className="w-full text-center text-white text-xl">
            info@befama.com.pl
          </p>
          <p className="w-full text-center text-white text-xl">ul.jakas tam</p>
          <p className="w-full text-center text-white text-xl">Kalna</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Machine;
