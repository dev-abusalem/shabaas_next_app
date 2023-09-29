function generateEmailTemplate(otpValue) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>OTP Verification</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4;">
          <div style="text-align: center;">
            <h1>This is your OTP 👇</h1>
          </div>
              <div style="background-color: #f2f2f2; border: 1px solid #ddd; padding: 10px; text-align: center; font-size: 24px; font-weight: bold; color: #333;">
                  ${otpValue}
              </div>
              <!-- ... Rest of your HTML template ... -->
          </table>
      </body>
      </html>
    `;
}

module.exports = generateEmailTemplate;
