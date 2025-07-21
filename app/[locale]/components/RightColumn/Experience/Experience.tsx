import { useTranslations } from 'next-intl';
import { Subtitle } from '../../common/Subtitle';
import { experience } from './jobs';
import { ExperienceItem } from './ExperienceItem';
import ProjectDetail from './ProjectDetail';

export const Experience = () => {
  const t = useTranslations('Index');

  return (
    <section id="experience" className="pt-10">
      <Subtitle tag="h2">{t("workExperience")}</Subtitle>
      {experience.map((item) => (
        <ExperienceItem
          title={item.jobTitle}
          projects={item.projects}
          key={item.id}
          rangeEn={item.dateRangeEn}
          rangeSr={item.dateRangeSr}
        >
          {item.projects.map((project, index) => (
            <ProjectDetail
              key={project.id}
              index={index+1}
              projectName={project.domainName}
              techStack={project.techStack}
              technologies={project.techStack}
            />
          ))}
        </ExperienceItem>
      ))}
    </section>
  )
};