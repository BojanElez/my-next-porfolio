import { useTranslations } from "next-intl";
import { Form } from "../../common/Form";

/**
 * Added additional child component
 * Child component (Child) can receive translation
 * Server component (Server) send translations
 */
export const ContactForm = () => {
  const t = useTranslations('Index');

  return (
    <div className="w-full pt-10">
      <Form 
        firstName={t("firstName")}
        lastName={t("lastName")}
        message={t("message")}
        send={t("send")}
        subject={t("subject")}
      />
    </div>
  )
};