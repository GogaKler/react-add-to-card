import { Button, Description, FlexContainer, Title } from "../../../styled-components/Global";
import listingBannerImageSecond from '../../../assets/images/ImageForMainBanner.png'
import BannerImage from '../../../assets/images/Banner.png'

const ListingBanner = (props) => {
	return (
		<div className="listingBanner">
			<FlexContainer justify='space-between' sHeight='100%'
			justify680='center'
			>
				<FlexContainer align='flex-start' direction='column' justify='center' index='2'
				sWidth='300px' margin='0 0 0 72px'
				margin1024='0 0 0 60px'
				sWidth768='270px'
				justify680='space-between' margin680='32px' align680='center'
				>
					<div className="listingBanner__text">
					<Title sFontSize='40px' margin='0 0 20px 0' sColor='#fff'
						fontSize768='32px'
						fontSize320='24px'
					>Refer a friends <br/>and get $10 off!</Title>
					<Description margin='0 0 32px 0'>Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27.</Description>
					
					</div>
				<Button white sWidth680='100%'>Invite a friend</Button>
				</FlexContainer>

				<div className="listingBanner__content-img">
					<img src={listingBannerImageSecond} className='listingBannerImageSecond' alt="" />
				</div>

			</FlexContainer>
		</div>
	);
}

export default ListingBanner;