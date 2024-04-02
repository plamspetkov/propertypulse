import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import InfoBoxes from '@/components/InfoBoxes';
import connectDB from '@/config/databse';
import Link from 'next/link';
import React from 'react';

// export const metadata = {
// 	title: 'Test',
// };
const HomePage = () => {
	return (
		<div>
			<Hero />
			<InfoBoxes />
			<HomeProperties />
		</div>
	);
};

export default HomePage;
