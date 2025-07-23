import { useTranslations } from 'next-intl';
import React from 'react';
import { IProjectDetailsProp } from './types';

const ProjectDetail = ({ projectName, index, technologies}: IProjectDetailsProp) => {
  const t = useTranslations('Index');

  return (
    <ul>
      <li>{index+1}. {projectName}</li>
      <li className="ml-3">{t("techStack")}</li>
      <li className="ml-3">{technologies}</li>
    </ul>
  )
}

export default ProjectDetail