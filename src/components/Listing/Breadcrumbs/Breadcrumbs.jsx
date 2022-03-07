import { NavLink } from "react-router-dom";
import { ArrowRight } from "../../common/Icons/Icons";

const Breadcrumbs = (props) => {
	return (
		<div className="breadcrumbs">
			<ul className="breadcrumbs-menu">
				<li className="breadcrumbs-menu__item"><NavLink to='/Home' className="breadcrumbs-menu__link">Home</NavLink></li>
				<li className="breadcrumbs__arrowRight"><ArrowRight sWidth='16' sColor='#D0D5DD'/></li>
				<li className="breadcrumbs-menu__item"><NavLink to='/Discover' className="breadcrumbs-menu__link">Discover</NavLink></li>
				<li className="breadcrumbs__arrowRight"><ArrowRight sWidth='16' sColor='#D0D5DD'/></li>
				<li className="breadcrumbs-menu__item"><NavLink to='/Games' className="breadcrumbs-menu__link">Games</NavLink></li>
			</ul>
		</div>
	);
}

export default Breadcrumbs;