import emailjs from "emailjs-com";

const SERVICE_ID = "service_4tw0ymo";
const TEMPLATE_ID = "template_73l9dad";
const USER_ID = "WosHSei2u1z3GiViw";

export const sendEmail = (templateParams) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
};
