import requestIp from "request-ip";

export default async function handler(req, res) {
  try {
    const clientIp = requestIp.getClientIp(req);

    if (clientIp) {
      res.status(200).json({ ip: clientIp });
      console.log(clientIp);
    } else {
      res.status(500).json({ error: "Unable to retrieve IP address" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
