import { Container, FlexContainer, Title } from "../../../styled-components/Global";
import { ArrowLeft, ArrowRight } from "../../common/Icons/Icons";


const Pagination = (props) => {
	return (
		<div className="pagination">
			<Container>
				<div className="pagination__content">
					<div className="pagination__container">
						<FlexContainer align='center' justify='center'>
							<ArrowLeft />
							<span className="pagination__active">1</span>
							<span>2</span>
							<span>3</span>
							<span>4</span>
							<p>...</p>
							<span>99</span>
							<ArrowRight />
						</FlexContainer>
					</div>
				</div>
				<div className="pagination__showMore">
						<Title sFontSize='16px' fontWeight='500' lineH='24px' padding='10px 0' align='center'>Show More</Title>	
				</div>
			</Container>
		</div>
	);
}

export default Pagination;