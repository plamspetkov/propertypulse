import { GlobalProvider } from '@/context/GlobalContext';
import '../assets/styles/global.css';
import AuthProvider from '../components/AuthProvider';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css'
import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'PropertyPulse | Find The Perfect Rental',
	description: 'Find your perfect rental property',
	keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
	return (
		<html land="en">
			<GlobalProvider>

			<AuthProvider>
				<body>
					<Navbar2 />
					{/* <Navbar/> */}
					<main>{children}</main>
					<Footer />
					<ToastContainer/>
				</body>
			</AuthProvider>
			</GlobalProvider>
		</html>
	);
};

export default MainLayout;
