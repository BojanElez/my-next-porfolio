import { useTranslations } from 'next-intl';
import { Info } from './Info/Info';
import { Navigation } from './Navigation/Navigation';
import { Social } from './Social/Social';

export const LeftColumn = () => {
  const t = useTranslations('Index');
  const navList = ["about", "skills", "experience", "education", "contact"];

  return (
    <div className="flex flex-col justify-between md:w-full lg:w-5/12 py-20">
      <Info />
      <Navigation navList={navList}/>
      <Social />
    </div>
  )
};