import { connect } from "react-redux";
import { addCard } from "../../../redux/main-reducer";
import List from "./List";

const mapStateToProps = (state) => {
	return{
		cards: state.main.cards
	}
}

export default connect(mapStateToProps, {addCard})(List);