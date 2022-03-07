import { NavLink } from "react-router-dom";
import { Container, FlexContainer } from "../../styled-components/Global";
import { Browse, Cart, Home, SearchIcon, User } from "../common/Icons/Icons";
import '../../css/DownMenu/DownMenu.css'


const DownMenu = (props) => {
	return ( 
		<div className="downMenu">
				<Container>
					<FlexContainer align='center' justify='space-around'>
						<li className="downMenu__item"><NavLink to="/Home" className="downMenu__link">
							<FlexContainer direction='column' align='center'>
								<Home />
								<p>Home</p>
							</FlexContainer>
						</NavLink></li>
						<li className="downMenu__item"><NavLink to="/Browse" className="downMenu__link">
							<FlexContainer direction='column' align='center'>
								<Browse />
								<p>Browse</p>
							</FlexContainer>
						</NavLink></li>
						<li className="downMenu__item"><NavLink to="/Search" className="downMenu__link">
							<FlexContainer direction='column' align='center'>
								<SearchIcon />
								<p>Search</p>
							</FlexContainer>
						</NavLink></li>
						<li className="downMenu__item"><NavLink to="/User" className="downMenu__link">
							<FlexContainer direction='column' align='center'>
								<User />
								<p>Account</p>
							</FlexContainer>
						</NavLink></li>
						<li className="downMenu__item"><NavLink to="/Cart" className="downMenu__link">
							<FlexContainer direction='column' align='center'>
								<Cart />
								<p>Cart</p>
							</FlexContainer>
						</NavLink></li>
					</FlexContainer>
				</Container>
			</div>
	);
}
 
export default DownMenu;