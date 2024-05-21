// packages
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Text,
	Flex,
	useBreakpointValue,
} from '@chakra-ui/react';
import FiChevronDown from '@svg/chevron-down.svg';
import FiChevronUp from '@svg/chevron-up.svg';
import { useIntl } from 'gatsby-plugin-react-intl';
import React, {FC, useState} from 'react';

//data
import Locales from '@data/locales';

//types
import { ILocales } from '@def/ILocales';
import { ILangProps } from './types';

//components
import BuilderIcon from './builder-icon';

//component that changes locale
const Lang: FC<ILangProps> = ({ variant }) => {
	const intl = useIntl();
	const locale = intl.locale.toUpperCase();
	const device = useBreakpointValue({ base: 'sm', lg: 'lg' });
	const [localeURL, setLocaleURL] = useState<string>('');

	const handleLocation = (newLocale?: string) => {
		const locationArray = window.location.pathname.split('/');
		const url = Locales.find((item) => item.url === newLocale);
		let newURL = `/${newLocale}/${locationArray[locationArray.length - 1]}`
		locationArray.length === 2 && url ? newURL = `/${url.url}` : newURL
		setLocaleURL(newURL);
	};

	return (
		<Menu colorScheme="gray.500">
			{({ isOpen }) => (
				<>
					<Flex alignItems="center">
						{device === 'sm' && <BuilderIcon locale={locale} />}
						<MenuButton mr="5px">
							<Flex
								alignItems="center"
								sx={{
									path: {
										stroke: variant === 'Teaser' ? 'white' : 'gray.500',
									},
								}}
							>
								<Text
									mr="13px"
									ml={{ base: 2, lg: 0 }}
									lineHeight="20px"
									color={variant === 'Teaser' ? 'white' : 'gray.500'}
									fontSize={14}
									_hover={{ color: 'gray.700', cursor: 'pointer' }}
								>
									{locale}
								</Text>
								{isOpen ? <FiChevronUp /> : <FiChevronDown />}
							</Flex>
						</MenuButton>
					</Flex>
					<MenuList>
						{Locales.map((item: ILocales) => (
							<a key={item.id} href={localeURL.length === 0 ? '#' : localeURL} onClick={() => handleLocation(item.url)}>
								<MenuItem color="gray.500" _hover={{ color: 'gray.700' }}>
									<Text ml={1}>{item.name}</Text>
								</MenuItem>
							</a>
						))}
					</MenuList>
				</>
			)}
		</Menu>
	);
};
export default Lang;
