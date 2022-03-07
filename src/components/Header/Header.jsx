import { HeaderEl } from "../../styled-components/Global";
import Banner from "./Banner/Banner";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import Navigation from "./Navigation.jsx/Navigation";


const Header = (props) => {
	return (
		<HeaderEl>
			<Banner />
			<MiddleHeader />
			<Navigation />
		</HeaderEl>
	);
}

export default Header;