
import Header from "./components/Header/Header";
import Listing from "./components/Listing/Listing";
import Footer from "./components/Footer/Footer";
import DownMenu from "./components/DownMenu/DownMenu";
import './css/GlobalColors.css'
import './css/Media/HeaderMedia.css'
import './css/Media/FooterMedia.css'
import './css/Media/DownMenuMedia.css'
import './css/Margins.css'



const App = (props) => {
	return (
		<>
			<Header />
			<Listing />
			<Footer />
			<DownMenu />
		</>
	);
}

export default App;
