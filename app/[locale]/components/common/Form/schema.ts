import * as yup from "yup";

export const schema = (t: any) => yup.object({
  firstName: yup.string().required(t("firstNameRequired")),
  lastName: yup.string().required(t("lastNameRequired")),
  email: yup.string().required(t("emailRequired")),
  subject: yup.string().required(t("subjectRequired")),
  message: yup.string().required(t("messageRequired")),
}).required();