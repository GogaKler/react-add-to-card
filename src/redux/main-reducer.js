import SaintsRowImage from '../assets/cardImages/SaintsRow.svg'
import PaladinsImage from '../assets/cardImages/Paladins.svg'
import FarCry6Image from '../assets/cardImages/FarCry6.svg'
import CallOfDutyWarzoneImage from '../assets/cardImages/CallOfDutyWarzone.svg'
import WorldOfWarcraftShadowlandsImage from '../assets/cardImages/WorldOfWarcraftShadowlands.svg'
import FortniteImage from '../assets/cardImages/Fortnite.svg'
import HorizonForbiddenWestImage from '../assets/cardImages/HorizonForbiddenWest.svg'
import NeedForSpeedHeatImage from '../assets/cardImages/NeedForSpeedHeat.svg'
import SpiderManMilesMoralesImage from '../assets/cardImages/SpiderManMilesMorales.svg'
import Witcher3WildHuntImage from '../assets/cardImages/Witcher3WildHunt.svg'
import GuardiansOfTheGalaxyImage from '../assets/cardImages/GuardiansOfTheGalaxy.svg'
import CrashTeamRacingImage from '../assets/cardImages/CrashTeamRacing.svg'
import SpiderManImage from '../assets/cardImages/SpiderMan.svg'
import NoneImage from '../assets/cardImages/None.svg'

const ADD_CARD = 'ADD_CARD'

let initalState = {
	cards:[
					{id: 1, image: SaintsRowImage, type:'Action RPG', colorType:'blue', title:'Saints Row', rating:'0', desc:'Platinum Edition', price: 649, discountBool: true, discount: '-50%'},
					{id: 2, image: PaladinsImage, type:'Multiplayer RPG', colorType:'red', title:'Paladins', rating:'1,820', desc:'Get the Captain Price Operator included with purchase', price:'Free', discountBool: false, discount: ''},
					{id: 3, image: FarCry6Image, type:'Action', colorType:'orange', title:'Far Cry 6', rating:'2,888', desc:'In-Game Content', price: 649, discountBool: true, discount: '-50%'},
					{id: 4, image: CallOfDutyWarzoneImage, type:'Shooter', colorType:'primary', title:'Call of Duty: Warzone', rating:'18,982', desc:'Get the Captain Price Operator included with purchase', price: 649, discountBool: true, discount: '-50%'},
					{id: 5, image: WorldOfWarcraftShadowlandsImage, type:'Action', colorType:'orange', title:'World of Warcraft: Shadowlands', rating:'299', desc:'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!', price:'Free', discountBool: false, discount: '-50%'},
					{id: 6, image: FortniteImage, type:'Shooter', colorType:'primary', title:'Fortnite', rating:'9,199', desc:'Get the Captain Price Operator included with purchase', price: 649, discountBool: true, discount: '-50%'},
					{id: 7, image: HorizonForbiddenWestImage, type:'Action RPG', colorType:'blue', title:'Horizon: Forbidden West', rating:'9,199', desc:'Platinum Edition', price: 649, discountBool: true, discount: '-50%'},
					{id: 8, image: NeedForSpeedHeatImage, type:'Action', colorType:'orange', title:'Need for Speed: Heat', rating:'2,911', desc:'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!', price:'$' + 649, discountBool: false, discount: '-50%'},
					{id: 9, image: SpiderManMilesMoralesImage, type:'Action', colorType:'orange', title:'Spider-Man: Miles Morales', rating:'920', desc:'Get the Captain Price Operator included with purchase', price:'649', discountBool: true, discount: '-50%'},
					{id: 10, image: Witcher3WildHuntImage, type:'Card Game', colorType:'green', title:'Witcher 3: Wild Hunt', rating:'299,890', desc:'Will only be usable in the new Classic Format when it is released', price: 649, discountBool: true, discount: '-50%'},
					{id: 11, image: GuardiansOfTheGalaxyImage, type:'Shooter', colorType:'primary', title:'Guardians of the Galaxy', rating:'29', desc:'In-Game Content', price: 649, discountBool: true, discount: '-50%'},
					{id: 12, image: CrashTeamRacingImage, type:'Shooter', colorType:'primary', title:'Crash Team Racing', rating:'9,199', desc:'Get the Captain Price Operator included with purchase', price: 649, discountBool: true, discount: '-50%'},
					{id: 13, image: SpiderManImage, type:'Multiplayer RPG', colorType:'red', title:'Spider-Man', rating:'9,199', desc:'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!', price:'$' + 649, discountBool: false, discount: ''},
					{id: 14, image: NoneImage, type:'Action RPG', colorType:'blue', title:'Dragon Age 5', rating:'0', desc:'Non released', price:'---', discountBool: false, discount: '-50%'},
				],
	tagCategories: [	
		{id: 2, name:'+5'},
	],
	tagGroup: [
		{id: 1, name:'Strategy'},
		{id: 2, name:'RPG'},
		{id: 3, name:'Action'},
		{id: 4, name:'Shooter'},
		{id: 5, name:'Clear'},
	],
	cardImage: NoneImage,
	cardType: 'server API',
	cardTitle: 'Not a Game',
	cardRating: '0',
	cardDesc: 'Вы можете полностью поменять содержимое этой карточки. Остается только захотеть)',
	cardPrice: '$' + 1,
	CardColorType:'blue',
	cardDiscountBool: false,
	cardDiscount: ''
}


const MainReducer = (state = initalState, action) => {
	switch (action.type) {
		case ADD_CARD:{
			return {
				...state, 
				cards: [{id: 15, image: state.cardImage, type: state.cardType, colorType: state.CardColorType ,title: state.cardTitle, rating: state.cardRating, desc: state.cardDesc, price: state.cardPrice, discountBool:state.cardDiscountBool, discount: state.cardDiscount }, 
				...state.cards,], 
			}
		}
		default: 
			return state
	}
}

export const addCard = () => ({type: ADD_CARD})

export default MainReducer;