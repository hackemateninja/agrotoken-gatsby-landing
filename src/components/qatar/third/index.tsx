// packages
import React from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	List,
	ListIcon,
	ListItem,
	Text,
	Link
} from "@chakra-ui/react";

//svg
import CheckList from "@svg/checklist.svg";
import {useIntl} from "gatsby-plugin-react-intl";

const QatarThirdSection = () => {

	const intl = useIntl();

	const link = `https://platform.agrotoken.io?utm_source=agrotoken&utm_medium=web&utm_campaign=visa&utm_content=catar2022`

	return(
		<Flex
			maxW='7xl'
			mx='auto'
			px={{base: 4, lg: 0}}
			mt={{base: '64px', lg: '48px'}}
			alignItems='center'
			height={{base: 'auto', lg: '600px'}}
			justifyContent='flex-start'
			flexDir={{base: 'column', lg: 'row'}}>
			<Flex flexDir='column' maxW='592px' alignItems={{base: 'center', lg: 'flex-start'}}>
				<Heading fontWeight={500} textAlign={{base: 'center', lg: 'left'}} mb={{base: '26px', lg: '42px'}}>
					{intl.formatMessage({id: 'qatar.3secTitle'})}
				</Heading>
				<List spacing={5} color="gray.700" fontSize='18px' lineHeight='28px'>
					<ListItem alignItems="flex-start" display="flex">
						<ListIcon fontSize={25} as={CheckList} />
						<Text>{intl.formatMessage({id: 'qatar.3secItem1'})}</Text>
					</ListItem>
					<ListItem alignItems="flex-start" display="flex">
						<ListIcon fontSize={25} as={CheckList} />
						<Text>{intl.formatMessage({id: 'qatar.3secItem2'})}</Text>
					</ListItem>
				</List>
				<Button
					as={Link}
					href={link}
					target='_blank'
					boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05)'
					variant="primary"
					mt='32px'
					mb={{base: '32px', lg: 0}}
					height="48px"
					py="12px"
					px="20px"
					_hover={{
						color: 'white',
						backgroundColor: 'primary.700'
					}}>
					{intl.formatMessage({id: 'qatar.3secButton'})}
				</Button>
			</Flex>
			<Box
				mb={{base: '64px', lg:'95px'}}
				mr={{base: '-16px'}}
				position={{base:'relative', lg:'absolute'}}
				right={0}>
				<Image
					src='/images/platform.png'
					alt='agrotoken arg'
				/>
			</Box>
		</Flex>

	);
};

export default QatarThirdSection;
