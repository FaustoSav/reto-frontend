import emailjs from '@emailjs/browser';

export const sendEmail = async (email) => {
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const templateParams = {
    email,
  };

  const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

  if (result.status !== 200) {
    throw new Error('Failed to send email');
  }
};
