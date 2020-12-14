import mail from "@sendgrid/mail";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";


mail.setApiKey(process.env.SENDGRID_API_KEY);
dayjs.extend(LocalizedFormat)

export default async (req, res) => {
    if (req.method === "POST") {
      try {
        const { email, name, amount } = req.body;
        const msg = {
            to: email,
            from: 'donotreply@enidshouse.org',
            templateId: 'd-509fe5870c34485e9a955fe6fb778bc0',
            dynamicTemplateData: {
              name, amount, date: dayjs().format('LLLL')
            },
          };
          console.debug(msg)
          mail.send(msg);
          res.status(200).send(msg);
        
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  };