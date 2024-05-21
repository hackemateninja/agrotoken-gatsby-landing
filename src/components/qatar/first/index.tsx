// packages
import React, {FC} from "react";
import {
	Button,
	Flex,
	Heading,
	Image,
	Link,
	List,
	ListIcon,
	ListItem,
	Text,
	useBreakpointValue,
	useDisclosure
} from "@chakra-ui/react";
import {useIntl} from "gatsby-plugin-react-intl";

//svgs
import Exit from "@svg/exit.svg";
import Wallet from "@svg/wallet.svg";
import QatarModal from "@comp/qatar/modal";

const QatarFirstSection: FC = () => {
	const intl = useIntl();

	const device = useBreakpointValue({base: 'sm', lg: 'lg'})

	const { isOpen, onOpen, onClose } = useDisclosure();


	const handleLoginLink = () => {
		const win = window.open(`https://platform.agrotoken.io`, '_blank');
		win?.focus();
	}

	return(
		<>
			<QatarModal isOpen={isOpen} onClose={onClose}/>
			<Flex
				maxW='7xl'
				mx='auto'
				px={{base: 4, lg: 0}}
				mt={{base: '64px', lg: '48px'}}
				alignItems='center'
				justifyContent='space-between'
				flexDir={{base: 'column', lg: 'row'}}>
				<Flex flexDir='column' maxW='698px' alignItems={{base: 'center', lg: 'flex-start'}}>
					<Text textAlign={{base: 'center', lg: 'left'}} color='primary.700' mb='12px'>
						{intl.formatMessage({id: 'qatar.1secName'})}
					</Text>
					<Heading fontWeight={500} textAlign={{base: 'center', lg: 'left'}} mb={{base: '26px', lg: '42px'}}>
						{intl.formatMessage({id: 'qatar.1secTitle'})}
					</Heading>
					<List spacing={5} color="gray.700" fontSize='18px' lineHeight='28px'>
						<ListItem alignItems="flex-start" display="flex">
							<ListIcon fontSize={32} as={Exit} />
							<Text>{intl.formatMessage({id: 'qatar.1secItem1'})}</Text>
						</ListItem>
						<ListItem alignItems="flex-start" display="flex">
							<ListIcon fontSize={32} as={Wallet} />
							<Text>{intl.formatMessage({id: 'qatar.1secItem2'})}</Text>
						</ListItem>
					</List>
					<Button
						onClick={onOpen}
						boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05)'
						variant="primary"
						mt='32px'
						mb={{base: '12px', lg: '16px'}}
						height="48px"
						py="12px"
						px="20px"
						_hover={{
							color: 'white',
							backgroundColor: 'primary.700'
						}}>
						{intl.formatMessage({id: 'qatar.1secButton'})}
					</Button>
					<Text
						fontSize='14px'
						color='gray.500'
						textAlign={{base: 'center', lg: 'left'}}>
						{intl.formatMessage({id: 'qatar.1secSBefore'})}{' '}
						<Text
							as='span'
							color='primary.700'
							onClick={handleLoginLink}
							_hover={{
								textDecor: 'underline',
								cursor: 'pointer'
							}}>
							{intl.formatMessage({id: 'qatar.1secSLink'})}
						</Text>
						{' '}{intl.formatMessage({id: 'qatar.1secSAfter'})}
					</Text>
				</Flex>
				{device === 'lg' ? <Image src='/images/stadium.png' alt='agrotoken arg' mb={{base: '64px', lg:'95px'}}/> : null}
			</Flex>
		</>
	);
};

export default QatarFirstSection;
