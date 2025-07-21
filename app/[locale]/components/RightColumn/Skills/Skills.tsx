import { useTranslations } from "next-intl";
import { Subtitle } from "../../common/Subtitle";


export const Skills = () => {
  const t = useTranslations("Index");
  
  const programmingLanguagesAndLibraries = [
    "JavaScript ES5/ES6+",
    "React",
    "Redux",
    "Redux Toolkit",
    "React Query",
    "NextJS",
    "NodeJS",
    "Express",
    "NestJs",
    "SQL",
    "Prisma",
    "GraphQL",
    "REST",
    "Jest",
  ];

  const markupAndStyling = [
    "HTML5",
    "CSS3",
    "Sass/Less",
    "MaterialUI",
    "Bootstrap",
    "Tailwind",
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
      <div className="flex flex-wrap">
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
    <section className="pt-10" id="skills">
      <Subtitle tag="h2">{t("skills")}</Subtitle>
      <div>
        {renderSkillSection("Programming Languages & Libraries", programmingLanguagesAndLibraries)}
        {renderSkillSection("Markup & Styling Languages", markupAndStyling)}
        {renderSkillSection("Tools & Others", toolsAndOthers)}
      </div>
    </section>
  );
};
