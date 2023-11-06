import { useTranslations } from "next-intl";
import { Subtitle } from "../../common/Subtitle";

export const Education = () => {
  const t = useTranslations('Index');

  return (
    <section id="education">
      <Subtitle tag="h2">{t("education")}</Subtitle>
      <div className="flex flex-col text-left">
        <ul className="max-w-md space-y-1 flex flex-col list-disc list-inside text-sky-400">
          <li>
          {t("highSchool")}:  
          <a href="https://www.prvatehnicka.edu.rs/" className="ml-1"> {t("elSchool")}</a>
          </li>
          <li>
            {t("collage")}: 
            <a href="http://www.mfkg.rs/sr/" className="ml-1"> {t("engineering")}</a>
          </li>
          <li>
            {t("course")}: 
            <a href="https://cet.rs/" className="ml-1"> CET - Web Developer</a>
          </li>
          <li>
            {t("course")}: 
            <a href="https://www.ict-cs.org/rs/" className="ml-1"> IKT Klaster - Frontend Developer</a>
          </li>
        </ul>
      </div>
    </section>
  )
};
