import React from 'react';
import { Modal } from '../../common/Modal';
import { useTranslations } from 'next-intl';
import { Subtitle } from '../../common/Subtitle';
import { IExperienceItemProp } from './types';

export const ExperienceItem = ({ children, title, projects, rangeEn, rangeSr }: IExperienceItemProp) => {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col cursor-pointer transition duration-200 hover:bg-sky-600 gap-x-2 p-2 rounded-md">
      <div className="min-w-full pb-3">
        <Subtitle tag="h3">{title}</Subtitle>
      </div>
      <div className="flex min-w-full">
        <div className="w-2/5">
          <h4>{rangeEn}</h4>
        </div>
        <div className="w-3/5 ">
          <h4>{t("projects")}</h4>
          {children}
          <Modal title={title} projects={projects} showMore={t("showMore")} />
        </div>
      </div>
    </div>
  )
};