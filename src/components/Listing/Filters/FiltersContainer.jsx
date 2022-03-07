import { connect } from "react-redux";
import Filters from "./Filters";


const mapStateToProps = (state) => {
	return{
		tagCategories: state.main.tagCategories
	}
}


export default connect(mapStateToProps, {})(Filters);