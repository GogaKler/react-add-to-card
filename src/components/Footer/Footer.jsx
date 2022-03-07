import '../../css/Footer/Footer.css'
import { Button, Container, Description, FlexContainer, Title } from '../../styled-components/Global';

const Footer = (props) => {
	return (
		<div className='footer'>
			<Container>
				<div className="footer__content">
					<div className="footer__head">
						<FlexContainer align='center' justify='space-between' 
							direction768='column' 
						>
							<div className="footer__left-column">
								<Title sColor='#fff' margin='0 0 4px 0'>Join our newsletter</Title>
								<Description sColor='var(--content400)'>We’ll send you a nice letter one per week. No spam.</Description>
							</div>
							<div className="footer__right-column">
								<FlexContainer align='center'
									direction320='column'
								>
									<div className="footer__search search">
										<FlexContainer>
											<input type="search" placeholder="Enter Email" />
										</FlexContainer>
									</div>
									<Button primary padding='10px 18px' sFontSize='16px'
										sWidth320='100%'
									>Subsribe</Button>
								</FlexContainer>
							</div>
						</FlexContainer>
					</div>
					<div className="footer__body">
						<FlexContainer fWrap='wrap'
							direction320='column'
						>
							<ul className='footer__list'>
								<Title sFontSize='14px' sColor='var(--content400)' lineH='20px' margin='0 0 20px 0'>Categories</Title>
								<li className='footer__list-item'>Strategy</li>
								<li className='footer__list-item'>Action</li>
								<li className='footer__list-item'>Shooter</li>
								<li className='footer__list-item'>Card Game</li>
								<li className='footer__list-item'>Simulator</li>
								<li className='footer__list-item'>RPG</li>
								<li className='footer__list-item'>Multiplayer</li>
							</ul>
							<ul className='footer__list'>
								<Title sFontSize='14px' sColor='var(--content400)' lineH='20px' margin='0 0 20px 0'>Company</Title>
								<li className='footer__list-item'>About us</li>
								<li className='footer__list-item'>Careers</li>
								<li className='footer__list-item'>Press</li>
								<li className='footer__list-item'>News</li>
								<li className='footer__list-item'>Contact</li>
							</ul>
							<ul className='footer__list'>
								<Title sFontSize='14px' sColor='var(--content400)' lineH='20px' margin='0 0 20px 0'>Legal</Title>
								<li className='footer__list-item'>Terms</li>
								<li className='footer__list-item'>Privacy</li>
								<li className='footer__list-item'>Cookies</li>
								<li className='footer__list-item'>Licenses</li>
								<li className='footer__list-item'>Settings</li>
							</ul>
							<ul className='footer__list'>
								<Title sFontSize='14px' sColor='var(--content400)' lineH='20px' margin='0 0 20px 0'>Legal</Title>
								<li className='footer__list-item'>Twitter</li>
								<li className='footer__list-item'>Facebook</li>
								<li className='footer__list-item'>Dribbble</li>
								<li className='footer__list-item'>GitHub</li>
							</ul>
						</FlexContainer>
					</div>
					<div className="footer__foot">
						<Description sColor='var(--content500)' padding='0 0 32px 0'>Copyright © GameVendor, 2022</Description>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Footer;