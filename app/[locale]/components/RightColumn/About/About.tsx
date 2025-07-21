import { useTranslations } from 'next-intl';

export const About = () => {
  const t = useTranslations('Index');

  return (
    <section id="about">
      <p className="">
        {t("aboutDescription1")}
      </p>
      <p className="pt-3">
        {t("aboutDescription2")}
      </p>
    </section>
  )
}