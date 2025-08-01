import { useTranslations } from "next-intl";
import { Subtitle } from "../../common/Subtitle";


export const Skills = () => {
  const t = useTranslations("Index");
  
  const programmingLanguagesAndFrameworks = [
    "JavaScript ES5/ES6+",
    "React",
    "NextJS",
    "NodeJS",
    "Express",
    "NestJs",
  ];

  const libraries = [
    "Redux",
    "Redux Toolkit",
    "React Query",
    "Prisma",
    "Jest",
    "Storybook",
  ];

  const markupAndStyling = [
    "HTML5",
    "CSS3",
    "Sass/Less",
    "MaterialUI",
    "Bootstrap",
    "Tailwind",
  ];

  const databasesAndAPIs = [
    "SQL",
    "GraphQL",
    "REST",
  ];

  const toolsAndOthers = [
    "AWS",
    "Git",
    "Docker",
    "CI/CD",
    "Agile/Scrum",
  ];

  const renderSkillSection = (title: string, skills: string[]) => (
    <div className="mb-6">
      <h3 className="skill-section-title">{title}</h3>
      <div className="skill-section-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-badge"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="pt-10">
      <Subtitle tag="h2">{t("skills")}</Subtitle>
      <div>
        {renderSkillSection(t("programmingLanguagesAndFrameworks"), programmingLanguagesAndFrameworks)}
        {renderSkillSection(t("libraries"), libraries)}
        {renderSkillSection(t("markupAndStyling"), markupAndStyling)}
        {renderSkillSection(t("databasesAndAPIs"), databasesAndAPIs)}
        {renderSkillSection(t("toolsAndOthers"), toolsAndOthers)}
      </div>
    </section>
  );
};
