import { Container, Title } from "../../styled-components/Global";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import ListingBanner from "./ListingBanner/ListingBanner";
import FiltersContainer from "./Filters/FiltersContainer";
import TagGroupContainer from "./TagGroup/TagGroupContainer";
import ListContainer from "./List/ListContainer";
import Pagination from "./Pagination/Pagination";
import FAQ from "./FAQ/FAQ";
import '../../css/Listing/Breadcrumbs.css'
import '../../css/Listing/ListingBanner.css'
import '../../css/Listing/Filters.css'
import '../../css/Listing/TagGroup.css'
import '../../css/Listing/List.css'
import '../../css/Listing/Pagination.css'
import '../../css/Listing/FAQ.css'
import '../../css/Media/ListingMedia.css'

const Listing = (props) => {
	return (
		<div className="listing">
			<Container>
				<Breadcrumbs />

				<Title sFontSize='52px' margin='32px 0 40px 0' 
					margin1024='20px 0 32px 0'
					fontSize320='28px'  margin320='16px 0 20px 0'
				>Games</Title>

				<ListingBanner />

				<FiltersContainer />

				<TagGroupContainer />

				<ListContainer />

				<Pagination />

				<FAQ />

			</Container>
		</div>

	);
}

export default Listing;