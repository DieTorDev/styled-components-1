import styled from 'styled-components';

const StyledMainContainer = styled.main`
	display: grid;
	justify-content: center;
	gap: 1.5rem;
	padding: 1.25rem;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		height: 35.75rem;
		width: 69.375rem;
		margin: auto;
	}
`;

const StyledCard = styled.article`
	width: 20.4375rem;
	padding: 2rem;
	border-radius: 0.625rem;
	font-family: 'Barlow Semi Condensed', sans-serif;
	background-color: ${({ $background }) => $background};
	color: ${({ $text }) => $text};

	@media screen and (max-width: 768px) {
		height: ${({ $height }) => $height};
	}

	@media screen and (min-width: 768px) {
		width: 100%;
		grid-area: ${({ $grid }) => $grid};
	}
`;

const StyledHeader = styled.header`
	height: 1.75rem;
	display: flex;
	align-items: center;
	letter-spacing: 0.75px;
`;

const StyledImage = styled.img`
	width: 1.75rem;
	border-radius: 50%;
	outline: ${({ $border }) => ($border ? '2px solid #a775f1' : 'none')};
	margin-right: 1rem;
`;

const StyledName = styled.h3`
	margin: 0;
	font-size: 0.8125rem;
`;

const StyledStatus = styled.p`
	margin: 0;
	font-size: 0.6875rem;
`;

const StyledTitle = styled.h2`
	font-size: 1.25rem;
	font-weight: 500;
`;

const StyledText = styled.p`
	font-size: 0.8125rem;
	font-weight: 200;
`;

export {
	StyledMainContainer,
	StyledCard,
	StyledHeader,
	StyledImage,
	StyledName,
	StyledStatus,
	StyledTitle,
	StyledText
};
