import { useTranslations } from 'next-intl';
import { About } from "./About/About";
import { Experience } from "./Experience/Experience";
import { Skills } from "./Skills/Skills";
import { Education } from './Education/Education';
import { Contact } from './Contact/Contact';

export const RightColumn = () => {
  const t = useTranslations('Index');

  return (
    <div className="right-column-container">
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <section className=" pt-5">
        <a href='/CV-Bojan-Elez.pdf' target="_blank">{t("fullResume")} </a>
      </section>
    </div>
  )
};