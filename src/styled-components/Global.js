import styled, { createGlobalStyle, css } from 'styled-components'

const fontFace = (name, src, fontWeight = 'normal', fontStyle = 'normal') => {
	return `
	@font-face{
		font-family: "${name}";
		src: url(${require('../assets/Fonts/InterFont/' + src + '.ttf')}) format("truetype"),

		font-style: ${fontStyle};
		font-weight: ${fontWeight};
	}`;
}

export const Global = createGlobalStyle`
 ${fontFace('Inter', 'Inter-Thin', 100, 'normal')}
 ${fontFace('Inter', 'Inter-ExtraLight', 200, 'normal')}
 ${fontFace('Inter', 'Inter-Light', 300, 'normal')}
 ${fontFace('Inter', 'Inter-Regular', 'normal', 'normal')}
 ${fontFace('Inter', 'Inter-Medium', 500, 'normal')}
 ${fontFace('Inter', 'Inter-SemiBold', 600, 'normal')}
 ${fontFace('Inter', 'Inter-Bold', 700, 'normal')}
 ${fontFace('Inter', 'Inter-ExtraBold', 800, 'normal')}
 ${fontFace('Inter', 'Inter-Black', 900, 'normal')}

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
} 
html{
	overflow-x: hidden;
}
body{
	overflow-x: hidden ;
	color: black;
	font-family: 'Inter', sans-serif;
	font-size: 16px;
	font-weight: normal;
	background-color: var(--content50);
}
li{
	list-style-type: none;
}
a{
	text-decoration: none;
	color: var(--accent-color);
}
`
export const HeaderEl = styled.div`
	padding-top: 8px;
	margin-bottom: 40px;
	background-color: white;
`
export const Container = styled.div`
	width: 100%;
	max-width: 1216px;
	margin: 0 auto;
	padding: 0 1rem;
`
export const FlexContainer = styled.div`
	display: flex;
	align-items:  ${({align}) => align || 'stretch'};
	justify-content: ${({justify}) => justify || 'stretch'};
	flex-direction: ${({direction}) => direction || 'row'};
	flex-wrap: ${({fWrap}) => fWrap || ''};
	width: ${({sWidth}) => sWidth || ''};
	height: ${({sHeight}) => sHeight || ''};
	flex: ${({sFlex}) => sFlex || ''};
	margin: ${({margin}) => margin || 0 };
	background-color: ${({BG}) => BG || '' };
	z-index: ${({index}) => index || ''};

	@media screen and (max-width: 1024px) {
		align-items:  ${({align1024}) => align1024 || ''};
		justify-content: ${({justify1024}) => justify1024 || ''};
		flex-direction: ${({direction1024}) => direction1024 || ''};
		flex-wrap: ${({fWrap1024}) => fWrap1024 || ''};
		width: ${({sWidth1024}) => sWidth1024 || ''};
		margin: ${({margin1024}) => margin1024 || '' };
	}	
	@media screen and (max-width: 768px) {
		align-items:  ${({align768}) => align768 || ''};
		justify-content: ${({justify768}) => justify768 || ''};
		flex-direction: ${({direction768}) => direction768 || ''};
		flex-wrap: ${({fWrap768}) => fWrap768 || ''};
		width: ${({sWidth768}) => sWidth768 || ''};
		margin: ${({margin768}) => margin768 || '' };
	}	
	@media screen and (max-width: 680px) {
		align-items:  ${({align680}) => align680 || ''};
		justify-content: ${({justify680}) => justify680 || ''};
		flex-direction: ${({direction680}) => direction680 || ''};
		flex-wrap: ${({fWrap680}) => fWrap680 || ''};
		width: ${({sWidth680}) => sWidth680 || ''};
		margin: ${({margin680}) => margin680 || '' };
	}
	@media screen and (max-width: 320px) {
		align-items:  ${({align320}) => align320 || ''};
		justify-content: ${({justify320}) => justify320 || ''};
		flex-direction: ${({direction320}) => direction320 || ''};
		flex-wrap: ${({fWrap320}) => fWrap320 || ''};
		width: ${({sWidth320}) => sWidth320 || ''};
		margin: ${({margin320}) => margin320 || '' };
	}



`;
export const Title = styled.div`
	color: ${({sColor}) => sColor || 'var(--content900)'} ;
	font-weight: ${({fontWeight}) => fontWeight || 600};
	font-size: ${({sFontSize}) => sFontSize || '18px'};
	text-align: ${({align}) => align || ''} ;
	margin: ${({margin}) => margin || 0};
	padding: ${({padding}) => padding || 0 };
	position: ${({position}) => position || 'static'};
	line-height: ${({lineH}) => lineH || ''};

	@media screen and (max-width: 1024px){
		font-size: ${({fontSize1024}) => fontSize1024 || ''};	
		margin: ${({margin1024}) => margin1024 || ''};
	}
	@media screen and (max-width: 768px){
		font-size: ${({fontSize768}) => fontSize768 || ''};	
		margin: ${({margin768}) => margin768 || ''};
	}
	@media screen and (max-width: 680px){
		font-size: ${({fontSize680}) => fontSize680 || ''};	
		margin: ${({margin680}) => margin680 || ''};
	}
	@media screen and (max-width: 320px){
		font-size: ${({fontSize320}) => fontSize320 || ''};	
		margin: ${({margin320}) => margin320 || ''};
	}
`;
export const SmallTitle = styled(Title)`
	color: ${({sColor}) => sColor || 'var(--content500)'} ;
	font-weight: ${({fontWeight}) => fontWeight || 500};
	font-size: ${({sFontSize}) => sFontSize || '14px'};
	line-height: ${({lineH}) => lineH || '24px'};
	margin: ${({margin}) => margin || 0};
	position: ${({position}) => position || 'static'};

	@media screen and (max-width: 1024px){
		font-size: ${({fontSize1024}) => fontSize1024 || ''};	
		margin: ${({margin1024}) => margin1024 || ''};
	}
	@media screen and (max-width: 768px){
		font-size: ${({fontSize768}) => fontSize768 || ''};	
		margin: ${({margin768}) => margin768 || ''};
	}
	@media screen and (max-width: 320px){
		font-size: ${({fontSize320}) => fontSize320 || ''};	
		margin: ${({margin320}) => margin320 || ''};
	}
`;
export const Description = styled.div`
	color: ${({sColor}) => sColor || 'white'};
	font-size: ${({fontSize}) => fontSize || ''};
	font-weight: ${({fontWeight}) => fontWeight || ''};
	line-height: ${({lineH}) => lineH || '24px'};
	text-align: ${({align}) => align || ''};
	margin: ${({margin}) => margin || 0};
	padding: ${({padding}) => padding || 0};
	flex: ${({flex}) => flex || ''}
`;
export const Button = styled.button`
	border: ${({border}) => border || 0 };
	border-radius: ${({borderRadius}) => borderRadius || '8px'};
	padding: ${({padding}) => padding || '10px 18px'};
	font-size: ${({sFontSize}) => sFontSize || '18px'};
	font-weight: ${({fontWeight}) => fontWeight || ''};
	margin: ${({margin}) => margin || 0 };
	width: ${({sWidth}) => sWidth || ''};
	cursor: pointer;
	align-self: ${({alignSelf}) => alignSelf || ''};
		&:focus{
			outline: none;
		}
	
	@media screen and (max-width: 680px) {
		width: ${({sWidth680}) => sWidth680 || ''};
		margin: ${({margin680}) => margin680 || '' };
	}
	@media screen and (max-width: 320px) {
		width: ${({sWidth320}) => sWidth320 || ''};
		margin: ${({margin320}) => margin320 || '' };
	}

	${({white}) => white && css`
		color: ${({sColor}) => sColor || 'var(--content900)'};
		background: ${({background}) => background || 'white'};
	`}
	${({primary}) => primary && css`
		color: ${({sColor}) => sColor || 'white'};
		background: ${({background}) => background || 'var(--primary600)'};
	`}
	${({primaryTag}) => primaryTag && css`
		color: ${({sColor}) => sColor || 'var(--primary600)'};
		background: ${({background}) => background || 'var(--primary100)'};
	`}
`;
export const CardType = styled.button`
	border: ${({border}) => border || 0 };
	border-radius: ${({borderRadius}) => borderRadius || '4px'};
	padding: ${({padding}) => padding || '2px 8px'};
	font-size: ${({sFontSize}) => sFontSize || '12px'};
	font-weight: ${({fontWeight}) => fontWeight || ''};
	margin: ${({margin}) => margin || 0 };
	cursor: pointer;
	align-self: ${({alignSelf}) => alignSelf || ''};
		&:focus{
			outline: none;
		}
		& p{
			margin-left: 6px;
		}

	${({color}) => color === 'blue' && css`
		color: ${({sColor}) => sColor || 'var(--blue600)'};
		background: ${({background}) => background || 'var(--blue50)'};
	`}
	${({color}) => color === 'red' && css`
		color: ${({sColor}) => sColor || 'var(--red600)'};
		background: ${({background}) => background || 'var(--red50)'};
	`}
	${({color}) => color === 'orange' && css`
		color: ${({sColor}) => sColor || 'var(--orange600)'};
		background: ${({background}) => background || 'var(--orange50)'};
	`}
	${({color}) => color === 'primary' && css`
		color: ${({sColor}) => sColor || 'var(--primary600)'};
		background: ${({background}) => background || 'var(--primary50)'};
	`}
	${({color}) => color === 'green' && css`
		color: ${({sColor}) => sColor || 'var(--green600)'};
		background: ${({background}) => background || 'var(--green50)'};
	`}
`;

