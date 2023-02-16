// import "../styles/globals.css";
import "../bootstrap/css/index.css";
import "../bootstrap/css/add.css";
import "../bootstrap/fontawesome/css/all.css";
import "../bootstrap/boxicons/css/boxicons.min.css";
import "../bootstrap/css/style.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }) {
	return <>
		<Navbar />
		<Component {...pageProps} />
		<Footer />
	</>;
}

export default MyApp;
