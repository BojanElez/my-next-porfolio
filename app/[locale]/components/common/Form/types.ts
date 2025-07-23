export interface IContactFormProps {
  firstName: string,
  firstNameError: string,
  lastName: string,
  lastNameError: string,
  message: string,
  messageError: string,
  subject: string,
  subjectError: string,
  emailError: string,
  send: string,
}

export interface IContactForm  {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
  subject: string,
}