import connectDB from "../../server/db/connectDB";
import User2 from "../../server/models/User"; // Adjust the path as needed

export default async function handler(req, res) {
  await connectDB(); // Call the connectDB function to establish the database connection

  if (req.method === "POST") {
    try {
      // Example usage: Create a new user
      const newUser = new User2({
        email: req.body.email,
        password: req.body.password,
      });

      await newUser.save();

      res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(500).json("Method Not Allowed");
  }
}
