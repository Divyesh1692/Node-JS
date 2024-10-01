const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "divyeshvariya29@gmail.com",
    pass: "gord xwyq jter cakg",
  },
});

const Sendmail = (to, subject, html) => {
  const mailOptions = {
    from: "divyeshvariya29@gmail.com",
    to: to,
    subject,
    html,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = Sendmail;
