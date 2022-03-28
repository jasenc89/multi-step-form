import connect from "../../utils/database";
import fetch from "node-fetch";

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 350);
  });

const handler = async (req, res) => {
  const { body, method } = req;

  // Extract the formData and captcha code from the request body
  const { formData, captcha } = body;

  if (method === "POST") {
    // If formData or captcha are missing return an error
    if (!formData || !captcha) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const secret = process.env.RECAPTCHA_SECRET_KEY;
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      const captchaValidation = await response.json();
      console.log(captchaValidation);
      console.log(captchaValidation.success);
      /**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
      if (captchaValidation.success) {
        const { db } = await connect();
        const clientData = req.body;
        const result = await db.collection("clients").insertOne({
          client: clientData,
        });
        await sleep();
        // Return 200 if everything is successful
        return res.status(200).send("OK");
      }

      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: "Something went wrong" });
    }
  }
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(405).send("Method not allowed");
};

export default handler;
