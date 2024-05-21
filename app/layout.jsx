import '../assets/styles/global.css';
import AuthProvider from '../components/AuthProvider';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';

export const metadata = {
	title: 'PropertyPulse | Find The Perfect Rental',
	description: 'Find your perfect rental property',
	keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
	return (
		<html land="en">
			<AuthProvider>
				<body>
					<Navbar2 />
					<main>{children}</main>
					<Footer />
				</body>
			</AuthProvider>
		</html>
	);
};

export default MainLayout;