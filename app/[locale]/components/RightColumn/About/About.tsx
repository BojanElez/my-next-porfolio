import { useTranslations } from 'next-intl';
import { Video } from '../../Video';

export const About = () => {
  const t = useTranslations('Index');

  return (
    <section id="about">
      {/* <Video /> */}
      <p className="">
        {t("aboutDescription1")}
      </p>
      <p className="pt-3">
        {t("aboutDescription2")}
      </p>
    </section>
  )
}