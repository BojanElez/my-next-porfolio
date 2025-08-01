import { useTranslations } from 'next-intl';
import { calculateYearsOfExperience } from '../../../utils/calculateExperience';

export const About = () => {
  const t = useTranslations('Index');
  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <section id="about">
      <p>
        {t("aboutDescription1", { years: yearsOfExperience })}
      </p>
      <p className="pt-3">
        {t("aboutDescription2")}
      </p>
    </section>
  )
}