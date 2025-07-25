import { useTranslations } from 'next-intl';
import { About } from "./About/About";
import { Experience } from "./Experience/Experience";
import { Skills } from "./Skills/Skills";
import { Education } from './Education/Education';
import { Contact } from './Contact/Contact';

export const RightColumn = () => {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col justify-between xs:w-full lg:w-7/12 py-20 pr-3 overflow-y-scroll hover:scrollbar">
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