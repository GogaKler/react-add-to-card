import { Container, Description, FlexContainer, Title } from "../../../styled-components/Global";
import { Dot, MinusCircle, PlusCircle } from "../../common/Icons/Icons";

const FAQ = (props) => {
	return (
		<div className="FAQ">
			<Container>
				<div className="FAQ_header">
					<FlexContainer direction='column' align='center'>
						<Title fontWeight='600' sFontSize='32px' lineH='38px' margin='0 0 20px 0'>Frequently asked questions</Title>
						<Description sColor='var(--content500)'>Everything you need to know about the games.</Description>
					</FlexContainer>
				</div>

				<div className="FAQ__body">
					<div className="FAQ__item">
						<FlexContainer justify='space-between' align='center'>
							<Title padding='22px 0' >How does work?</Title>
							<PlusCircle sColor='#7F56D9' />
						</FlexContainer>
					</div>
					<div className="FAQ__item">
						<FlexContainer justify='space-between' align='center'>
							<Title padding='22px 0' >What is a game?</Title>
							<MinusCircle sColor='#7F56D9' />
						</FlexContainer>
						<div className="FAQ__item--body">
							<Description sColor='var(--content500)' margin='0 0 20px 0'>
								A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a
								joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device,
								such as a TV set, monitor, touchscreen, or virtual reality headset. A video game or computer game is an electronic game that involves
								interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual
								feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset.
							</Description>
							<ul className="listMenu">
								<li className="listMenu__item">
									<FlexContainer align='center'><Dot sColor='#7F56D9' />
										<Description margin='0 0 0 8px' sColor='var(--content500)'>motion sensing device,</Description>
									</FlexContainer>
								</li>
								<li className="listMenu__item">
									<FlexContainer align='center'><Dot sColor='#7F56D9' />
										<Description margin='0 0 0 8px' sColor='var(--content500)'>controller,</Description>
									</FlexContainer>
								</li>
								<li className="listMenu__item">
									<FlexContainer align='center'><Dot sColor='#7F56D9' />
										<Description margin='0 0 0 8px' sColor='var(--content500)'>keyboard,</Description>
									</FlexContainer>
								</li>
								<li className="listMenu__item">
									<FlexContainer align='center'><Dot sColor='#7F56D9' />
										<Description margin='0 0 0 8px' sColor='var(--content500)'>joystick.</Description>
									</FlexContainer>
								</li>
							</ul>
							<div className="FAQ__sub-body">
								<Title sFontSize='16px' margin='0 0 16px 0'>Visual feedback.</Title>
								<Description sColor='var(--content500)' margin='0 0 20px 0'>A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a 
									joystick, controller, keyboard, or motion sensing device – to generate visual feedback.</Description>
							</div>
							
						</div>
					</div>
					<div className="FAQ__item">
						<FlexContainer justify='space-between' align='center'>
							<Title padding='22px 0' >Is there a free trial available?</Title>
							<PlusCircle sColor='#7F56D9' />
						</FlexContainer>
					</div>
					<div className="FAQ__item">
						<FlexContainer justify='space-between' align='center'>
							<Title padding='22px 0' >How does billing work?</Title>
							<PlusCircle sColor='#7F56D9' />
						</FlexContainer>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default FAQ;