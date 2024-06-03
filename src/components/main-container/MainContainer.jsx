import { v4 } from 'uuid';
import {
	StyledCard,
	StyledHeader,
	StyledImage,
	StyledMainContainer,
	StyledName,
	StyledStatus,
	StyledText,
	StyledTitle
} from './styles';
import { DATA } from '../../constants/data';

const MainContainer = () => {
	return (
		<>
			<StyledMainContainer>
				{DATA.map(user => {
					return (
						<StyledCard
							key={v4()}
							$background={user.bgColor}
							$text={user.textColor}
							$height={user.height}
							$grid={user.grid}
						>
							<StyledHeader>
								<StyledImage
									src={user.img}
									alt={user.name}
									$border={user.border}
								/>
								<div>
									<StyledName>{user.name}</StyledName>
									<StyledStatus>Verified Graduate</StyledStatus>
								</div>
							</StyledHeader>
							<StyledTitle>{user.title}</StyledTitle>
							<StyledText>{user.text}</StyledText>
						</StyledCard>
					);
				})}
			</StyledMainContainer>
		</>
	);
};

export default MainContainer;
