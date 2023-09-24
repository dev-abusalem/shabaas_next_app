import connectDB from "../../server/db/connectDB";
import OnboardForm from "../../server/models/Onboard"; // Adjust the path as needed

export default async function handler(req, res) {
  try {
    await connectDB(); // Call the connectDB function to establish the database connection

    if (req.method === "POST") {
      const newOnboard = new OnboardForm(req.body);
      await newOnboard.save();

      res.status(200).json("Onboard form created successfully");
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
