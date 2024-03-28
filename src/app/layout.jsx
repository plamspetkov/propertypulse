import '@/assets/styles/global.css';

export const metadata = {
	title: 'PropertyPulse | Find The Perfect Rental',
	description: 'Find your perfect rental property',
	keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
	return (
		<html land="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
};

export default MainLayout;
