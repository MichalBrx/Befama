import { useTranslation } from "react-i18next"

const Hero = () => {
    const { t } = useTranslation()
  return (
    <div className="bg-black">
        <div id='home' className="grid justify-center content-center isolate">
            <img src='./main.webp' alt='Machine' className="saturate-50 h-screen object-cover w-screen  opacity-70" id='main_img'></img>
            <span className="z-10 absolute pt-16 p-5 w-full mt-32  justify-center">
                <p className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-bold  justify-center"> {t('welcome')} </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white text-center font-bold flex mt-2 justify-center"> {t('subtitle')} </p>
            </span>
        </div>
    </div>
  )
}

export default Hero