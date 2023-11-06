import { useTranslations } from "next-intl";
import { Form } from "../../common/Form/Form";

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
        firstNameError={t("firstNameRequired")}
        lastName={t("lastName")}
        lastNameError={t("lastNameRequired")}
        message={t("message")}
        messageError={t("messageRequired")}
        send={t("send")}
        subjectError={t("subjectRequired")}
        emailError={t("emailRequired")}
        subject={t("subject")}
      />
    </div>
  )
};