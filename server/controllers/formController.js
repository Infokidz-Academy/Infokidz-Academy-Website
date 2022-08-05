// Send EmailJS form information
const getFormInfo = (req, res) => {
  res.send({
    SERVICE_ID: process.env.EmailJS_SERVICE_ID,
    PUBLIC_KEY: process.env.EmailJS_PUBLIC_KEY,
  });
};

// Send EmailJS registration template ID
const getRegistration = (req, res) => {
  res.send(process.env.EmailJS_REGISTRATION_TEMPLATE_ID);
};

module.exports = {
  getFormInfo,
  getRegistration,
};
