import emailjs from "emailjs-com";


const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";

/**
 * Sends an email using EmailJS.
 * @param {Object} templateParams - Parameters matching your EmailJS template variables.
 * @returns {Promise} - A promise that resolves on success or rejects on failure.
 */
export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log("Email sent successfully:", response.status, response.text);
    return response;
  } catch (error) {
    console.error(" Failed to send email:", error);
    throw error;
  }
};
