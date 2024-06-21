const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch ALL PROPETRIES
async function fetchProperties({showFeatured = false} = {}) {
	try {
		// Hndle the case where the domain is not available yet
		if (!apiDomain) {
			return [];
		}
		const res = await fetch(`${apiDomain}/properties${showFeatured ? '/featured' : ''}`, {cache: 'no-store'});
		console.log('Raw data: ',res)

		if (!res) {
			throw new Error('Failed to fetch data!');
		}

		return res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
}
// Fetch SINGLE PROPETRIES
async function fetchProperty(id) {
	try {
		// Handle the case where the domain is not available yet
		if (!apiDomain) {
			return null;
		}
		const res = await fetch(`${apiDomain}/properties/${id}`);

		if (!res) {
			throw new Error('Failed to fetch data!');
		}

		return res.json();
	} catch (error) {
		console.log(error);
		return null;
	}
}

export { fetchProperties, fetchProperty };
