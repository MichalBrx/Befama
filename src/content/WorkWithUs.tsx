import React from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WorkWithUs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="card w-full shadow-xl rounded-lg max-w-md border-t"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <figure className="px-10 pt-10">
        <img
          src="career.webp"
          alt="career"
          className="rounded-xl hover:scale-110 duration-200 "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {t("work_w_us")} </h2>
        <p> {t("if_you")} </p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={() => navigate("/work")}>
            {" "}
            {t("who_we_need")}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
