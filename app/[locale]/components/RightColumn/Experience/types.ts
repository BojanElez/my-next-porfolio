import { IProject } from "@/app/types";

export interface IExperienceItemProp {
  children: React.ReactNode,
  title: string,
  projects: IProject[],
  rangeEn: string,
  rangeSr: string,
}

export interface IProjectDetailsProp {
  index: number,
  projectName: string,
  techStack: string,
  technologies: string,
}