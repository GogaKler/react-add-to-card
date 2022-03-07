import { Button, FlexContainer } from "../../../styled-components/Global";
import { CrossX } from "../../common/Icons/Icons";


const TagGroup = (props) => {
	return (
		<div className="tagGroup">
			<FlexContainer fWrap='nowrap'>
				{props.tagGroup.map(t => {
					return (
						<Button primaryTag padding='10px 16px' sFontSize='14px' fontWeight='500' margin='0 4px 2px 4px' borderRadius='4px' >
							<FlexContainer align='center' justyfy='space-between' fWrap='nowrap'>
								<p style={{ marginRight: 8 + 'px' }}>{t.name}</p>
								<CrossX sWidth='18' />
							</FlexContainer>
						</Button>
					)
				})}
			</FlexContainer>
		</div>
	);
}

export default TagGroup;