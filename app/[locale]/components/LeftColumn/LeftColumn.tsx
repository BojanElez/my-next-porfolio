import { useTranslations } from 'next-intl';
import { Info } from './Info/Info';
import { Navigation } from './Navigation/Navigation';
import { Social } from './Social/Social';

export const LeftColumn = () => {
  const t = useTranslations('Index');
  const navListTranslation = [`${t("about")}`, `${t("skills")}`, `${t("experience")}`, `${t("education")}`, `${t("contact")}`];
  const navList = ["about", "skills", "experience", "education", "contact"];


  return (
    <div className="left-column-container">
      <Info />
      <Navigation navListTranslation={navListTranslation} navList={navList}/>
      <Social />
    </div>
  )
};