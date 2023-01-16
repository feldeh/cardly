const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SG_API_KEY);
async function sendEmail(req, res) {
  try {
    await sgMail.send({
      to: 'felicien.dehertogh@gmail.com',
      from: 'immersy.info@gmail.com',
      subject: 'Une personne vous contacte avec les informations suivantes',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px; font-size: 16px;">
              <h2>Vous avez recu un e-mail de la part de :</h2>
              <p style="color:blue; "> ${req.body.firstName} <span>  ${req.body.lastName}</span></p>
              <h2>  Voici mon E-mail :  </h2>
              <p style="color:blue;">✉️ ${req.body.email}</p>
              
              <br>

              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
