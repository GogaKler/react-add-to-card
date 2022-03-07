import { Button, CardType, Container, Description, FlexContainer, Title } from "../../../styled-components/Global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { PlusCircle, Stars } from "../../common/Icons/Icons";
const List = (props) => {

	let addCardF = () => {
		props.addCard();
	}


	return (
		<div className="list">
			<Container>
				<FlexContainer fWrap='wrap' margin='0 -48px' justify='space-around'>
					<div className="list__addCard-column">
						<div className="list__addCard-item">
							<FlexContainer sHeight='100%' justify='center' align='center' direction='column'>
								<Description sColor='var(--content400)' align='center' margin='0 0 20px 0'>You can add a product card by clicking on the button</Description>
								<Button primary onClick={addCardF}>
									<FlexContainer align='center'>
										<PlusCircle />
										<p className="name-btn">Add Card</p>
									</FlexContainer>
								</Button>
							</FlexContainer>
						</div>
					</div>
					{props.cards.map(c => {
						return (
							<div className="list__column">
								<div className="list__item card">
									<FlexContainer direction='column'>
										<div className="card__image">
											<img src={c.image} alt="" />
										</div>
										<div className="card__body">
											<CardType color={c.colorType} margin='0 0 12px 0'>
												<FlexContainer align='center'>
													<FontAwesomeIcon icon={faCircle} size='2xs' />
													<p>{c.type}</p>
												</FlexContainer>
											</CardType>
											<Title margin='0 0 12px 0'>{c.title}</Title>
											<div className="card__rating">
												<FlexContainer align='center'>
													<Stars />
													<p>{c.rating}</p>
												</FlexContainer>
											</div>
											<Description sColor='var(--content400)' margin='0 0 12px 0'>{c.desc}</Description>
										</div>
										<div className="card__price-wrapper">
											<FlexContainer justify='space-between' align='center'>
												{c.discountBool
													? <>
														<div className="card__price"> <del>${c.price * 2}</del>${c.price}</div>
														<div className="card__discount">{c.discount}</div>
													</>
													: <div className="card__price">{c.price}</div>}
											</FlexContainer>
										</div>
									</FlexContainer>
								</div>
							</div>
						)
					})}
				</FlexContainer>
			</Container>
		</div>
	);
}

export default List;