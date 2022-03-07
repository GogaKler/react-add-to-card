import { Cart, Geo, Logo, SearchIcon, User } from "../../common/Icons/Icons";
import '../../../css/Header/MiddleHeader.css'
import { Container } from "../../../styled-components/Global";

const MiddleHeader = (props) => {
	return (
		<div className="middleHeader">
			<Container>
				<div className="middleHeader__row">
					<div className="geo">
						<Geo />
						<div className="geo__desc">Dublin, Republic of Ireland</div>
					</div>
					<Logo />
					<div className="middleHeader__icons-wrapper">
						<SearchIcon />
						<User />
						<Cart />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default MiddleHeader;