import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Index');

  return (
    <footer className="pt-3">
      <p className="text-sm text-center	pt-4"> 
        {t("footerText")}.
      </p>
    </footer>
  )
};