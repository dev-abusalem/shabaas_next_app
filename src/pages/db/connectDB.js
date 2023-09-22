import mongoose from 'mongoose';

// const dbUri = process.env.MONGO_URL; // Replace with your actual MongoDB URI
const dbUri = process.env.MONOG_LIVE_URL; // Replace with your actual MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    process.exit(1); // Exit the application if unable to connect
  }
};

export default connectDB;
