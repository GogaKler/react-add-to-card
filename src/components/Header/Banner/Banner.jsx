import { ArrowLeft, ArrowRight } from "../../common/Icons/Icons";
import '../../../css/Header/Banner.css'

const Banner = (props) => {
	return (
		<div className="banner">
			<div className="banner__wrapper">
				<ArrowLeft sColor='#D0D5DD'/>
				<div className="banner__desc-wrapper">
					<div className="banner__desc">Refer a friend and get $10 off!&nbsp;🔥&nbsp;</div>
					<div className="banner__desc">Offer ends February 27!</div>
				</div>
				<ArrowRight sColor='#fff'/>
			</div>
		</div>
	);
}

export default Banner;