const keys = require('../../../config/keys');

const verificationEmail = (permalink, verificationToken, username) => {
  const verificationLink = `${
    keys.frontEndServer
  }/verify/${permalink}/${verificationToken}`;

  return `
    <html>
    <body>
      <table
        style="width:100%; margin: 0 auto; color: #1b1c1d; max-width: 600px; padding-top: 10px;"
        border="0"
        cellpadding="0"
        cellspacing="0"
      >
        <tbody
          style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
        >
          <tr>
            <td>
              <div
                style="background: url('https://ethlounge.com/static/img/logo/logo_symbol.jpg') no-repeat center center; width: 100px; height: 100px; background-size: 80px; background-color: #ef8c0e; border-radius: 50%"
              ></div>
            </td>
          </tr>
          <tr>
            <td>
              <p style="font-size: 30px; font-weight: 900; color: #1b1c1d;">
                Confirm your email address to join ethlounge
              </p>
              <p style="color: #1b1c1d;">
                Hello ${username}! 🙋‍<br/>
                We just need to make sure that this e-mail address belongs to you. Once you click the button below, you will be automatically logged in. You can then deposit crypto and place your bets straight away. 
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 30px">
              <a href="${verificationLink}"
                ><span
                  style="display: inline-block; border-radius: 5px; background: #1b1c1d; color: whitesmoke; font-size: 17px; border-top: 13px solid #1b1c1d; border-bottom: 13px solid #1b1c1d; border-left: 24px solid #1b1c1d; border-right: 24px solid #1b1c1d; cursor: pointer; font-weight: 900"
                  >Confirm Email Address</span
                ></a
              >
            </td>
          </tr>
          <tr>
          <tr>
            <td style="padding-top: 40px">
              <p style="font-weight: bold; color: #1b1c1d;">Never signed up at ethlounge?</p>
              <p style="color: #1b1c1d;">
                Don't worry, probably someone typed in your address by mistake. If
                you ignore or delete this email, nothing further will happen.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 30px; text-align: center">
              <hr
                style="display: block;
              height: 1px;
              border: 0;
              border-top: 1px solid #ccc;
              margin: 1em 0;
              padding: 0;"
              />
  
              <a
                href="https://ethlounge.com"
                style="color: #1b1c1d; text-decoration: none"
                >ethlounge.com | Cryptocurrency CS:GO Betting Platform</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
    `;
};

module.exports = verificationEmail;
