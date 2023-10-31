import {useTranslations} from 'next-intl';
import profile from './../../../profile.png';
import Image from 'next/image';
import { Subtitle } from '../../common/Subtitle';

export const Info = () => {
  const t = useTranslations('Index');

  return (
    <section className="pl-2">
      <div className="flex items-center">
        <h1 className="pb-4 pt-4 text-4xl">Bojan Elez</h1>
        <Image src={profile} width={55} height={55} alt="profile" className="ml-auto my-7 rounded-full" />
      </div>
        <Subtitle tag="h2">Full Stack Developer at Vega</Subtitle>
        <p className="text-sky-400">
          {t("infoText")}
        </p>
    </section>
  )
};