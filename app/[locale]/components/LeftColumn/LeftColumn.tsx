import { useTranslations } from 'next-intl';
import { Info } from './Info/Info';
import { Navigation } from './Navigation/Navigation';
import { Social } from './Social/Social';

export const LeftColumn = () => {
  const t = useTranslations('Index');
  const navListTranslation = [`${t("about")}`, `${t("skills")}`, `${t("experience")}`, `${t("education")}`, `${t("contact")}`];
  const navList = ["about", "skills", "experience", "education", "contact"];


  return (
    <div className="flex flex-col justify-between xs:w-full lg:w-5/12 py-20">
      <Info />
      <Navigation navListTranslation={navListTranslation} navList={navList}/>
      <Social />
    </div>
  )
};