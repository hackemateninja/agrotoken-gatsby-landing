import React, {FC} from "react";
import {Flex} from "@chakra-ui/react";
import QatarHeroBottom from "@comp/qatar/hero/bottom";
import QatarHeroTop from "@comp/qatar/hero/top";

const QatarHero: FC = () => {
	return(
		<Flex
			background='linear-gradient(159.39deg, #002900 29%, #1D231D 99.62%)'
			flexDir='column'
			alignItems='center'
			gap={{base: '32px', lg: '64px'}}
			alignSelf='stretch'
			w='full'>
			<Flex
				maxW="7xl"
				mx="auto"
				px={{base: "16px", lg: 0}}
				flexDir="column"
				mt={{base: '32px', lg: '64px'}}
				alignItems='center'
				alignSelf='stretch'
				mb={{base: '64px', lg: '96px'}}>
				<QatarHeroTop />
				<QatarHeroBottom />
			</Flex>
		</Flex>
	);
};

export default QatarHero;
