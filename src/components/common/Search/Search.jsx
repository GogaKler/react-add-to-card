import { FlexContainer } from "../../../styled-components/Global"
import { SearchIcon } from "../Icons/Icons"
import './Search.css'

export const Search = () => {
	return (
		<div className="search">
			<FlexContainer>
				<SearchIcon sWidth='18'/>
				<input type="search" placeholder="Search.." />
			</FlexContainer>
		</div>
	)
}