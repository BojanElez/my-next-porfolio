import { useTranslations } from "next-intl";
import { Subtitle } from "../../common/Subtitle";

export const Education = () => {
  const t = useTranslations('Index');

  return (
    <section id="education">
      <Subtitle tag="h2">{t("education")}</Subtitle>
      <div className="flex flex-col text-center">
        <Subtitle tag="h3">{t("highSchool")}: Prva Tehnicka Skola</Subtitle>
        |
        <Subtitle tag="h3">{t("collage")}: Faculty of Engineering</Subtitle>
      </div>
    </section>
  )
};
