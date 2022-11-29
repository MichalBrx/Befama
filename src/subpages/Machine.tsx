import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
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
          name: "OB1",
          src: ".././eachmachine/1-1-otwieracze-bel-ob1-ob2.webp",
          description: t("OB1"),
        },
        { name: "OB2", src: "", description: " " },
      ],
    },
    {
      type: t("transport"),
      tag: [
        {
          name: "TYP TP",
          src: ".././eachmachine/2-1-transportery-zbiorcze-tp-tpr.webp",
          description: " ",
        },
        { name: "TYP TPR", src: "", description: " " },
      ],
    },
    {
      type: t("opening"),
      tag: [
        { name: "AB6", src: ".././types/AB6.webp", description: " " },
        { name: "AB19", src: "", description: " " },
        { name: "AB19G", src: "", description: " " },
      ],
    },
    {
      type: t("mixing"),
      tag: [
        { name: "KMC1500", src: "", description: " " },
        { name: "KMC3000", src: "", description: " " },
        { name: "MW6", src: "", description: " " },
      ],
    },
    {
      type: t("nonwoven"),
      tag: [
        { name: "CU611", src: "", description: " " },
        { name: "CU641", src: "", description: " " },
        { name: "CU661", src: ".././types/CU661.4.webp", description: " " },
      ],
    },
    {
      type: t("carding"),
      tag: [
        { name: "TYP CR", src: ".././types/TypCR.webp", description: " " },
        { name: "TYP CS", src: ".././types/TypCS.webp", description: " " },
      ],
    },
    {
      type: t("lab"),
      tag: [
        { name: "3KA", src: "", description: " " },
        { name: "3AGK", src: "", description: " " },
      ],
    },
    { type: t("crosslappers"), tag: [{ name: "", src: "", description: " " }] },
    {
      type: t("webdrafters"),
      tag: [
        { name: "5W50", src: "", description: " " },
        { name: "5WN700", src: "", description: " " },
        { name: "Seria WD", src: "", description: " " },
      ],
    },
    {
      type: t("recovery"),
      tag: [
        { name: "Szarparki krajek AC4B", src: "", description: " " },
        { name: "Szarparka rdpadów AC5", src: "", description: " " },
        { name: "Agregaty rzarpiące AC40", src: "", description: " " },
        { name: "Krajarki rotacyjne AC39", src: "", description: " " },
      ],
    },
    {
      type: t("filters"),
      tag: [
        {
          name: "Kondensery obrotowe, cyklony, filtry",
          src: "",
          description: " ",
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
    <div className="">
      <ScrollToTop />
      <SubNavbar />
      <div className="bg-zinc-50">
        <div className="w-full justify-center flex my-4">
          <div className="flex justify-center md:my-12 max-w-6xl ">
            {machines.map((machine) => {
              if (machine.type === name) {
                return (
                  <div className="mt-16">
                    <h1 className="w-full justify-center flex my-5 text-5xl font-bold text-center">
                      {machine.type}
                    </h1>
                    <div className="mb-5 flex flex-wrap gap-10 justify-center">
                      {machine.tag.map((model, index: React.Key) => (
                        <div
                          key={index}
                          className="card card-compact w-auto bg-white shadow-xl sm:m-5 p-2 m-1 border-t max-w-lg sm:p-5  duration-150 sm:my-10"
                        >
                          <figure>
                            <img
                              className="rounded-md"
                              src={model.src}
                              alt={machine.type}
                            />
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title w-full justify-center m-1 mt-3 mb-10 text-3xl">
                              {model.name}
                            </h2>
                            <p className="text-lg">{model.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Machine;
