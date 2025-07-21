import { useTranslations } from "next-intl";
import { Subtitle } from "../../common/Subtitle";

export const Skills = () => {
  const t = useTranslations("Index");
  const skillsArr = [
    "HTML",
    "CSS",
    "Sass/Less",
    "MaterialUI",
    "Bootstrap",
    "Tailwind",
    "JavaScript ES5/ES6+",
    "React",
    "Redux",
    "React Query",
    "NextJS",
    "NodeJS",
    "Express",
    "NestJs",
    "SQL",
    "Prisma",
    "AWS",
    "GraphQL",
    "REST",
    "Git",
    "Docker",
    "CI/CD",
    "Agile/Scrum",
  ];

  return (
    <section className="pt-10" id="skills">
      <Subtitle tag="h2">{t("skills")}</Subtitle>
      <div className="flex flex-wrap">
        {skillsArr.map((skill, index) => {
          return (
            <div
              key={index}
              className="p-2 rounded bg-slate-100 text-fuchsia-400 mr-3 mb-3"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
};
