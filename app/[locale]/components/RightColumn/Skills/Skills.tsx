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
      <h3 className="text-lg font-semibold mb-3 text-gray-700">{title}</h3>
      <div className="flex flex-wrap w-[90%]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-2 rounded bg-slate-100 text-fuchsia-400 mr-3 mb-3"
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
