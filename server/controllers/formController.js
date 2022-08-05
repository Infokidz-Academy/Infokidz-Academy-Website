// Send EmailJS form information
const getFormInfo = (req, res) => {
  res.send({
    SERVICE_ID: process.env.REACT_APP_EmailJS_SERVICE_ID,
    PUBLIC_KEY: process.env.REACT_APP_EmailJS_PUBLIC_KEY,
  });
};

module.exports = {
  getFormInfo,
};
