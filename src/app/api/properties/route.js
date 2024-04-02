import connectDB from '@/config/databse';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async (request) => {
	try {
		await connectDB();

		const properties = await Property.find({});

		return new Response.json(properties);
	} catch (error) {
		console.log(error);
		return new Response('Something went wrong', { status: 500 });
	}
};
