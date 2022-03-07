import { Button, FlexContainer } from "../../../../styled-components/Global";
import { CrossX } from "../../../common/Icons/Icons";



const TagCat = (props) => {
	return (
			<Button primaryTag padding='2px 8px' sFontSize='12px' margin='0 4px 2px 4px' borderRadius='4px'>
				<FlexContainer align='center' justyfy='space-between'>
					{props.name}
					<CrossX sWidth={12} />
				</FlexContainer>
			</Button>
	);
}

export default TagCat;
