import { NavLink } from "react-router-dom";
import '../../../css/Header/Navigation.css'
import { Container } from "../../../styled-components/Global";

const Navigation = (props) => {
	return ( 
		<div className="header__navigation">
			<Container>
			<ul className="topMenu">
					<li className="topMenu__item"><NavLink to="/Discover" className="topMenu__link">Discover</NavLink></li>
					<li className="topMenu__item"><NavLink to="/Browse" className="topMenu__link">Browse</NavLink></li>
					<li className="topMenu__item"><NavLink to="/Store" className="topMenu__link">Store</NavLink></li>
					<li className="topMenu__item"><NavLink to="/Platforms" className="topMenu__link">Platforms</NavLink></li>
					<li className="topMenu__item"><NavLink to="/Releases" className="topMenu__link">Releases</NavLink></li>
					<li className="topMenu__item"><NavLink to="/Mobile" className="topMenu__link">Mobile</NavLink></li>
					<li className="topMenu__item"><NavLink to="/Articles" className="topMenu__link">Articles</NavLink></li>
					<li className="topMenu__item"><NavLink to="/Blog" className="topMenu__link">Blog</NavLink></li>
					<li className="topMenu__item"><NavLink to="/News" className="topMenu__link">News</NavLink></li>
					<li className="topMenu__item"><NavLink to="/Contacts" className="topMenu__link">Contacts</NavLink></li>
				</ul>
			</Container>
		</div>
	 );
}
 
export default Navigation;