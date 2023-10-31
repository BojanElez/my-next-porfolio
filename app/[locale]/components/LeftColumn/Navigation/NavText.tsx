import { useTranslations } from 'next-intl';

interface INavTextProps {
	text: string;
}

export const NavText = ({ text }: INavTextProps) => {
  // dconst t = useTranslations('Index');

  return (
    <>{text}</>
  )
};