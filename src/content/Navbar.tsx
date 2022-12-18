import { useNavigate } from "react-router";
import cookies from "js-cookie";

import { MenuOutlined, GlobalOutlined } from "@ant-design/icons";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

import "flag-icons/css/flag-icons.min.css";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

const languages: { code: string; name: string; country_code: string }[] = [
  {
    code: "pl",
    name: "Polski",
    country_code: "pl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "de",
    name: "Deutsch",
    country_code: "de",
  },
  {
    code: "rus",
    name: "Русский",
    country_code: "ru",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get("i18next") || "pl";

  const handleClick = (e: any) => {
    navigate("/");
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 60,
    });
  };

  return (
    <div className="z-50">
      <div
        id="NavBar"
        className={
          "shadow-gray-700 border-b shadow-sm z-30 bg-white fixed top-0 w-full sm:h-20 flex items-center duration-200"
        }
      >
        <div className="flex sm:gap-5 gap-1 mx-2 md:mx-5 lg:mx-20">
          <div className="w-14 h-full sm:w-16 lg:w-20">
            <a href="#home" className="w-full h-full">
              <img
                src="./logo.png"
                alt="Logo Befama"
                className="rounded-full h-12 m-1 w-auto sm:h-16"
              ></img>
            </a>
          </div>

          <div className="flex items-center font-medium sm:text-lg md:text-xl md:ml-10 lg:ml-20 lg:gap-5">
            <div className="cursor-pointer group transition-all duration-300 pl-3 sm:p-3">
              <a href="#home" onClick={(e) => handleClick(e)}>
                Home
              </a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span>
            </div>


            <div className="cursor-pointer group transition-all duration-300 p-2 w-28 text-center">
              <a href="#aboutUs" onClick={(e) => handleClick(e)}>
                {" "}
                {t("about_us")}{" "}
              </a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span>
            </div>
            <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden md:block">
              <a href="#machines" onClick={(e) => handleClick(e)}>
                {" "}
                {t("machnies")}{" "}
              </a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span>
            </div>
            <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden sm:block">
              <a href="#services" onClick={(e) => handleClick(e)}>
                {" "}
                {t("services")}{" "}
              </a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span>
            </div>
            <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden lg:block">
              <a href="#work" onClick={(e) => handleClick(e)}>
                {" "}
                {t("career")}{" "}
              </a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span>
            </div>
            <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden lg:block">
              <button onClick={() => navigate("/department")}>
                {" "}
                {t("contact")}{" "}
              </button>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span>
            </div>
          </div>
        </div>
        <div className="flex justify-end h-full w-full  items-center mx-1 sm:mx-5 lg:mx-20">
          <div
            className="dropdown dropdown-hover mr-4 sm:mx-10 lg:hidden"
            id="dropdown Menu"
          >
            <label className="sm:ml-10">
              <MenuOutlined
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </label>
            <ul className="dropdown-content p-2 rounded -left-10 sm:-left-0 mt-1 w-28 bg-white text-center shadow-xl border-t">
              <li className="hover:bg-gray-200 duration-200 py-3 rounded sm:hidden">
                <a href="#services" onClick={(e) => handleClick(e)}>
                  {" "}
                  {t("services")}{" "}
                </a>
              </li>
              <li className="hover:bg-gray-200 duration-200 p-3 rounded md:hidden">
                <a href="#Machines" onClick={(e) => handleClick(e)}>
                  {" "}
                  {t("machnies")}{" "}
                </a>
              </li>
              <li className="hover:bg-gray-200 duration-200 p-3 rounded ">
                <a href="#work" onClick={(e) => handleClick(e)}>
                  {" "}
                  {t("career")}{" "}
                </a>
              </li>
              <li className="hover:bg-gray-200 duration-200 p-3 rounded ">
                <button onClick={() => navigate("/Department")}>
                  {" "}
                  {t("contact")}{" "}
                </button>
              </li>
            </ul>
          </div>

          <div
            className="dropdown dropdown-end md:mx-5 w-auto justify-center tooltip tooltip-bottom"
            data-tip={t("languages")}
          >
            <label tabIndex={0} className="">
              <GlobalOutlined
                style={{ fontSize: "1.75rem", cursor: "pointer" }}
              />
            </label>
            <form>
              <ul
                tabIndex={0}
                className="dropdown-content menu-normal p-2 shadow bg-white rounded-box w-40 mt-4"
              >
                {languages.map(({ code, name, country_code }) => (
                  <li
                    className="hover:bg-slate-100 duration-150 px-4 rounded-lg"
                    style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                    key={country_code}
                  >
                    <button
                      disabled={code === currentLanguageCode}
                      onClick={() => i18next.changeLanguage(code)}
                    >
                      <span
                        className={`fi fi-${country_code} mx-2 border-t`}
                      ></span>
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </form>
          </div>

          <div
            className="tooltip tooltip-bottom hidden md:block mx-3"
            data-tip={t("youtube")}
          >
            <a
              href="https://www.youtube.com/user/1851Befama"
              target="_blank"
              aria-label="youTube"
            >
              <AiOutlineYoutube className="w-8 h-8 " />
            </a>
          </div>
          <div
            className="tooltip tooltip-bottom hidden md:block ml-2 lg:mx-5"
            data-tip={t("location")}
          >
            <a
              href="https://www.google.com/maps/place/P%C3%B3%C5%82nocna+212,+43-378+Kalna,+Poland/@49.7120509,19.1081515,15.5z/data=!4m5!3m4!1s0x47142728491cc8d5:0xf37a9d1b0ccec16e!8m2!3d49.7129164!4d19.1097307?hl=en"
              target="_blank"
              aria-label="location"
            >
              <FiMapPin className="w-8 h-8  " />
            </a>
          </div>
        </div>
      </div>
      <div>
        <a
          className="btn btn-circle fixed z-50  bottom-20 right-5 motion-safe:animate-bounce"
          href="#home"
        >
          <p className="-rotate-90 text-white text-xl">❯</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
