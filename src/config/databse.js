import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
	// This ensure that only the fields specified int he schema are saved in the DB
	mongoose.set('strictQuery', true);

	// If the DB is already connected, don't connect again
	if (connected) {
		console.log('MongoDB is already connected');
		return;
	}

	// Connect to MongoDB
	try {
		await mongoose.connect(process.env.MONGODB_URL);
		connected = true;
		console.log('MongoDB connected');
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;
