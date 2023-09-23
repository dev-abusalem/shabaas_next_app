import connectDB from "../../server/db/connectDB";
import User from "../../server/models/User"; // Adjust the path as needed

export default async function handler(req, res) {
  await connectDB(); // Call the connectDB function to establish the database connection

  if (req.method === "POST") {
    try {
      const userEmail = req.body.email;
      const userPass = req.body.password;
      const user = await User.findOne({ email: userEmail });

      if (user) {
        if (userPass === user.password) {
          res.status(200).json("Login successfull");
        } else {
          res.status(404).json("Login failed");
        }
      } else {
        // User not found
        res.status(404).json("User not found");
      }
    } catch (error) {
      res.status(500).json("Server error");
    }
  } else {
    res.status(500).json("Method Not Allowed");
  }
}
