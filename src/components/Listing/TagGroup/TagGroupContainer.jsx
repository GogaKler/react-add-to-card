import { connect } from "react-redux";
import TagGroup from "./TagGroup";



const mapStateToProps = (state) => {
	return{
		tagGroup: state.main.tagGroup,
	}
}


export default connect(mapStateToProps, {})(TagGroup);