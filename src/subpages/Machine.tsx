import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ImStack } from "react-icons/im";
import { BsLightning, BsArrowsFullscreen, BsSpeedometer2 } from "react-icons/bs";
import { FaDrumSteelpan } from "react-icons/fa";
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
          src: ".././eachmachine/1.1-Otwieracze-bel-OB1_-OB2.webp",
          description: t("OB1"),
          parameters: [
            {
              szerokosc: [1200, 1400, 1600],
              moc: ["4,0", "4,2", "4,6"],
            },
          ],
        },
        {
          name: "OB1-E, OB2-E",
          src: ".././eachmachine/1.2-Zasilarki-wagowe-z-wagą-elektroniczną-OB1-E_-OB2-E.webp",
          description: t("OB2-E"),
          parameters: [
            {
              szerokosc: [1400, 1600],
              moc: ["4,2", "4,6"],
            },
          ],
        },
      ],
    },
    {
      type: t("transport"),
      tag: [
        {
          name: "TP, TPR",
          src: ".././eachmachine/2-1-transportery-zbiorcze-tp-tpr.webp",
          description: t("TP"),
          parameters: [
            {
              szerokosc: [800, 1000],
              moc: ["max 1,1"],
            },
          ],
        },
      ],
    },
    {
      type: t("opening"),
      tag: [
        {
          name: "AB6N, AB6A",
          src: ".././eachmachine/3-1-wilk-zgrzeblacy-ab6n.webp",
          description: t("AB6"),
          parameters: [
            {
              szerokosc: [1000, 1500],
              moc: ["21", "30"],
            },
          ],
        },
        {
          name: "AB19",
          src: ".././eachmachine/2-wilk-rozluzniajacy-pickerab19a.webp",
          description: t("AB19"),
          parameters: [
            {
              szerokosc: [1000, 1500],
              moc: ["14", "20"],
            },
          ],
        },
      ],
    },
    {
      type: t("mixing"),
      tag: [
        {
          name: "KMC",
          src: ".././eachmachine/4-1-komory-mieszalnicze-kmc.webp",
          description: t("KMC"),
          parameters: [
            {
              szerokosc: [1500, 3000],
              moc: ["4,7"],
            },
          ],
        },
        {
          name: "MW6",
          src: ".././eachmachine/4-2-komora-sekcyjna-mw6.webp",
          description: t("MW6"),
          parameters: [
            {
              szerokosc: [1200],
              moc: ["8"],
            },
          ],
        },
      ],
    },
    {
      type: t("nonwoven"),
      tag: [
        {
          name: "CU611, CU612, CU641",
          src: ".././eachmachine/5.1- zgrzeblarki-cu611-cu612.webp",
          description: t("CU611"),
          parameters: [
            {
              szerokosc: [1800, 2000, 2200, 2500, 3000],
            },
          ],
        },
        {
          name: "CU661, CU669",
          src: ".././eachmachine/5.2-zgrzeblarki-dwuzbiera-cu661.webp",
          description: t("CU661"),
          parameters: [
            {
              szerokosc: [1800, 2000, 2200, 2500, 3000],
            },
          ],
        },
      ],
    },
    {
      type: t("carding"),
      tag: [
        {
          name: "CR",
          src: ".././eachmachine/6.1-sys.zgrzebny.webp",
          description: t("CR"),
          parameters: [
            {
              szerokosc: [1800, 2000, 2200, 2500, 3000],
            },
          ],
        },
        {
          name: "CSW, CSP",
          src: ".././eachmachine/6.2-sys.czesankowy.webp",
          description: t("CS"),
          parameters: [
            {
              szerokosc: [1800, 2000, 2200, 2500, 3000],
            },
          ],
        },
      ],
    },
    {
      type: t("lab"),
      tag: [
        {
          name: "CU121",
          src: ".././eachmachine/7-1-linia-laboratoryjna-cu121.webp",
          description: t("CU121"),
          parameters: [
            {
              szerokosc: [500, 1000],
              moc: ["min 4", "max 9"],
              sredBebna: [500],
              sredZbieracz: [500],
            },
          ],
        },
        {
          name: "3AGK",
          src: ".././eachmachine/7.2-zgrzeblarkadofilcu.webp",
          description: t("3AGK"),
          parameters: [
            {
              szerokosc: [500],
              moc: ["9"],
              sredBebna: [1500],
              sredZbieracz: [680],
            },
          ],
        },
      ],
    },
    {
      type: t("crosslappers"),
      tag: [
        {
          name: "5W50",
          src: ".././eachmachine/8-1-uk197130adacz-serii-5w50.webp",
          description: t("5W50"),
          parameters: [
            {
              predkosc: ["max 50m/min"],
              moc: ["19"],
            },
          ],
        },
        {
          name: "5WN700",
          src: ".././eachmachine/8-2-uk197130adacz-serii-5wn700.webp",
          description: t("5WN700"),
          parameters: [
            {
              predkosc: ["max 70m/min"],
              moc: ["36"],
            },
          ],
        },
      ],
    },
    {
      type: t("webdrafters"),
      tag: [
        {
          name: "WD3 - WD6",
          src: ".././eachmachine/9-1-rozci196133garki-runa-wd3-wd5.webp",
          description: t("WD"),
          parameters: [
            {
              szerokosc: ["min 2600", "max 4000"],
              predkosc: ["1m/6min"],
              moc: ["min 4", "max 8"],
            },
          ],
        },
      ],
    },
    {
      type: t("recovery"),
      tag: [
        {
          name: "Szarpaki AC40, AC50",
          src: ".././eachmachine/10-1-szarparki-ac40-ac50.webp",
          description: t("AC40"),
          parameters: [
            {
              szerokosc: ["AC40-800", "AC50-1000", "AC50-1500"],
              moc: ["min 36", "max 180"],
            },
          ],
        },
        {
          name: "Otwieracz zgrzeblący OZ, POZ",
          src: ".././eachmachine/10.2-otwieracz-oz-poz.webp",
          description: t("POZ"),
          parameters: [
            {
              szerokosc: [1000, 1500],
              moc: ["min 24", "max 38"],
              predkosc: ["max 10 m/min"],
            },
          ],
        },
        {
          name: "Szarpaki AC5, AB19",
          src: ".././eachmachine/10-3-szarparki-ac5-ab19.webp",
          description: t("AC5"),
          parameters: [
            {
              szerokosc: ["AC5-500", "1000", "1500"],
              moc: ["14", "28"],
            },
          ],
        },
        {
          name: "Szarpak krajek AC4B",
          src: "10-4-szarparka-krajek-ac4b.webp",
          description: t("AC4B"),
          parameters: [
            {
              szerokosc: [250, 500],
              predkosc: ["max 15"],
            },
          ],
        },
      ],
    },
    {
      type: t("filters"),
      tag: [
        {
          name: "Kondensery obrotowe, odpylajace",
          src: ".././eachmachine/11-1-kondensery-odpylajace.webp",
          description: t("condensers"),
          parameters: [
            {
              szerokosc: [1000, 1200, 1500],
              moc: ["min 1,5", "max 2,2"],
              sredBebna: [548],
            },
          ],
        },
        {
          name: "Cyklony",
          src: ".././eachmachine/11-2-cyklony.webp",
          description: t("cyclones"),
        },
        {
          name: "Filtry",
          src: ".././eachmachine/11-3-filtry500x300.webp",
          description: t("filters2"),
          parameters: [
            {
              moc: ["min 2", "max 7,5"],
            },
          ],
        },
      ],
    },
    {
      type: t("pneumatic"),
      tag: [
        {
          name: t("pneumatic"),
          src: ".././eachmachine/12.1-instalacje-transp-pneum.webp",
          description: t("pneumatic_desc"),
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
                          src={thisMachine.src}
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
                        <div className="mt-4 lg:mr-40">
                                {thisMachine.parameters?.map((param, index) => (
                                  <div key={index}>

                                    <div
                                      id="paramas"
                                      className="flex flex-wrap justify-center sm:mr-14"
                                    >

                                      {param?.szerokosc ? (
                                        <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48 ">
                                          <ImStack className="text-3xl w-full" />
                                          <h3 className="text-lg w-full text-center">
                                            Szerokość <br /> robocza [mm]
                                          </h3>
                                          <ul className="mt-2 sm:mt-4">
                                            {param.szerokosc.map(
                                              (width: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {width}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                      {param?.sredZbieracz ? (
                                        <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48" >
                                          <BsArrowsFullscreen className="text-3xl w-full" />
                                          <h3 className="text-lg w-full text-center">
                                            Średnica <br /> zbieracza [mm]
                                          </h3>
                                          <ul className="mt-2 sm:mt-4">
                                            {param.sredZbieracz.map(
                                              (zbieracz: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {zbieracz}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                      {param?.moc ? (
                                        <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48">
                                          <BsLightning className="text-3xl w-full" />
                                          <h3 className="text-lg w-full text-center sm:mt-4">
                                            Moc [kW]
                                          </h3>
                                          <ul className="mt-2 sm:mt-6">
                                            {param.moc.map(
                                              (pwr: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {pwr}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                      {param?.predkosc ? (
                                        <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48">
                                          <BsSpeedometer2 className="text-3xl w-full" />
                                          <h3 className="text-lg w-full text-center sm:mt-4">
                                            Prędkość 
                                          </h3>
                                          <ul className=" mt-2 sm:mt-6">
                                            {param.predkosc.map(
                                              (predkosc: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {predkosc}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                      {param?.sredBebna ? (
                                        <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-full sm:w-48">
                                          <FaDrumSteelpan className="text-3xl w-full" />
                                          <h3 className="text-lg w-full text-center">
                                            Średnica <br /> bębna [mm]
                                          </h3>
                                          <ul className="mt-2 sm:mt-4">
                                            {param.sredBebna.map(
                                              (sred: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {sred}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                    </div>
                                  </div>
                                ))}
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
                              <div className="mt-4 lg:mr-40">
                                {thisMachine.parameters?.map((param, index) => (
                                  <div>
                                    <h2 className="text-xl lg:text-2xl font-medium my-5 ">
                                      Paramtery
                                    </h2>
                                    <div
                                      id="paramas"
                                      className="grid grid-cols-2 gap-7" 
                                    >

                                      {param?.szerokosc ? (
                                        <div key={index}>
                                          <ImStack className="text-3xl  w-full" />
                                          <h3 className="text-lg w-full text-center">
                                            Szerokość <br /> robocza [mm]
                                          </h3>
                                          <ul className="mt-2">
                                            {param.szerokosc.map(
                                              (width: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {width}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                      {param?.sredZbieracz ? (
                                        <div>
                                          <BsArrowsFullscreen className="text-3xl w-full" />
                                          <h3 className="text-lg w-full text-center">
                                            Średnica <br /> zbieracza [mm]
                                          </h3>
                                          <ul className=" mt-2">
                                            {param.sredZbieracz.map(
                                              (zbieracz: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {zbieracz}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                      {param?.moc ? (
                                        <div>
                                          <BsLightning className="text-3xl w-full mb-3" />
                                          <h3 className="text-lg w-full text-center">
                                            Moc [kW]
                                          </h3>
                                          <ul className=" mt-6">
                                            {param.moc.map(
                                              (pwr: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {pwr}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                      {param?.predkosc ? (
                                        <div>
                                          <BsSpeedometer2 className="text-3xl w-full mb-3" />
                                          <h3 className="text-lg w-full text-center">
                                            Prędkość 
                                          </h3>
                                          <ul className=" mt-6">
                                            {param.predkosc.map(
                                              (predkosc: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {predkosc}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                      {param?.sredBebna ? (
                                        <div>
                                          <FaDrumSteelpan className="text-3xl w-full" />
                                          <h3 className="text-lg w-full text-center">
                                            Średnica <br /> bębna [mm]
                                          </h3>
                                          <ul className=" mt-2">
                                            {param.sredBebna.map(
                                              (sred: any, index: any) => (
                                                <li
                                                  className="w-full text-center"
                                                  key={index}
                                                >
                                                  {sred}
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}

                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <img
                              src={thisMachine.src}
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
            {t("contact_with")}
          </h3>
          <p className="w-full text-center text-white text-xl">
            info@befama.com.pl
          </p>
          <p className="w-full text-center text-white text-xl">
            {t("street")} Północna 212
          </p>
          <p className="w-full text-center text-white text-xl">Kalna</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Machine;
