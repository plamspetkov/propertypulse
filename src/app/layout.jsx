import '@/assets/styles/global.css';
import AuthProvidedr from '@/components/AuthProvidedr';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'PropertyPulse | Find The Perfect Rental',
	description: 'Find your perfect rental property',
	keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvidedr>
			<html land="en">
				<body>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvidedr>
	);
};

export default MainLayout;
