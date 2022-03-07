import { Description, FlexContainer, SmallTitle } from "../../../styled-components/Global";
import { ArrowDown, Filter } from "../../common/Icons/Icons";
import { Search } from "../../common/Search/Search";
import TagCat from "./TagCat/TagCat";

const Filters = (props) => {
	let TagsCatElements = props.tagCategories.map(t => <TagCat key={t.id} name={t.name} />)

	return (
		<div className="filters">
			<FlexContainer justify='space-between' align='flex-start' fWrap='wrap'
			direction680='column' align680='center'
			>
				<div className="filters__search-wrapper">
					<SmallTitle>Search for games</SmallTitle>
					<div className="filters__search">
						<Search />
					</div>
				</div>
				<div className="filters__categories">
					<FlexContainer justify='space-between' align='flex-start' fWrap='wrap'
					direction680='column' align680='center'
					>
						<div className="filters__toggle">
							<FlexContainer align='center' justify='center'>
								<Filter />
								<Description sColor="var(--content900)" margin='0 0 0 8px' fontWeight='600'>Filters</Description>
							</FlexContainer>
						</div>
						<div className="categories">
							<SmallTitle>Category</SmallTitle>
							<div className="categories__view">
								<FlexContainer align='center' justify='space-between'>
									<div className="tagsEl-wrapper">
										{TagsCatElements}
									</div>
									<ArrowDown />
								</FlexContainer>
							</div>
						</div>
						<div className="categories">
							<SmallTitle>Sort by</SmallTitle>
							<div className="categories__view">
								<FlexContainer align='center' justify='space-between'>
									<Description fontWeight='600' sColor='var(--content900)' margin='0 8px'>Popular</Description>
									<ArrowDown />
								</FlexContainer>
							</div>
						</div>
					</FlexContainer>
				</div>
			</FlexContainer>
		</div>
	);
}

export default Filters;